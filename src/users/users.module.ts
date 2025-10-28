import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // <-- obligatoire pour injecter UserRepository
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // <-- utile si AuthModule a besoin de UsersService
})
export class UsersModule {}
