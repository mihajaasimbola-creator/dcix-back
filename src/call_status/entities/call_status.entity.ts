import { CallXCallStatus } from 'src/call_x_call_status/entities/call_x_call_status.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CallStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  designation: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => CallXCallStatus,
    (callXCallStatus) => callXCallStatus.callStatus,
  )
  callXCallStatuses: CallXCallStatus[];
}
