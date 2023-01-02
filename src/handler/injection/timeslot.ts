import { TimeslotRepository } from '../../repository/timeslot.repository';
import { TimeslotService } from '../../services/timeslot.service';
import { TimeslotHandler } from '../timeslotHandler';

export const timeslotHandler = new TimeslotHandler(new TimeslotService(new TimeslotRepository()));