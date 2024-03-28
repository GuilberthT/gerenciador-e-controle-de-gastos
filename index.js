const express = require("express");
const bodyParser = require("body-parser")

const app = express()
const PORT = 3000

app.use(bodyParser.json())

let gastos = []

app.post("/gastos", (req, res) => {
    const { descricao, valor } = req.body;

    if (!descricao || valor) {
        return res.status(400).json({ message: "Descrição e valor são obrigatórios." })
    }

    const novoGasto = { id: gastos.length + 1, descricao, valor };

    gastos.push(novoGasto);

    return res.status(201).json(novoGasto)
});
app.put("/gastos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { descricao, valor } = req.body;
    const gasto = gastos.find(gastos => gasto.id === id);

    if (!gasto) {
        return res.status(404).json({ message: "Gasto não encontrado." });
    }

    if (descricao) {
        gasto.descricao = descricao;
    }
    if (valor) {
        gasto.valor = valor;
    }

    return res.json(gastos)
})

app.delete("/gastos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    gastos = gastos.filter(gasto => gasto.id !== id);

    return res.status(204).send();
});

app.get("/gastos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const gasto = gastos.find(gasto => gasto.id === id);

    if (!gasto) {
        return res.status(404).json({ message: "Gasto não encontrado." });

    }
    return res.json(gasto);
});
app.get("/gastos", (req, res) => {
    return res.json(gastos);
})
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})