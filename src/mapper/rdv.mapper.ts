import { RdvDTO } from "../../types/DTO/rdv.dto";
import { Rdv } from "../models/rdv";

export class RdvMapper {

    static MapToDTO(rdv: Rdv | null): RdvDTO {

        if (rdv === null) return null as any
        const DTO: RdvDTO = {
            rdvStartDate: rdv.rdvStartDate,
            rdvEndHour: rdv.rdvEndHour,
        }
        console.log("DTO", DTO)
        return DTO
    }

}