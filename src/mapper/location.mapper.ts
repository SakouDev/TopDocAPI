import { LocationDTO } from "../DTO/location.dto";
import { Location } from "../models/location";

export class LocationMapper {

    static MapToDTO(location: Location | null): LocationDTO {

        if (location === null) return null as any
        const DTO: LocationDTO = {
            zipCode: location.zipCode,
            city: location.city,
            address: location.address
        }
        console.log("DTO", DTO)
        return DTO
    }

}