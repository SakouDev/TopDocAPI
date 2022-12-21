import { Request, Response } from "express";
import { HolidayService } from "../../services/holiday.service";
import { HolidayRepository } from "../../repository/holiday.repository";
const bcrypt = require("bcrypt");


const holidayService = new HolidayService(new HolidayRepository)


const getAllHoliday = async (req: Request, res: Response) => {
    try {
        const result = await holidayService.HolidayFindAll()
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getHolidayById = async (req: Request, res: Response) => {
    try {
        const result = await holidayService.HolidayFindById(parseInt(req.params.id))
        if(result === null){
            return res.status(404).send()
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const createHoliday = async (req: Request, res: Response) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const result = await holidayService.HolidayCreate(req.body)
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteHoliday = async (req: Request, res: Response) => {
    try {
        const result = await holidayService.HolidayDelete(parseInt(req.params.id))
        return res.status(200).json(result? "Supprimé" : "Non Supprimé");
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateHoliday = async (req: Request, res: Response) => {
        try {
            if (req.body.password) {
                let hashedPassword = await bcrypt.hash(req.body.password, 10);
                req.body = { ...req.body, password: hashedPassword }
            }
            const result = await holidayService.HolidayUpdate(req.body, parseInt(req.params.id))
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
};

export const handlerHoliday = {
    getAllHoliday,
    getHolidayById,
    createHoliday,
    updateHoliday,
    deleteHoliday
}