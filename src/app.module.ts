import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './controllers/users/entities/user.entity';
import { UsersModule } from './controllers/users/users.module';
import { DrinksModule } from './controllers/drinks/drinks.module';
import { Drink } from './controllers/drinks/entities/drink.entity';
import { DailyReport } from './controllers/daily-reports/entities/daily-report.entity';
import { DailyReportsModule } from './controllers/daily-reports/daily-reports.module';
import { FaqsModule } from './controllers/faqs/faqs.module';
import { Faq } from './controllers/faqs/entities/faq.entity';
import { AuthModule } from './controllers/auth/auth.module';

@Module({
  imports: [
    UsersModule,
    DrinksModule,
    DailyReportsModule,
    FaqsModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '18.193.130.171',
      port: 3306,
      username: 'root',
      password: 'abcdABCD1234',
      database: 'cafecool',
      entities: [User, Drink, DailyReport, Faq],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}