import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { Faq } from './entities/faq.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { of } from 'rxjs';
import { Drink } from '../drinks/entities/drink.entity';

@Injectable()
export class FaqsService {
  constructor(
    @InjectRepository(Faq)
    private faqRepository: Repository<Faq>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Drink)
    private drinkRepository: Repository<Drink>
  ) {}

  async create(createFaqDto: CreateFaqDto) {
    const id = createFaqDto.userId;
    const user = await this.userRepository.findOneOrFail({ where: { id: id } });
    createFaqDto.dailyList.map(async (item) => {
      await this.drinkRepository
        .createQueryBuilder()
        .update(Drink)
        .set({ carried: () => 'carried + :x' })
        .setParameter('x', item.quantity)
        .where('id = :id', { id: item.drinkId })
        .execute();
    });

    return this.faqRepository.insert({
      user: user,
      total: createFaqDto.total,
      dailyList: createFaqDto.dailyList,
      number: createFaqDto.number,
    });
  }

  async findAll() {
    return await this.faqRepository.find({
      relations: ['user'],
    });
  }

  async findOne(id: number): Promise<any> {
    return await this.faqRepository.findOne({
      where: {
        id: id,
      },
      relations: ['user'],
    });
  }

  update(id: number, updateFaqDto: UpdateFaqDto) {
    return `This action updates a #${id} faq`;
  }

  remove(id: number) {
    return `This action removes a #${id} faq`;
  }
}
