import { Module } from '@nestjs/common';
import { GeographicZoneService } from './geographic_zone.service';
import { GeographicZoneController } from './geographic_zone.controller';

@Module({
  controllers: [GeographicZoneController],
  providers: [GeographicZoneService],
})
export class GeographicZoneModule {}
