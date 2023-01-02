import { UserRepository } from '../../repository/user.repository';
import { UserService } from '../../services/user.service';
import { UserHandler } from '../userHandler';

export const userHandler = new UserHandler(new UserService(new UserRepository()));