import { Token } from "../models/token";
import { TokenMapper } from "../mapper/token.mapper";
import { IRepository } from "./core/repository.interface";

export class TokenRepository implements IRepository<Partial<Token>> {
    
    async findById(id: number): Promise<Partial<Token> | null> {
        return Token.findByPk(id).then((data: Token | null) => {
            return TokenMapper.MapToDTO(data)
        })
    }
    async findAll(): Promise<Array<Partial<Token>>> {
        return Token.findAll().then((data: Array<Token>) => {
            return data.map((token: Token) => {
                return TokenMapper.MapToDTO(token)
            })
        })
    }
    async create(body: Partial<Token>): Promise<Partial<Token>> {
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