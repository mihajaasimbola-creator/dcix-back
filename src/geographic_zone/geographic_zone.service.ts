import { Injectable } from '@nestjs/common';
import { CreateGeographicZoneDto } from './dto/create-geographic_zone.dto';
import { UpdateGeographicZoneDto } from './dto/update-geographic_zone.dto';

@Injectable()
export class GeographicZoneService {
  create(createGeographicZoneDto: CreateGeographicZoneDto) {
    return 'This action adds a new geographicZone';
  }

  findAll() {
    return `This action returns all geographicZone`;
  }

  findOne(id: number) {
    return `This action returns a #${id} geographicZone`;
  }

  update(id: number, updateGeographicZoneDto: UpdateGeographicZoneDto) {
    return `This action updates a #${id} geographicZone`;
  }

  remove(id: number) {
    return `This action removes a #${id} geographicZone`;
  }
}
