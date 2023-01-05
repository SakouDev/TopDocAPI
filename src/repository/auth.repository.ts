import { Auth } from "../../types/auth";
import { Token } from "../models/token";
import { IRepositoryToken } from "./core/repository.interface";

export class authRepository implements IRepositoryToken<Token> {

    private authRepository: IRepositoryToken<Token>

    constructor(authRepository: IRepositoryToken<Token>) {
        this.authRepository = authRepository
    }

    login(t: Token): Promise<Token> {
        throw new Error("Method not implemented.");
    }
    loginAdmin(t: Token): Promise<Token> {
        throw new Error("Method not implemented.");
    }
    logout(t: Token): Promise<Token> {
        throw new Error("Method not implemented.");
    }
    verifToken(t: Token): Promise<Token> {
        throw new Error("Method not implemented.");
    }
}