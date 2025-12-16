import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Role } from 'src/roles/roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role, User])], // <-- obligatoire pour injecter UserRepository
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // <-- utile si AuthModule a besoin de UsersService
})
export class UsersModule {}
