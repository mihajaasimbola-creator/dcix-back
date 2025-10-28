import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],  // <-- indispensable
  exports: [TypeOrmModule], // <-- pour rendre accessible ailleurs (main.ts, auth, etc.)
})
export class RolesModule {}
