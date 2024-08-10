import { Request, Response } from "express";
import User from "../../model/User";

export const getUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id, '-password');
        if (!user) {
            return res.status(404).json({ msg: "Usuário não encontrado!" });
        }
        res.status(200).json({ user });

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Erro ao obter informações do usuário." });
    }
};
