import express from "express"
import { json } from "express"
import { connect } from "mongoose";
import { config } from "dotenv"
import { setRouter } from "./router/index.js";
import userRouter from "./router/user.js"


const app = express()
const PORT = 3000

config()

app.use(json())
app.use('/user', userRouter)

setRouter(app)

async function main() {
    try {
        await connect(process.env.ACCESS_DB);
    } catch (error) {
        console.log(error)
    }
}

main()

app.get('/', (req, res) => {
    res.json('Bem vindo')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})