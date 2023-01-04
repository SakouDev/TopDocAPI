import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken';
import jwtDecode from "jwt-decode";

export function authorization(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id && req.params.id
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    const decoded: any = token && jwtDecode(token)

    if (decoded.id != id) {
        if (decoded.role != 'admin') return res.status(403).json('Vous ne possédez pas les droits.')
    }

    next()
}