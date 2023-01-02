import { TokenRepository } from '../../repository/token.repository';
import { TokenService } from '../../services/token.service';
import { TokenHandler } from '../tokenHandler';

export const tokenHandler = new TokenHandler(new TokenService(new TokenRepository()));