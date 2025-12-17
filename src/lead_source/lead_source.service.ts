import { Injectable } from '@nestjs/common';
import { CreateLeadSourceDto } from './dto/create-lead_source.dto';
import { UpdateLeadSourceDto } from './dto/update-lead_source.dto';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { LeadSource } from './entities/lead_source.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class LeadSourceService {
  constructor(
    @InjectRepository(LeadSource)
    private readonly leadSourceRepository: Repository<LeadSource>,
    @InjectEntityManager() private readonly em: EntityManager,
  ) {}
  create(createLeadSourceDto: CreateLeadSourceDto[]) {
    return this.em.transaction(async (manager) => {
      const createdSources: LeadSource[] = [];

      for (const dto of createLeadSourceDto) {
        const source = manager.create(LeadSource, {
          name: dto.name,
          email: dto.email,
          telephone: dto.telephone,
          note: dto.note,
          created_at: new Date(),
          site_url: dto.site_url,
        });
        const savedSource = await manager.save(source);
        createdSources.push(savedSource);
      }

      return createdSources;
    });
  }

  findAll() {
    return this.leadSourceRepository.find();
  }

  findOne(id: number) {
    return this.leadSourceRepository.findOne({ where: { id } });
  }

  update(id: number, updateLeadSourceDto: UpdateLeadSourceDto) {
    updateLeadSourceDto.id = id;
    return this.leadSourceRepository.update(
      id,
      updateLeadSourceDto as unknown as LeadSource,
    );
  }

  remove(id: number) {
    return this.leadSourceRepository.delete(id);
  }
}
