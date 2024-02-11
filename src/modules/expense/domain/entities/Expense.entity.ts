import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('decimal', { precision: 5, scale: 2 })
  amount: number;

  @Column()
  date: Date;

  @Column()
  category: string;

  @Column()
  paymentMethod: string;

  @Column()
  frequency: string;

  @Column()
  paymentStatus: string;

  @Column()
  notes: string;

  @Column('simple-array')
  tags: string[];
}
