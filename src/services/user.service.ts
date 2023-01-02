import { UserDTO } from "../DTO/user.dto";
import { IRepository } from "../repository/core/repository.interface";
import { User } from "../models/user"
import { IService } from "./core/service.interface";

export class UserService implements IService<UserDTO> {

    private userRepository: IRepository<UserDTO>

    constructor(userRepository: IRepository<UserDTO>) {
        this.userRepository = userRepository
    }

    async findAll(): Promise<Array<UserDTO> | null> {
        return this.userRepository.findAll()
    }

    async findById(id: number): Promise<UserDTO | null> {
        return this.userRepository.findById(id)
    }

    async create(user: User): Promise<UserDTO> {
        return this.userRepository.create(user)
    }

    async delete(id: number): Promise<boolean | number> {
        return this.userRepository.delete(id)
    }

    async update(user: User, id: number): Promise<boolean | number> {
        return this.userRepository.update(user, id)
    }

}