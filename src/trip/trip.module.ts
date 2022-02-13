import { Module } from '@nestjs/common';
import { TripService } from './trip.service';
import { TripController } from './trip.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trip } from './entities/trip.entity';
import { TripProcessController } from './tripprocess.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Trip])],
  controllers: [TripController, TripProcessController],
  providers: [TripService],
})
export class TripModule {}
