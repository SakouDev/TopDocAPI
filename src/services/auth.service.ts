import { IRepositoryToken } from './../repository/core/repository.interface';
import { Auth } from "../../types/auth";
import { IAuthService, IService } from "./core/service.interface";

export class AuthService implements IAuthService<Auth> {

    private authRepository: IRepositoryToken<Auth>

    constructor(authRepository: IRepositoryToken<Auth>) {
        this.authRepository = authRepository
    }
    
    login(t: Auth): Promise<Auth> {
        return this.authRepository.login(t)
    }
    logout(t: Auth): Promise<Auth> {
        return this.authRepository.login(t)
    }
    verifToken(t: Auth): Promise<Auth> {
        return this.authRepository.login(t)
    }
}