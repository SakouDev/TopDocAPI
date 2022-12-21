import { Request, Response, NextFunction } from "express"
const jwt = require('jsonwebtoken')

export function authenticateToken(req : Request, res : Response, next : NextFunction) {

    const authHeader = req.headers['authorization']
    const tokens = authHeader && authHeader.split(' ')[1]

    if (tokens == null) return res.status(401).json('Veuillez vous connecter.')
    
    jwt.verify(tokens, process.env.ACCESS_TOKEN_SECRET, (err : Error) => {
        if (err) return res.status(401).json(err)
        next()
    })
}