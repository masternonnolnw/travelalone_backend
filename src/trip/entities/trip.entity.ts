import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  'id': number;
  @Column()
  'trip': string;
  @Column()
  'day': string;
  @Column()
  'time': string;
  @Column()
  'place': string;
}
