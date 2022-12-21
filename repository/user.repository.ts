import { User } from "../models/user";
import { UserDTO } from "../DTO/user.dto";
import { UserMapper } from "../mapper/user.mapper";
import { IRepository } from "./core/repository.interface";

export class UserRepository implements IRepository<UserDTO> {
    async findById(id: number): Promise<UserDTO | null> {
        return User.findByPk(id).then((data : User | null) => {
            return UserMapper.MapToDTO(data)
        })
    }
    async findAll(): Promise<Array<UserDTO>> {
        return User.findAll().then((data : Array<User>) => {
            return data.map((user : User) => {
                return UserMapper.MapToDTO(user)
            })
        })
    }
    async create(body: Partial<User>): Promise<UserDTO> {
        return User.create(body).then((data : User) => {
                return UserMapper.MapToDTO(data)
        })
    }
    async delete(id: number): Promise<boolean | number> {
        return User.destroy({where:{id:id}}).then((data : boolean | number) => {
            return data
        })
    }
    async update(body: User, id: number): Promise<boolean | number> {
        return User.update(body, {where:{id: id}}).then((data : Array<(boolean | number)>) => {
            return data[0]
        })     
    }
}