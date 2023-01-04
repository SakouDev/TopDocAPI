import { IService } from '../services/core/service.interface';
import { Request, Response } from "express";
import { UserDTO } from '../DTO/user.dto';
import bcrypt from 'bcrypt';


export class UserHandler {

    private userService : IService<UserDTO>

    constructor(userService: IService<UserDTO>) {
        this.userService = userService;
    }

    getAllUser = async (req: Request, res: Response) => {
        try {
            const result = await this.userService.findAll()
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getUserById = async (req: Request, res: Response) => {
        try {
            const result = await this.userService.findById(parseInt(req.params.id))
            if (result === null) {
                return res.status(404).send()
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    createUser = async (req: Request, res: Response) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const result = await this.userService.create(req.body)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    deleteUser = async (req: Request, res: Response) => {
        try {
            const result = await this.userService.delete(parseInt(req.params.id))
            return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    updateUser = async (req: Request, res: Response) => {
        try {
            if (req.body.password) {
                let hashedPassword = await bcrypt.hash(req.body.password, 10);
                req.body = { ...req.body, password: hashedPassword }
            }
            const result = await this.userService.update(req.body, parseInt(req.params.id))
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}