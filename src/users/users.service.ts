import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  findAll() {
    return this.userRepo.find({ relations: ['roles'] });
  }

  findByUsername(username: string) {
    return this.userRepo.findOne({ where: { username }, relations: ['roles'] });
  }

  create(user: Partial<User>) {
    return this.userRepo.save(user);
  }
}
