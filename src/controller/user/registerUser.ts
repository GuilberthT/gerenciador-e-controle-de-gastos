import bcrypt from 'bcrypt';
import User from '../../model/User';
import { Request, Response } from 'express';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, confirmpassword } = req.body;
        if (!name || !email || !password || !confirmpassword) {
            return res.status(422).json({ msg: "Por favor, preencha todos os campos!" });
        }
        if (password !== confirmpassword) {
            return res.status(422).json({ msg: "As senhas não conferem!" });
        }
        const userExists = await User.findOne({ email: email })
        if (userExists) {
            return res.status(422).json({ msg: "Por favor, utilize outro e-mail." });
        }
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = new User({ name, email, password: passwordHash });
        await newUser.save();
        res.status(201).json({ msg: "Usuário registrado com sucesso!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Erro ao registrar o usuário." })
    }
}
