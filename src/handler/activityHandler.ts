import { IService } from '../services/core/service.interface';
import { Request, Response } from "express";
import { ActivityDTO } from '../DTO/activity.dto';
const bcrypt = require("bcrypt");


export class ActivityHandler {

    private activityService : IService<ActivityDTO>

    constructor(activityService: IService<ActivityDTO>) {
        this.activityService = activityService;
    }

    getAllActivity = async (req: Request, res: Response) => {
        try {
            const result = await this.activityService.findAll()
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getActivityById = async (req: Request, res: Response) => {
        try {
            const result = await this.activityService.findById(parseInt(req.params.id))
            if (result === null) {
                return res.status(404).send()
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    createActivity = async (req: Request, res: Response) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const result = await this.activityService.create(req.body)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    deleteActivity = async (req: Request, res: Response) => {
        try {
            const result = await this.activityService.delete(parseInt(req.params.id))
            return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    updateActivity = async (req: Request, res: Response) => {
        try {
            if (req.body.password) {
                let hashedPassword = await bcrypt.hash(req.body.password, 10);
                req.body = { ...req.body, password: hashedPassword }
            }
            const result = await this.activityService.update(req.body, parseInt(req.params.id))
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}