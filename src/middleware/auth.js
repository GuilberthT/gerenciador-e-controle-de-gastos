const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try {
        const authHeader = req.header("Authorization")

        if (!authHeader) {
            return res.status(403).json("Acesso não autorizado")
        }

        const token = authHeader.split(' ')[1]

        if (!token) {
            return res.status(403).json("Acesso não autorizado")
        }

        const decoded = jwt.verify(token, process.env.SECRET)

        if (!decoded) {
            return res.status(403).json("Acesso não autorizado")
        }

        next()
    } catch (error) {
        return res.status(400).json("Token inválido")
    }
}

module.exports = { auth }
