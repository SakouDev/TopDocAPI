import { Tokens } from "../models/tokens";
import { TokenDTO } from "../DTO/tokens.dto";
import { TokenMapper } from "../mapper/tokens.mapper";
import { IRepository } from "./core/repository.interface";

export class TokenRepository implements IRepository<TokenDTO> {
    async findById(id: number): Promise<TokenDTO | null> {
        return Tokens.findByPk(id).then((data : Tokens | null) => {
            return TokenMapper.MapToDTO(data)
        })
    }
    async findAll(): Promise<Array<TokenDTO>> {
        return Tokens.findAll().then((data : Array<Tokens>) => {
            return data.map((tokens : Tokens) => {
                return TokenMapper.MapToDTO(tokens)
            })
        })
    }
    async create(body: Partial<Tokens>): Promise<TokenDTO> {
        return Tokens.create(body).then((data : Tokens) => {
                return TokenMapper.MapToDTO(data)
        })
    }
    async delete(id: number): Promise<boolean | number> {
        return Tokens.destroy({where:{id:id}}).then((data : boolean | number) => {
            return data
        })
    }
    async update(body: Tokens, id: number): Promise<boolean | number> {
        return Tokens.update(body, {where:{id: id}}).then((data : Array<(boolean | number)>) => {
            return data[0]
        })     
    }

}