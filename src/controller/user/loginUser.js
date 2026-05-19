const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../../model/User")

const loginUser = async (req, res) => {
    try {
        const body = req.body
        const user = await User.findOne({ email: body.email })
        const secret = process.env.SECRET

        if (!secret) {
            return res.status(404).json({ msg: "Secret não definida, vá ao seu .env!" })
        }
        if (!user) {
            return res.status(404).json({ msg: "Usuário não encontrado!" })
        }

        const checkPassword = await bcrypt.compare(body.password, user.password)
        if (!checkPassword) {
            return res.status(422).json({ msg: "Senha inválida!" })
        }

        const token = jwt.sign({ id: user._id }, secret)
        res.status(200).json({ msg: "Autenticação realizada com sucesso!", token })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Erro ao fazer login do usuário." })
    }
}

module.exports = { loginUser }
