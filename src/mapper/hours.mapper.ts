import { HoursDTO } from "../DTO/hours.dto";
import { Hours } from "../models/hours";

export class HoursMapper {

    static MapToDTO(hours: Hours | null): HoursDTO {

        if (hours === null) return null as any
        const DTO: HoursDTO = {
            today: hours.today,
            startHour: hours.startHour,
            duration: hours.duration
        }
        console.log("DTO", DTO)
        return DTO
    }

}