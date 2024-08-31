import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserLogged {
    id: string;
    email: string;
}

export const auth = (req: Request, res: Response, next: NextFunction): Response | void => {
    try {
        const authHeader = req.header("Authorization");

        if (!authHeader) {
            return res.status(403).json("Acesso não autorizado");
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(403).json("Acesso não autorizado");
        }

        const decoded = jwt.verify(token, process.env.SECRET as string) as UserLogged;

        if(!decoded) {
            return res.status(403).json("Acesso não autorizado")
        }

        next();  
    } catch (error) {
        return res.status(400).json("Token inválido");
    }
};