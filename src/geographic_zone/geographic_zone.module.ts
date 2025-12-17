import { Module } from '@nestjs/common';
import { GeographicZoneService } from './geographic_zone.service';
import { GeographicZoneController } from './geographic_zone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeographicZone } from './entities/geographic_zone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GeographicZone])],
  controllers: [GeographicZoneController],
  providers: [GeographicZoneService],
})
export class GeographicZoneModule {}
