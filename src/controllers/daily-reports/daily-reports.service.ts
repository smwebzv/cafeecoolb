import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { of } from 'rxjs';
import { Repository } from 'typeorm';
import { Drink } from '../drinks/entities/drink.entity';
import { User } from '../users/entities/user.entity';
import { CreateDailyReportDto } from './dto/create-daily-report.dto';
import { UpdateDailyReportDto } from './dto/update-daily-report.dto';
import { DailyReport } from './entities/daily-report.entity';

@Injectable()
export class DailyReportsService {
  constructor(
    @InjectRepository(DailyReport)
    private dailyReportRepository: Repository<DailyReport>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Drink)
    private drinkRepository: Repository<Drink>,
  ) {}

  async create(createDailyReportDto: CreateDailyReportDto, id: number) {
    const user = await this.userRepository.findOneOrFail({ where: { id: id } });

    createDailyReportDto.dailyList.map(async (item) => {
      await this.drinkRepository
        .createQueryBuilder()
        .update(Drink)
        .set({ carried: () => 'carried - :x' })
        .setParameter('x', item.consumption)
        .where('id = :id', { id: item.drinkId })
        .execute();
    });

    return this.dailyReportRepository.insert({
      user: user,
      shift: createDailyReportDto.shift,
      total: createDailyReportDto.total,
      dailyList: createDailyReportDto.dailyList,
    });
  }

  async findAll() {
    return await this.dailyReportRepository.find({
      relations: ['user'],
    });
  }

  async findOne(id: number): Promise<any> {
    return await this.dailyReportRepository.findOne({
      where: {
        id: id,
      },
      relations: ['user'],
    });
  }

  async update(id: number, updateDailyReportDto: UpdateDailyReportDto) {
    const result = await this.dailyReportRepository
      .createQueryBuilder()
      .update(updateDailyReportDto)
      .where({
        id: id,
      })
      .returning('*')
      .execute();

    return result.raw[0];
  }

  remove(id: number) {
    return `This action removes a #${id} dailyReport`;
  }
}
