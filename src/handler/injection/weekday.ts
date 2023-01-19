import { WeekdayRepository } from '../../repository/weekday.repository';
import { WeekdayService } from '../../services/weekday.service';
import { WeekdayHandler } from '../weekdayHandler';

export const weekdayHandler = new WeekdayHandler(new WeekdayService(new WeekdayRepository()));