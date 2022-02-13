import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { Trip } from './entities/trip.entity';

@Injectable()
export class TripService {
  constructor(@InjectRepository(Trip) private tripRepo: Repository<Trip>) {}
  async create(createTripDto: CreateTripDto) {
    return this.tripRepo.save(createTripDto);
  }

  async findAll() {
    return this.tripRepo.find();
  }

  async findOne(id: number) {
    return this.tripRepo.findOne(id);
  }

  async findByName(trip: String) {
    return this.tripRepo.find({ where: { trip: trip } });
  }
  // update(id: number, updateTripDto: UpdateTripDto) {
  //   return `This action updates a #${id} trip`;
  // }

  remove(id: number) {
    return this.tripRepo.delete(id);
  }
}
