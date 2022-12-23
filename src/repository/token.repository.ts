import { Token } from "../models/token";
import { TokenDTO } from "../DTO/token.dto";
import { TokenMapper } from "../mapper/token.mapper";
import { IRepository } from "./core/repository.interface";

export class TokenRepository implements IRepository<TokenDTO> {
    async findById(id: number): Promise<TokenDTO | null> {
        return Token.findByPk(id).then((data: Token | null) => {
            return TokenMapper.MapToDTO(data)
        })
    }
    async findAll(): Promise<Array<TokenDTO>> {
        return Token.findAll().then((data: Array<Token>) => {
            return data.map((token: Token) => {
                return TokenMapper.MapToDTO(token)
            })
        })
    }
    async create(body: Partial<Token>): Promise<TokenDTO> {
        return Token.create(body).then((data: Token) => {
            return TokenMapper.MapToDTO(data)
        })
    }
    async delete(id: number): Promise<boolean | number> {
        return Token.destroy({ where: { id: id } }).then((data: boolean | number) => {
            return data
        })
    }
    async update(body: Token, id: number): Promise<boolean | number> {
        return Token.update(body, { where: { id: id } }).then((data: Array<(boolean | number)>) => {
            return data[0]
        })
    }

}