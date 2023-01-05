import { TimeslotDTO } from "../../types/DTO/timeslot.dto";
import { Timeslot } from "../models/timeslot";

export class TimeslotMapper {

    static MapToDTO(timeslot: Timeslot | null): TimeslotDTO {

        if (timeslot === null) return null as any
        const DTO: TimeslotDTO = {
            weekday: timeslot.weekday,
            startHour: timeslot.startHour,
            endHour: timeslot.endHour
        }
        console.log("DTO", DTO)
        return DTO
    }

}