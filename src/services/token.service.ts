import { TokenDTO } from "../DTO/token.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Token } from "../models/token"

export class TokenService {

    private tokenRepository: IRepository<TokenDTO>

    constructor(tokenRepository: IRepository<TokenDTO>) {
        this.tokenRepository = tokenRepository
    }

    async TokenFindAll(): Promise<Array<TokenDTO> | null> {
        return this.tokenRepository.findAll().then((data) => {
            return data
        })
    }

    async TokenFindById(id: number): Promise<TokenDTO | null> {
        return this.tokenRepository.findById(id).then((data) => {
            return data
        })
    }

    async TokenCreate(token: Token): Promise<TokenDTO | null> {
        return this.tokenRepository.create(token).then((data) => {
            return data
        })
    }

    async TokenDelete(id: number): Promise<boolean | number> {
        return this.tokenRepository.delete(id).then((data: boolean | number) => {
            return data
        })
    }

    async TokenUpdate(token: Token, id: number): Promise<boolean | number> {
        return this.tokenRepository.update(token, id).then((data) => {
            return data
        })
    }

}