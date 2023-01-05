import { IService } from '../services/core/service.interface';
import { Request, Response } from "express";
import { PlanningDTO } from '../../types/DTO/planning.dto';
import bcrypt from 'bcrypt';


export class PlanningHandler {

    private planningService : IService<PlanningDTO>

    constructor(planningService: IService<PlanningDTO>) {
        this.planningService = planningService;
    }

    getAllPlanning = async (req: Request, res: Response) => {
        try {
            const result = await this.planningService.findAll()
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getPlanningById = async (req: Request, res: Response) => {
        try {
            const result = await this.planningService.findById(parseInt(req.params.id))
            if (result === null) {
                return res.status(404).send()
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    createPlanning = async (req: Request, res: Response) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const result = await this.planningService.create(req.body)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    deletePlanning = async (req: Request, res: Response) => {
        try {
            const result = await this.planningService.delete(parseInt(req.params.id))
            return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    updatePlanning = async (req: Request, res: Response) => {
        try {
            if (req.body.password) {
                let hashedPassword = await bcrypt.hash(req.body.password, 10);
                req.body = { ...req.body, password: hashedPassword }
            }
            const result = await this.planningService.update(req.body, parseInt(req.params.id))
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}