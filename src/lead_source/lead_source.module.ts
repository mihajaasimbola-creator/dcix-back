import { Module } from '@nestjs/common';
import { LeadSourceService } from './lead_source.service';
import { LeadSourceController } from './lead_source.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadSource } from './entities/lead_source.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LeadSource])],
  controllers: [LeadSourceController],
  providers: [LeadSourceService],
})
export class LeadSourceModule {}
