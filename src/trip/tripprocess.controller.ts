import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TripService } from './trip.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';

@Controller('tripprocess')
export class TripProcessController {
  constructor(private readonly tripService: TripService) {}
  @Get(':trip')
  async getAllEvent(@Param('trip') trip: String) {
    const Events = await this.tripService.findByName(trip);
    var allEvent = Events.slice();
    allEvent.sort(function (a, b): any {
      return a.day.localeCompare(b.day);
    });
    var eventByDay = [];
    var bfDay = allEvent[0].day;
    var nd = 0;

    var place = [];
    var np = 0;
    eventByDay[0] = [];

    for (let i = 0; i < allEvent.length; i++) {
      if (allEvent[i].day != bfDay) {
        eventByDay[nd] = { name: bfDay, place: place };
        bfDay = allEvent[i].day;
        place = [];
        np = 0;
        nd++;
      }
      place[np] = {
        time: allEvent[i].time,
        place: allEvent[i].place,
      };
      np++;
    }
    eventByDay[nd] = { name: bfDay, place: place };
    return eventByDay;
  }
}
