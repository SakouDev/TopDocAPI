import { IService } from '../services/core/service.interface';
import { Request, Response } from "express";
import { RdvDTO } from '../../types/DTO/rdv.dto';
import bcrypt from 'bcrypt';


export class RdvHandler {

    private rdvService : IService<RdvDTO>

    constructor(rdvService: IService<RdvDTO>) {
        this.rdvService = rdvService;
    }

    getAllRdv = async (req: Request, res: Response) => {
        try {
            const result = await this.rdvService.findAll()
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getRdvById = async (req: Request, res: Response) => {
        try {
            const result = await this.rdvService.findById(parseInt(req.params.id))
            if (result === null) {
                return res.status(404).send()
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    createRdv = async (req: Request, res: Response) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const result = await this.rdvService.create(req.body)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    deleteRdv = async (req: Request, res: Response) => {
        try {
            const result = await this.rdvService.delete(parseInt(req.params.id))
            return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    updateRdv = async (req: Request, res: Response) => {
        try {
            if (req.body.password) {
                let hashedPassword = await bcrypt.hash(req.body.password, 10);
                req.body = { ...req.body, password: hashedPassword }
            }
            const result = await this.rdvService.update(req.body, parseInt(req.params.id))
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}