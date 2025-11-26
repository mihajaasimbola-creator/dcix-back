import { Module } from '@nestjs/common';
import { CallXCallStatusService } from './call_x_call_status.service';
import { CallXCallStatusController } from './call_x_call_status.controller';

@Module({
  controllers: [CallXCallStatusController],
  providers: [CallXCallStatusService],
})
export class CallXCallStatusModule {}
