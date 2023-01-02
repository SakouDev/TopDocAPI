import { HoursRepository } from '../../repository/hours.repository';
import { HoursService } from '../../services/hours.service';
import { HoursHandler } from '../hoursHandler';

export const hoursHandler = new HoursHandler(new HoursService(new HoursRepository()));