import { Module } from '@nestjs/common';
import { LeadSourceService } from './lead_source.service';
import { LeadSourceController } from './lead_source.controller';

@Module({
  controllers: [LeadSourceController],
  providers: [LeadSourceService],
})
export class LeadSourceModule {}
