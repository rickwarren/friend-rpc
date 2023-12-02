import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as protoscript from 'protoscript';

@Entity()
export class FriendRequest extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  requesterId: number;

  @Column()
  addresseId: number;

  @Column()
  status: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP(6)' })
  createdAt: protoscript.Timestamp;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
  updatedAt: protoscript.Timestamp;
}
