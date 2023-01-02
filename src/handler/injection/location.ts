import { LocationRepository } from '../../repository/location.repository';
import { LocationService } from '../../services/location.service';
import { LocationHandler } from '../locationHandler';

export const locationHandler = new LocationHandler(new LocationService(new LocationRepository()));