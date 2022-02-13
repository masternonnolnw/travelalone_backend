import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Trip } from './trip/entities/trip.entity';
import { TripModule } from './trip/trip.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '4913',
      database: 'trip',
      entities: [Trip],
      synchronize: true,
    }),
    TripModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
