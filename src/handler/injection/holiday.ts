import { HolidayRepository } from '../../repository/holiday.repository';
import { HolidayService } from '../../services/holiday.service';
import { HolidayHandler } from '../holidayHandler';

export const holidayHandler = new HolidayHandler(new HolidayService(new HolidayRepository()));