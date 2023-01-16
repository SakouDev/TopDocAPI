import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken';

export function authenticateToken(req: Request, res: Response, next: NextFunction) {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.status(401).json('Veuillez vous connecter.')

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err: any) => {
        if (err) {
            return res.send(401).json(err);
        }
        next();
    })
}