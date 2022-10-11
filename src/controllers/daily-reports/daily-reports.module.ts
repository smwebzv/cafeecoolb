import { Module } from '@nestjs/common';
import { DailyReportsService } from './daily-reports.service';
import { DailyReportsController } from './daily-reports.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyReport } from './entities/daily-report.entity';
import { User } from '../users/entities/user.entity';
import { Drink } from '../drinks/entities/drink.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, DailyReport, Drink])],
  controllers: [DailyReportsController],
  providers: [DailyReportsService]
})
export class DailyReportsModule {}
