import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cats extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
