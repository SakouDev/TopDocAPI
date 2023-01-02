import { IService } from '../services/core/service.interface';
import { Request, Response } from "express";
import { TimeslotDTO } from '../DTO/timeslot.dto';
const bcrypt = require("bcrypt");


export class TimeslotHandler {

    private timeslotService : IService<TimeslotDTO>

    constructor(timeslotService: IService<TimeslotDTO>) {
        this.timeslotService = timeslotService;
    }

    getAllTimeslot = async (req: Request, res: Response) => {
        try {
            const result = await this.timeslotService.findAll()
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getTimeslotById = async (req: Request, res: Response) => {
        try {
            const result = await this.timeslotService.findById(parseInt(req.params.id))
            if (result === null) {
                return res.status(404).send()
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    createTimeslot = async (req: Request, res: Response) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const result = await this.timeslotService.create(req.body)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    deleteTimeslot = async (req: Request, res: Response) => {
        try {
            const result = await this.timeslotService.delete(parseInt(req.params.id))
            return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    updateTimeslot = async (req: Request, res: Response) => {
        try {
            if (req.body.password) {
                let hashedPassword = await bcrypt.hash(req.body.password, 10);
                req.body = { ...req.body, password: hashedPassword }
            }
            const result = await this.timeslotService.update(req.body, parseInt(req.params.id))
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}