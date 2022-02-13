import { PartialType } from '@nestjs/mapped-types';
import { CreateTripDto } from './create-trip.dto';

export class UpdateTripDto extends PartialType(CreateTripDto) {
  'trip': string;
  'day': string;
  'time': string;
  'place': string;
}
