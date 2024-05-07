import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../model/User.js";

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ msg: "Usuário não encontrado!" })
        }
        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            return res.status(422).json({ msg: "Senha inválida!" });
        }
        const secret = process.env.SECRET;
        const token = jwt.sign({ id: user._id }, secret)
        res.status(200).json({ msg: "Autenticação realizada com sucesso!", token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Erro ao fazer login do usuário." });
    }
};