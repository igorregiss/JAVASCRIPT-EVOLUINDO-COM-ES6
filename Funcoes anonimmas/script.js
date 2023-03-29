// FUNCOES ANONIMAS

/*
PADRÃO DE FUNÇÕES ANONIMAS: () => {}
- OS PARÊNTESES QUE É POR ONDE A FUNÇÃO RECEBE OS ARGUMENTOS (ASSIM COMO NAS FUNÇÕES TRAIDICONAIS);
- A SETA "=>" É RESPONSÁVEL PELO NOME ARROW
- AS CHAVES SÃO O BLOCO DE CÓDIGO QUE REPRESENTA O CORPO DA FUNÇÃO
*/


function somar(a, b){
	let total = a + b;
	return console.log(total);
}
somar(10,30);


// Exemplo 

let subtrair = (valor1, valor2) => {
	let total = valor1 - valor2;
console.log(total);
}
subtrair(60,40);


let numeros = [1, 3, 5, 10];
numeros.map((item) => {
console.log(item);
})