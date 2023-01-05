import { IService } from '../services/core/service.interface';
import { Request, Response } from "express";
import { TokenDTO } from '../../types/DTO/token.dto';
import bcrypt from 'bcrypt';


export class TokenHandler {

    private tokenService : IService<TokenDTO>

    constructor(tokenService: IService<TokenDTO>) {
        this.tokenService = tokenService;
    }

    getAllToken = async (req: Request, res: Response) => {
        try {
            const result = await this.tokenService.findAll()
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getTokenById = async (req: Request, res: Response) => {
        try {
            const result = await this.tokenService.findById(parseInt(req.params.id))
            if (result === null) {
                return res.status(404).send()
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    createToken = async (req: Request, res: Response) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const result = await this.tokenService.create(req.body)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    deleteToken = async (req: Request, res: Response) => {
        try {
            const result = await this.tokenService.delete(parseInt(req.params.id))
            return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    updateToken = async (req: Request, res: Response) => {
        try {
            if (req.body.password) {
                let hashedPassword = await bcrypt.hash(req.body.password, 10);
                req.body = { ...req.body, password: hashedPassword }
            }
            const result = await this.tokenService.update(req.body, parseInt(req.params.id))
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}