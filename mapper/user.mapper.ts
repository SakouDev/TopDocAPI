import { UserDTO } from "../DTO/user.dto";
import { UserType } from "../types/user";

export class UserMapper {

    static MapToDTO( user : UserType | null): UserDTO | null {
        
        if( user === null ) return null
        const DTO : UserDTO = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            birthdate: user.birthdate,
            mail: user.mail,
            genre: "user.genre",
            phone:0,
            role: user.role
        }
        console.log("DTO",DTO)
        return DTO
    }

}