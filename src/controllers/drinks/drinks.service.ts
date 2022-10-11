import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { UpdateDrinkDto } from './dto/update-drink.dto';
import { Drink } from './entities/drink.entity';

@Injectable()
export class DrinksService {

  constructor(
    @InjectRepository(Drink)
    private drinksRepository: Repository<Drink>,
  ) {}

  create(createDrinkDto: CreateDrinkDto) {
    return this.drinksRepository.insert(createDrinkDto);
  }

  findAll() {
    return this.drinksRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} drink`;
  }

  update(id: number, updateDrinkDto: UpdateDrinkDto) {
    return `This action updates a #${id} drink`;
  }

  remove(id: number) {
    return `This action removes a #${id} drink`;
  }
}
