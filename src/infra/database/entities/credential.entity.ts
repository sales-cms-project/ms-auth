import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'credentials',
})
export class CredentialEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'user_uuid',
    nullable: false,
  })
  userUuid: string;

  @Column({
    name: 'user_uuid',
    nullable: false,
  })
  password: string;

  @Column({
    name: 'is_blocked',
    default: false,
    nullable: false,
  })
  isBlocked: boolean;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt?: Date;
}
