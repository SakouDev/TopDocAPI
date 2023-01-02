import { TokenDTO } from "../DTO/token.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Token } from "../models/token"
import { IService } from "./core/service.interface";

export class TokenService implements IService<TokenDTO> {

    private tokenRepository: IRepository<TokenDTO>

    constructor(tokenRepository: IRepository<TokenDTO>) {
        this.tokenRepository = tokenRepository
    }

    async findAll(): Promise<Array<TokenDTO> | null> {
        return this.tokenRepository.findAll()
    }

    async findById(id: number): Promise<TokenDTO | null> {
        return this.tokenRepository.findById(id)
    }

    async create(token: Token): Promise<TokenDTO> {
        return this.tokenRepository.create(token)
    }

    async delete(id: number): Promise<boolean | number> {
        return this.tokenRepository.delete(id)
    }

    async update(token: Token, id: number): Promise<boolean | number> {
        return this.tokenRepository.update(token, id)
    }

}