import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { RoleDto } from 'src/roles/dto/role.dto';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'MANAGER')
  findAll() {
    return this.usersService.findAll();
  }

  @Post('create-role')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async createRoles(@Body() roles: RoleDto[]) {
    return this.usersService.createRoles(roles);
  }

  @Post('create-user')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'MANAGER')
  async createUser(@Body() createUserdto: CreateUserDto[]) {
    return await this.usersService.createUsers(createUserdto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'MANAGER')
  async deleteUser(@Param('id') userId: number) {
    return await this.usersService.deleteUser(userId);
  }
}
