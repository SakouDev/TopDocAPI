import { UserDTO } from "../../types/DTO/user.dto";
import { User } from "../models/user";

export class UserMapper {

    static MapToDTO(user: User | null): UserDTO {

        if (user === null) return null as any
        const DTO: UserDTO = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            birthdate: user.birthdate,
            mail: user.mail,
            genre: user.genre,
            phone: 0,
            role: user.role
        }
        console.log("DTO", DTO)
        return DTO
    }

}