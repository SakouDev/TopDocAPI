import { UserDTO } from "../DTO/user.dto";
import { IRepository } from "../repository/core/repository.interface";
import { User } from "../models/user"

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
    
    async UserCreate(user : User): Promise<UserDTO | null>{
        return this.userRepository.create(user).then((data) => {
            return data
        })
    }

    async UserDelete(id : number): Promise<boolean | number>{
        return this.userRepository.delete(id).then((data : boolean | number) => {
            return data
        })
    }

    async UserUpdate(user : User, id : number): Promise<boolean | number>{
        return this.userRepository.update(user, id).then((data) => {
            return data
        })
    }
    
}