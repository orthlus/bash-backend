import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  rating: number;

  @Column()
  date: Date;
}
