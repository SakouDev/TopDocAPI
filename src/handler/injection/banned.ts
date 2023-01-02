import { BannedRepository } from '../../repository/banned.repository';
import { BannedService } from '../../services/banned.service';
import { BannedHandler } from '../bannedHandler';

export const bannedHandler = new BannedHandler(new BannedService(new BannedRepository()));