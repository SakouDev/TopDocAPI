import { Banned } from "../models/banned";
import { BannedDTO } from "../DTO/banned.dto";
import { BannedMapper } from "../mapper/banned.mapper";
import { IRepository } from "./core/repository.interface";

export class BannedRepository implements IRepository<BannedDTO> {
    async findById(id: number): Promise<BannedDTO | null> {
        return Banned.findByPk(id).then((data: Banned | null) => {
            return BannedMapper.MapToDTO(data)
        })
    }
    async findAll(): Promise<Array<BannedDTO>> {
        return Banned.findAll().then((data: Array<Banned>) => {
            return data.map((banned: Banned) => {
                return BannedMapper.MapToDTO(banned)
            })
        })
    }
    async create(body: Partial<Banned>): Promise<BannedDTO> {
        return Banned.create(body).then((data: Banned) => {
            return BannedMapper.MapToDTO(data)
        })
    }
    async delete(id: number): Promise<boolean | number> {
        return Banned.destroy({ where: { id: id } }).then((data: boolean | number) => {
            return data
        })
    }
    async update(body: Banned, id: number): Promise<boolean | number> {
        return Banned.update(body, { where: { id: id } }).then((data: Array<(boolean | number)>) => {
            return data[0]
        })
    }

}