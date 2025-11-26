import { Lead } from "src/leads/entities/lead.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class GeographicZone {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({ length: 255 } )
    designation : string;

    @Column({ })
    location_permietters : string;
    
    @Column({ length: 500 } )
    location_middle : string;

    // Relation inverse : une zone → plusieurs leads
    @OneToMany(() => Lead, (lead) => lead.geographic_zone)
    leads: Lead[];

}
