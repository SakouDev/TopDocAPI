import { IService } from '../services/core/service.interface';
import { Request, Response } from "express";
import { BannedDTO } from '../../types/DTO/banned.dto';
import bcrypt from 'bcrypt';


export class BannedHandler {

    private bannedService : IService<BannedDTO>

    constructor(bannedService: IService<BannedDTO>) {
        this.bannedService = bannedService;
    }

    getAllBanned = async (req: Request, res: Response) => {
        try {
            const result = await this.bannedService.findAll()
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getBannedById = async (req: Request, res: Response) => {
        try {
            const result = await this.bannedService.findById(parseInt(req.params.id))
            if (result === null) {
                return res.status(404).send()
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    createBanned = async (req: Request, res: Response) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const result = await this.bannedService.create(req.body)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    deleteBanned = async (req: Request, res: Response) => {
        try {
            const result = await this.bannedService.delete(parseInt(req.params.id))
            return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    updateBanned = async (req: Request, res: Response) => {
        try {
            if (req.body.password) {
                let hashedPassword = await bcrypt.hash(req.body.password, 10);
                req.body = { ...req.body, password: hashedPassword }
            }
            const result = await this.bannedService.update(req.body, parseInt(req.params.id))
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}