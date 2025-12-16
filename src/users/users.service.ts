import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { User } from './user.entity';
import { Role } from 'src/roles/roles.entity';
import { RoleDto } from 'src/roles/dto/role.dto';
import { CreateUserDto } from './dto/create-user-dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    // Repository du role pour la création de rôles
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,

    // Repository de l'utilisateur pour les opérations sur les utilisateurs
    @InjectRepository(User)
    private userRepo: Repository<User>,

    // EntityManager pour les transactions complexes si nécessaire
    @InjectEntityManager() private readonly em: EntityManager,
  ) {}

  findAll() {
    return this.userRepo.find({
      select: ['id', 'username', 'fullName', 'email', 'isActive'], // pas de password
      relations: ['roles'],
    });
  }

  findByUsername(username: string) {
    return this.userRepo.findOne({ where: { username }, relations: ['roles'] });
  }

  create(user: Partial<User>) {
    return this.userRepo.save(user);
  }

  async createUsers(usersDto: CreateUserDto[]): Promise<User[]> {
    return await this.em.transaction(async (manager) => {
      const createdUsers: User[] = [];

      for (const dto of usersDto) {
        // 1️⃣ Vérifier l'existence des roles
        const roles = await manager.findByIds(Role, dto.roles_id || []);
        if (dto.roles_id.length !== roles.length) {
          throw new Error('Un ou plusieurs roles_id n’existent pas');
        }

        // 2️⃣ Hasher le mot de passe
        const hashedPassword = await bcrypt.hash(dto.password, 10);

        // 3️⃣ Créer l'utilisateur
        const user = manager.create(User, {
          username: dto.username,
          password: hashedPassword,
          fullName: dto.fullName,
          email: dto.email,
          isActive: dto.isActive,
          roles: roles, // assigner les rôles
        });

        // 4️⃣ Sauvegarder
        await manager.save(user);

        createdUsers.push(user);
      }

      return createdUsers;
    });
  }

  async deleteUser(userId: number) {
    this.userRepo.delete(userId);
  }

  async createRoles(roles: RoleDto[]) {
    const createdRoles = this.roleRepository.create(roles);
    return this.roleRepository.save(createdRoles);
  }
}
