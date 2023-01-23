import { IService } from '../services/core/service.interface';
import { Request, Response } from "express";
import { WeekdayDTO } from '../../types/DTO/weekday.dto';
import bcrypt from 'bcrypt';

export class WeekdayHandler {

    private weekdayService: IService<WeekdayDTO>

    constructor(weekdayService: IService<WeekdayDTO>) {
        this.weekdayService = weekdayService;
    }

    getAllWeekday = async (req: Request, res: Response) => {
        try {
            const result = await this.weekdayService.findAll()
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getWeekdayById = async (req: Request, res: Response) => {
        try {
            const result = await this.weekdayService.findById(parseInt(req.params.id))
            if (result === null) {
                return res.status(404).send()
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    createWeekday = async (req: Request, res: Response) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const result = await this.weekdayService.create(req.body)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    deleteWeekday = async (req: Request, res: Response) => {
        try {
            const result = await this.weekdayService.delete(parseInt(req.params.id))
            return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    updateWeekday = async (req: Request, res: Response) => {
        try {
            if (req.body.password) {
                let hashedPassword = await bcrypt.hash(req.body.password, 10);
                req.body = { ...req.body, password: hashedPassword }
            }
            const result = await this.weekdayService.update(req.body, parseInt(req.params.id))
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}