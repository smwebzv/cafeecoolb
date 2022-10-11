import { Module } from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { DrinksController } from './drinks.controller';
import { Drink } from './entities/drink.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Drink])],
  controllers: [DrinksController],
  providers: [DrinksService]
})
export class DrinksModule {}