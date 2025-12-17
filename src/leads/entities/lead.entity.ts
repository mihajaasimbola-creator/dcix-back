import { Call } from 'src/call/entities/call.entity';
import { GeographicZone } from 'src/geographic_zone/entities/geographic_zone.entity';
import { LeadSource } from 'src/lead_source/entities/lead_source.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Index,
} from 'typeorm';

@Entity()
@Index('UQ_lead_telephone', ['telephone'], { unique: true })
export class Lead {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: true })
  name: string;

  @Column({ length: 255, nullable: true })
  email: string;

  @Column({ length: 50, nullable: true })
  telephone: string;

  // ================================
  // Geographic Zone
  // ================================
  @ManyToOne(() => GeographicZone, (zone) => zone.leads, { eager: true })
  @JoinColumn({ name: 'geographic_zone_id' })
  geographic_zone: GeographicZone;

  @Column({ nullable: true })
  geographic_zone_id: number;

  // ================================
  // Lead Source
  // ================================
  @ManyToOne(() => LeadSource, (source) => source.leads, { eager: true })
  @JoinColumn({ name: 'lead_source_id' })
  leadSource: LeadSource;

  @Column({ nullable: true })
  lead_source_id: number;

  @OneToMany(() => Call, (call) => call.lead)
  calls: Call[];
}
