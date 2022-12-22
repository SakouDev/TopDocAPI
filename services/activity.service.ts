import { ActivityDTO } from "../DTO/activity.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Activity } from "../models/activity"

export class ActivityService {

    private activityRepository: IRepository<ActivityDTO>

    constructor(activityRepository: IRepository<ActivityDTO>) {
        this.activityRepository = activityRepository
    }

    async ActivityFindAll(): Promise<Array<ActivityDTO> | null> {
        return this.activityRepository.findAll().then((data) => {
            return data
        })
    }

    async ActivityFindById(id: number): Promise<ActivityDTO | null> {
        return this.activityRepository.findById(id).then((data) => {
            return data
        })
    }

    async ActivityCreate(activitys: Activity): Promise<ActivityDTO | null> {
        return this.activityRepository.create(activitys).then((data) => {
            return data
        })
    }

    async ActivityDelete(id: number): Promise<boolean | number> {
        return this.activityRepository.delete(id).then((data: boolean | number) => {
            return data
        })
    }

    async ActivityUpdate(activity: Activity, id: number): Promise<boolean | number> {
        return this.activityRepository.update(activity, id).then((data) => {
            return data
        })
    }

}