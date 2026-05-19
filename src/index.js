const express = require("express")
const { json } = require("express")
const { connect } = require("mongoose")
const { config } = require("dotenv")
const { setRouter } = require("./router/index")
const cors = require('cors')

const app = express()
const PORT = 3000

config()

app.use(json())
app.use(cors())

setRouter(app)

async function main() {
    try {
        if (!process.env.ACCESS_DB) {
            return
        }
        await connect(process.env.ACCESS_DB)
    } catch (error) {
        console.log(error)
    }
}

main()

app.get('/', (req, res) => {
    res.json('Bem vindo ao servidor')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
