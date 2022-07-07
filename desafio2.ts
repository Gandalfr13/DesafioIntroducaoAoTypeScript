enum trabalho {
    Atriz,
    Pedreiro,
}

type humano = {
    nome: string;
    idade: number;
    profissao: trabalho;
}

let pessoa1: humano = {
    nome: "maria",
    idade: 29,
    profissao: trabalho.Atriz
};


let pessoa2: humano = {
    nome: "roberto",
    idade: 19,
    profissao : trabalho.Pedreiro,
}


let pessoa3: humano = {
    nome: "laura",
    idade: 32,
    profissao: trabalho.Atriz,
};

let pessoa4: humano = {
    nome : "carlos",
    idade : 19,
    profissao : trabalho.Pedreiro,
}