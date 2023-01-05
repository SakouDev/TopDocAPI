import { BannedDTO } from "../../types/DTO/banned.dto";
import { Banned } from "../models/banned";

export class BannedMapper {

    static MapToDTO(banned: Banned | null): BannedDTO {

        if (banned === null) return null as any
        const DTO: BannedDTO = {
            reason: banned.reason
        }
        console.log("DTO", DTO)
        return DTO
    }

}