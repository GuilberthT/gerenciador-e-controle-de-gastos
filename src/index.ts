import express from "express"
import { json } from "express"
import { connect } from "mongoose";
import { config } from "dotenv"
import { setRouter } from "./router/index";
import cors from 'cors'

const app = express()
const PORT = 3000

config()

app.use(json())
app.use(cors())

setRouter(app)

async function main() {
    try {
        if(!process.env.ACCESS_DB){
          return   
        }

        await connect(process.env.ACCESS_DB);
    } catch (error) {
        console.log(error)
    }
}

main()

app.get('/', (req, res) => {
    res.json('Bem vindo ao Typescript')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})