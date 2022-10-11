import { User } from 'src/controllers/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { IDailyReport } from '../dto/create-daily-report.dto';

@Entity()
export class DailyReport {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  date: string;

  @Column()
  shift: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
  consumption: number;

  @Column('varchar', { length: 200, default: "" })
  consumptionDesc: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @Column({ type: 'json' })
  dailyList: IDailyReport[];
}
