import { PlanningDTO } from "../../types/DTO/planning.dto";
import { Planning } from "../models/planning";

export class PlanningMapper {

    static MapToDTO(planning: Planning | null): PlanningDTO {

        if (planning === null) return null as any
        const DTO: PlanningDTO = {
            name: planning.name,
            startDate: planning.startDate,
            validityDuration: planning.validityDuration
        }
        console.log("DTO", DTO)
        return DTO
    }

}