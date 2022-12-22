import { Activity } from "../models/activity";
import { ActivityDTO } from "../DTO/activity.dto";
import { ActivityMapper } from "../mapper/activity.mapper";
import { IRepository } from "./core/repository.interface";

export class ActivityRepository implements IRepository<ActivityDTO> {
    async findById(id: number): Promise<ActivityDTO | null> {
        return Activity.findByPk(id).then((data: Activity | null) => {
            return ActivityMapper.MapToDTO(data)
        })
    }
    async findAll(): Promise<Array<ActivityDTO>> {
        return Activity.findAll().then((data: Array<Activity>) => {
            return data.map((activity: Activity) => {
                return ActivityMapper.MapToDTO(activity)
            })
        })
    }
    async create(body: Partial<Activity>): Promise<ActivityDTO> {
        return Activity.create(body).then((data: Activity) => {
            return ActivityMapper.MapToDTO(data)
        })
    }
    async delete(id: number): Promise<boolean | number> {
        return Activity.destroy({ where: { id: id } }).then((data: boolean | number) => {
            return data
        })
    }
    async update(body: Activity, id: number): Promise<boolean | number> {
        return Activity.update(body, { where: { id: id } }).then((data: Array<(boolean | number)>) => {
            return data[0]
        })
    }

}