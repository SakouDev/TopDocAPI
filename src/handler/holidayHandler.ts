import { IService } from '../services/core/service.interface';
import { Request, Response } from "express";
import { HolidayDTO } from '../DTO/holiday.dto';
const bcrypt = require("bcrypt");


export class HolidayHandler {

    private holidayService : IService<HolidayDTO>

    constructor(holidayService: IService<HolidayDTO>) {
        this.holidayService = holidayService;
    }

    getAllHoliday = async (req: Request, res: Response) => {
        try {
            const result = await this.holidayService.findAll()
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getHolidayById = async (req: Request, res: Response) => {
        try {
            const result = await this.holidayService.findById(parseInt(req.params.id))
            if (result === null) {
                return res.status(404).send()
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    createHoliday = async (req: Request, res: Response) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const result = await this.holidayService.create(req.body)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    deleteHoliday = async (req: Request, res: Response) => {
        try {
            const result = await this.holidayService.delete(parseInt(req.params.id))
            return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    updateHoliday = async (req: Request, res: Response) => {
        try {
            if (req.body.password) {
                let hashedPassword = await bcrypt.hash(req.body.password, 10);
                req.body = { ...req.body, password: hashedPassword }
            }
            const result = await this.holidayService.update(req.body, parseInt(req.params.id))
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}