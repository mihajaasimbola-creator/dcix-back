import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './roles/roles.entity';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { LeadSourceModule } from './lead_source/lead_source.module';
import { GeographicZoneModule } from './geographic_zone/geographic_zone.module';
import { LeadsModule } from './leads/leads.module';
import { CallStatusModule } from './call_status/call_status.module';
import { CallModule } from './call/call.module';
import { CallXCallStatusModule } from './call_x_call_status/call_x_call_status.module';
import { LeadSource } from './lead_source/entities/lead_source.entity';
import { GeographicZone } from './geographic_zone/entities/geographic_zone.entity';
import { Lead } from './leads/entities/lead.entity';
import { CallStatus } from './call_status/entities/call_status.entity';
import { CallXCallStatus } from './call_x_call_status/entities/call_x_call_status.entity';
import { Call } from './call/entities/call.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'dcix_db',
      entities: [
        User,
        Role, 
        LeadSource, 
        GeographicZone, 
        Lead, 
        CallStatus,
        CallXCallStatus,
        Call
      ],
      synchronize: true, // en dev, auto-crée les tables
    }),
    UsersModule,
    AuthModule,
    RolesModule,
    LeadSourceModule,
    GeographicZoneModule,
    LeadsModule,
    CallStatusModule,
    CallModule,
    CallXCallStatusModule,
  ],
})
export class AppModule {}
