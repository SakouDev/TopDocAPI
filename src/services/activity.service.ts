import { IService } from './core/service.interface';
import { ActivityDTO } from "../DTO/activity.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Activity } from "../models/activity"

export class ActivityService implements IService<ActivityDTO> {

    private activityRepository: IRepository<ActivityDTO>

    constructor(activityRepository: IRepository<ActivityDTO>) {
        this.activityRepository = activityRepository
    }

    async findAll(): Promise<Array<ActivityDTO> | null> {
        return this.activityRepository.findAll()
    }

    async findById(id: number): Promise<ActivityDTO | null> {
        return this.activityRepository.findById(id)
    }

    async create(activity: Activity): Promise<ActivityDTO> {
        return this.activityRepository.create(activity)
    }

    async delete(id: number): Promise<boolean | number> {
        return this.activityRepository.delete(id)
    }

    async update(activity: Activity, id: number): Promise<boolean | number> {
        return this.activityRepository.update(activity, id)
    }

}