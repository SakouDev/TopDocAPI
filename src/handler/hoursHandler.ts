import { IService } from '../services/core/service.interface';
import { Request, Response } from "express";
import { HoursDTO } from '../../types/DTO/hours.dto';
import bcrypt from 'bcrypt';


export class HoursHandler {

    private hoursService : IService<HoursDTO>

    constructor(hoursService: IService<HoursDTO>) {
        this.hoursService = hoursService;
    }

    getAllHours = async (req: Request, res: Response) => {
        try {
            const result = await this.hoursService.findAll()
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getHoursById = async (req: Request, res: Response) => {
        try {
            const result = await this.hoursService.findById(parseInt(req.params.id))
            if (result === null) {
                return res.status(404).send()
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    createHours = async (req: Request, res: Response) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const result = await this.hoursService.create(req.body)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    deleteHours = async (req: Request, res: Response) => {
        try {
            const result = await this.hoursService.delete(parseInt(req.params.id))
            return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    updateHours = async (req: Request, res: Response) => {
        try {
            if (req.body.password) {
                let hashedPassword = await bcrypt.hash(req.body.password, 10);
                req.body = { ...req.body, password: hashedPassword }
            }
            const result = await this.hoursService.update(req.body, parseInt(req.params.id))
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}