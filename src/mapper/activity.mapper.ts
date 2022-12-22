import { ActivityDTO } from "../DTO/activity.dto";
import { Activity } from "../models/activity";

export class ActivityMapper {

    static MapToDTO(activity: Activity | null): ActivityDTO {

        if (activity === null) return null as any
        const DTO: ActivityDTO = {
            name: activity.name,
            description: activity.description,
            nameCabinet: activity.nameCabinet,
            isActive: activity.isActive
        }
        console.log("DTO", DTO)
        return DTO
    }

}