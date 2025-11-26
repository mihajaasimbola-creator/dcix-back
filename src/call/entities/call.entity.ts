import { CallXCallStatus } from "src/call_x_call_status/entities/call_x_call_status.entity";
import { Lead } from "src/leads/entities/lead.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Call {
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne(() => User, (user) => user.calls, { eager: true })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    user_id : number;  
    
    @ManyToOne(() => Lead, (lead) => lead.calls, { eager: true })
    @JoinColumn({ name: 'lead_id' })
    lead: Lead; 
    @Column()
    lead_id : number;

    @Column({nullable: false})
    begined_at : Date;

    @Column({ nullable: false })
    ended_at : Date;

    @Column({ length: 500, nullable: true })
    vocal_path : string;

    @Column({ length: 1000,  nullable: true })
    comments : string;

    @OneToMany(() => CallXCallStatus, (callXCallStatus) => callXCallStatus.call)
    callXCallStatuses : CallXCallStatus[]; 

}
