import { Injectable } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Lead } from './entities/lead.entity';
import { Repository, EntityManager } from 'typeorm';

@Injectable()
export class LeadsService {
  constructor(
    @InjectRepository(Lead)
    private readonly leadRepository: Repository<Lead>,

    @InjectEntityManager() private readonly em: EntityManager,
  ) {}

  create(createLeadDto: CreateLeadDto[]) {
    return this.em.transaction(async (manager) => {
      const BATCH_SIZE = 1000; // Nombre de lignes par lot
      let totalInserted = 0;

      // Diviser en lots et insérer
      for (let i = 0; i < createLeadDto.length; i += BATCH_SIZE) {
        const batch = createLeadDto.slice(i, i + BATCH_SIZE);

        await manager
          .createQueryBuilder()
          .insert()
          .into(Lead)
          .values(
            batch.map((dto) => ({
              name: dto.name,
              email: dto.email,
              telephone: dto.phone_number,
              geographic_zone_id: dto.geographic_zone_id,
              lead_source_id: dto.lead_source_id,
            })),
          )
          .orIgnore()
          .execute();

        totalInserted += batch.length;
      }

      return {
        message: 'Insertion terminée',
        count: totalInserted,
        total: createLeadDto.length,
      };
    });
  }

  findAll() {
    return this.leadRepository.find();
  }
  async findPaginated(page: number = 1, limit: number = 1500) {
    const skip = (page - 1) * limit;

    const [leads, total] = await this.em
      .createQueryBuilder(Lead, 'lead')
      .select([
        'lead.id',
        'lead.name',
        'lead.email',
        'lead.telephone',
        'lead.geographic_zone_id',
        'lead.lead_source_id',
      ])
      .skip(skip)
      .take(limit)
      .orderBy('lead.id', 'ASC')
      .getManyAndCount();

    return {
      data: leads,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page < Math.ceil(total / limit),
        hasPreviousPage: page > 1,
      },
    };
  }

  findOne(id: number) {
    return this.leadRepository.findOne({ where: { id } });
  }

  update(id: number, updateLeadDto: UpdateLeadDto) {
    updateLeadDto.id = id;
    return this.leadRepository.update(id, updateLeadDto as unknown as Lead);
  }

  remove(id: number) {
    return this.leadRepository.delete(id);
  }
}
