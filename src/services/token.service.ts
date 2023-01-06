import { TokenDTO } from "../../types/DTO/token.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Token } from "../models/token"
import { IService } from "./core/service.interface";

export class TokenService implements IService<Partial<Token>> {

    private tokenRepository: IRepository<Partial<Token>>

    constructor(tokenRepository: IRepository<Partial<Token>>) {
        this.tokenRepository = tokenRepository
    }

    async findAll(): Promise<Array<Partial<Token>> | null> {
        return this.tokenRepository.findAll()
    }

    async findById(id: number): Promise<Partial<Token> | null> {
        return this.tokenRepository.findById(id)
    }

    async create(token: Token): Promise<Partial<Token>> {
        return this.tokenRepository.create(token)
    }

    async delete(id: number): Promise<boolean | number> {
        return this.tokenRepository.delete(id)
    }

    async update(token: Token, id: number): Promise<boolean | number> {
        return this.tokenRepository.update(token, id)
    }

}