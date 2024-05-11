import jwt from 'jsonwebtoken'

export const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization").split(' ')[1];

        if (!token) {
            return res.status(403).json("Acesso não autorizado");
        }

        const decoded = jwt.verify(token, process.env.SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
};
