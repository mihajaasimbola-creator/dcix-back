import { Injectable } from '@nestjs/common';
import { CreateGeographicZoneDto } from './dto/create-geographic_zone.dto';
import { UpdateGeographicZoneDto } from './dto/update-geographic_zone.dto';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { GeographicZone } from './entities/geographic_zone.entity';

@Injectable()
export class GeographicZoneService {
  constructor(
    @InjectRepository(GeographicZone)
    private readonly geographicZoneRepository: Repository<GeographicZone>,

    @InjectEntityManager() private readonly em: EntityManager,
  ) {}

  create(createGeographicZoneDto: CreateGeographicZoneDto[]) {
    return this.em.transaction(async (manager) => {
      const createdZones: GeographicZone[] = [];

      for (const dto of createGeographicZoneDto) {
        const zone = manager.create(GeographicZone, {
          designation: dto.designation,
          location_perimeters: dto.location_perimeters,
          location_middle: dto.location_middle,
        });
        const savedZone = await manager.save(zone);
        createdZones.push(savedZone);
      }

      return createdZones;
    });
  }

  findAll() {
    return this.geographicZoneRepository.find();
  }

  findOne(id: number) {
    return this.geographicZoneRepository.findOne({ where: { id } });
  }

  update(id: number, updateGeographicZoneDto: UpdateGeographicZoneDto) {
    updateGeographicZoneDto.id = id;
    return this.geographicZoneRepository.update(
      id,
      updateGeographicZoneDto as unknown as GeographicZone,
    );
  }

  remove(id: number) {
    return this.geographicZoneRepository.delete(id);
  }
}
