import { RdvRepository } from '../../repository/rdv.repository';
import { RdvService } from '../../services/rdv.service';
import { RdvHandler } from '../rdvHandler';

export const rdvHandler = new RdvHandler(new RdvService(new RdvRepository()));