import { Rdv } from "../models/rdv";
import { RdvDTO } from "../DTO/rdv.dto";
import { RdvMapper } from "../mapper/rdv.mapper";
import { IRepository } from "./core/repository.interface";

export class RdvRepository implements IRepository<RdvDTO> {
    async findById(id: number): Promise<RdvDTO | null> {
        return Rdv.findByPk(id).then((data: Rdv | null) => {
            return RdvMapper.MapToDTO(data)
        })
    }
    async findAll(): Promise<Array<RdvDTO>> {
        return Rdv.findAll().then((data: Array<Rdv>) => {
            return data.map((rdv: Rdv) => {
                return RdvMapper.MapToDTO(rdv)
            })
        })
    }
    async create(body: Partial<Rdv>): Promise<RdvDTO> {
        return Rdv.create(body).then((data: Rdv) => {
            return RdvMapper.MapToDTO(data)
        })
    }
    async delete(id: number): Promise<boolean | number> {
        return Rdv.destroy({ where: { id: id } }).then((data: boolean | number) => {
            return data
        })
    }
    async update(body: Rdv, id: number): Promise<boolean | number> {
        return Rdv.update(body, { where: { id: id } }).then((data: Array<(boolean | number)>) => {
            return data[0]
        })
    }

}