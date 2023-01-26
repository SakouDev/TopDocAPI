import { Weekday } from './../models/weekday';
import { Planning } from './../models/planning';
import { Rdv } from "../models/rdv";
import { RdvDTO } from "../../types/DTO/rdv.dto";
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
    async create(body: Partial<Rdv>): Promise<any> {

        Planning.findOne({ where: { activityId: body.activityId }, include: [Weekday] })
            .then((data: any) => {
                return data.Weekdays.forEach((element: any) => {
                    console.log("element : ", element.date.getDate());
                    const date = new Date(body.date!);
                    console.log("date : ", date.getDate());

                    try {
                        if (element.date.getDate() != date.getDate()) {
                            console.log("COUCOU")
                            return Rdv.create(body).then((data: Rdv) => {
                                return RdvMapper.MapToDTO(data);
                            });
                        } else {
                            console.log("MENFOU")
                        }
                    } catch (error) {
                        return error;
                    }
                });
            });
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