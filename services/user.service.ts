import { UserDTO } from "../DTO/user.dto";
import { IRepository } from "../repository/core/repository.interface";
import { UserType } from "../types/user";

export class UserService {

    private userRepository: IRepository<UserDTO>

    constructor(userRepository : IRepository<UserDTO>) {
        this.userRepository = userRepository
    }

    async UserFindAll(): Promise<Array<UserDTO> | null>{
        return this.userRepository.findAll().then((data) => {
            return data
        })
    }

    async UserFindById(id : number): Promise<UserDTO | null>{
        return this.userRepository.findById(id).then((data) => {
            return data
        })
    }
    
    async UserCreate(user : UserType): Promise<UserDTO | null>{
        return this.userRepository.create(user).then((data) => {
            return data
        })
    }

    async UserDelete(id : number): Promise<boolean>{
        return this.userRepository.delete(id).then((data : boolean) => {
            return data
        })
    }

    async UserUpdate(user : UserType, id : number): Promise<boolean>{
        return this.userRepository.update(user, id).then((data) => {
            return data
        })
    }
    
}