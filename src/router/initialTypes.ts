interface IPessoa {
    nome: string
    idade?: number
}

const pessoa: IPessoa = {
    nome: 'Matheus'
}

function addPessoa(pessoa: IPessoa){
    pessoa.nome
}

// const nome = "Matheus"

