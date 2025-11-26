import { Call } from "src/call/entities/call.entity";
import { CallStatus } from "src/call_status/entities/call_status.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class CallXCallStatus {
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne(() => CallStatus, (callStatus) => callStatus.callXCallStatuses, { eager: true })
    @JoinColumn({ name: 'call_status_id' })
    callStatus: CallStatus;

    @Column()
    call_status_id : number;

    @ManyToOne(() => Call, (call) => call.callXCallStatuses, { eager: true })
    @JoinColumn({ name: 'call_id' })
    call: Call;

    @Column()
    call_id : number;

    @CreateDateColumn()
    created_at : Date;

    @UpdateDateColumn()
    updated_at : Date;
    

    
}
