import { User } from 'src/controllers/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { IDailyList } from '../dto/create-faq.dto';

@Entity()
export class Faq {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column({default: ""})
  number: string;

  @Column({default: ""})
  place: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @Column({ type: 'json' })
  dailyList: IDailyList[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  date: string;
}
