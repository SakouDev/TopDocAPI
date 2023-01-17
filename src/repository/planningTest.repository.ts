import { Planning } from "../models/planning";
import { PlanningDTO } from "../../types/DTO/planning.dto";
import { PlanningMapper } from "../mapper/planning.mapper";
import { IRepository } from "./core/repository.interface";
import { Hours } from "../models/hours";
import { Holiday } from "../models/holiday";
import { Activity } from "../models/activity";

export class PlanningTestRepository implements IRepository<PlanningDTO> {
    async findById(id: number): Promise<PlanningDTO | null> {
        const PlanningFound : any = await Planning.findByPk(id).then((data: Planning | null) => {
            return data
        })
        
        const HoursFound = await Hours.findAll({
            where: {
                planningId: id
            }
        })

        const HolidaysFound = await Holiday.findAll({
            where: {
                activityId: PlanningFound.activityId
            }
        })

        const PlanningBrut = {Planning: PlanningFound, Hours: HoursFound, Holidays: HolidaysFound}
        return PlanningBrut as any
    }
    async findAll(): Promise<Array<PlanningDTO>> {
        return Planning.findAll().then((data: Array<Planning>) => {
            return data.map((planning: Planning) => {
                return PlanningMapper.MapToDTO(planning)
            })
        })
    }
    async create(body: Partial<Planning>): Promise<PlanningDTO> {
        return Planning.create(body).then((data: Planning) => {
            return PlanningMapper.MapToDTO(data)
        })
    }
    async delete(id: number): Promise<boolean | number> {
        return Planning.destroy({ where: { id: id } }).then((data: boolean | number) => {
            return data
        })
    }
    async update(body: Planning, id: number): Promise<boolean | number> {
        return Planning.update(body, { where: { id: id } }).then((data: Array<(boolean | number)>) => {
            return data[0]
        })
    }

}