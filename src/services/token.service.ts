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
        return this.tokenRepository.findAll().then((data) => {
            return data
        })
    }

    async findById(id: number): Promise<TokenDTO | null> {
        return this.tokenRepository.findById(id).then((data) => {
            return data
        })
    }

    async create(token: Token): Promise<TokenDTO> {
        return this.tokenRepository.create(token).then((data) => {
            return data
        })
    }

    async delete(id: number): Promise<boolean | number> {
        return this.tokenRepository.delete(id).then((data: boolean | number) => {
            return data
        })
    }

    async update(token: Token, id: number): Promise<boolean | number> {
        return this.tokenRepository.update(token, id).then((data) => {
            return data
        })
    }

}