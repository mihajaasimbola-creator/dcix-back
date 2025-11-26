import { Call } from "src/call/entities/call.entity";
import { GeographicZone } from "src/geographic_zone/entities/geographic_zone.entity";
import { LeadSource } from "src/lead_source/entities/lead_source.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lead {
@PrimaryGeneratedColumn()
id : number;

@Column({ length: 255 })
name : string;

@Column({ length: 255 })
email : string; 

@Column({ length: 255 })
phone_number : string;

// ================================
  // RELATION ManyToOne → GeographicZone
// ================================
@ManyToOne(() => GeographicZone, (zone) => zone.leads, { eager: true })
@JoinColumn({ name: 'geographic_zone_id' })
geographic_zone: GeographicZone;

@Column({ nullable: true })
geographic_zone_id : number;

// ================================
// RELATION ManyToOne → LeadSource
// ================================
@ManyToOne(() => LeadSource, (source) => source.leads, { eager: true })
@JoinColumn({ name: 'lead_source_id' })
leadSource: LeadSource;

@Column()
lead_source_id: number;

@OneToMany(() => Call, (call) => call.lead  )
calls: Call[];


}
