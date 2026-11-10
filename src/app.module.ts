import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    DrinksModule,
    DailyReportsModule,
    FaqsModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST', 'localhost'),
        port: config.get<number>('DB_PORT', 3306),
        username: config.get<string>('DB_USERNAME', 'root'),
        password: config.get<string>('DB_PASSWORD', ''),
        database: config.get<string>('DB_DATABASE', 'cafecool'),
        entities: [User, Drink, DailyReport, Faq],
        synchronize: config.get<string>('TYPEORM_SYNC', 'true') === 'true',
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
