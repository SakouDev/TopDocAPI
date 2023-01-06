import { MailRepository } from './../../repository/mailAuth.repository';
import { TokenRepository } from '../../repository/token.repository';
import { AuthService } from '../../services/auth.service';
import { AuthHandler } from '../authHandler';

export const authHandler = new AuthHandler(new AuthService(new TokenRepository(), new MailRepository() ));