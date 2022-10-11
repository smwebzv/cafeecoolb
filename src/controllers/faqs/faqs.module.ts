import { Module } from '@nestjs/common';
import { FaqsService } from './faqs.service';
import { FaqsController } from './faqs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Faq } from './entities/faq.entity';
import { Drink } from '../drinks/entities/drink.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Faq, Drink])],
  controllers: [FaqsController],
  providers: [FaqsService],
})
export class FaqsModule {}
