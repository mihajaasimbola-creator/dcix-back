import { Lead } from 'src/leads/entities/lead.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class LeadSource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  telephone: string;

  @Column({ length: 500 })
  site_url: string;

  @Column({ length: 1000, nullable: true })
  note: string;
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Relation inverse : un source → plusieurs leads
  @OneToMany(() => Lead, (lead) => lead.leadSource)
  leads: Lead[];
}
