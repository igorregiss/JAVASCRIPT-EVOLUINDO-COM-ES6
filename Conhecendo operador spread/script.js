// Spread Operator

/*
let primeiros = [1, 2, 3];
let numeros = [...primeiros, 4, 5, 10];
console.log(numeros);
*/

/*
let pessoa = {
    nome: "Igor",
    idade: 22,
    cargo: "Dev"
};

let novaPessoa = {
    ...pessoa,
    status: "ATIVO",
    cidade: "Mombaça-CE"
};

console.log(novaPessoa);
*/

function novoUsuario(info){
    let dados = {
    ...info,
    status: "ATIVO",
    inicio: "27/03/2023",
    codigo: "123123"
    };

    console.log(dados);
}

novoUsuario({
    nome: "Iury",
    sobrenome: "Régis",
    cargo: "Dev"
})