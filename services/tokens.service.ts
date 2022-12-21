import { TokenDTO } from "../DTO/tokens.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Tokens } from "../models/tokens"

export class TokenService {

    private tokenRepository: IRepository<TokenDTO>

    constructor(tokenRepository : IRepository<TokenDTO>) {
        this.tokenRepository = tokenRepository
    }

    async TokenFindAll(): Promise<Array<TokenDTO> | null>{
        return this.tokenRepository.findAll().then((data) => {
            return data
        })
    }

    async TokenFindById(id : number): Promise<TokenDTO | null>{
        return this.tokenRepository.findById(id).then((data) => {
            return data
        })
    }
    
    async TokenCreate(tokens : Tokens): Promise<TokenDTO | null>{
        return this.tokenRepository.create(tokens).then((data) => {
            return data
        })
    }

    async TokenDelete(id : number): Promise<boolean | number>{
        return this.tokenRepository.delete(id).then((data : boolean | number) => {
            return data
        })
    }

    async TokenUpdate(tokens : Tokens, id : number): Promise<boolean | number>{
        return this.tokenRepository.update(tokens, id).then((data) => {
            return data
        })
    }
    
}