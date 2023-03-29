// MAP - PERCORRER TODO UM ARRAY 

/*
let lista = ["IGOR", "REGIS", "IURY"];
lista.map((item, index) => {
	console.log('PASSANDO: ${item} - Posição: ${index}')
})
*/

// REDUCE - BUSCA REDUZIR UM ARRAY

let numeros = [8, 6 , 4, 2, 3];

let total = numeros.reduce((acumulador, numero, indice, original)=>{
console.log(`${acumulador} - total até o momento`);
console.log(`${numero} - valor atual`);
console.log(`${indice} - indice atual`);
console.log(`${original} - array original`);
console.log ('===============================');
return acumulador += numero;
})
console.log("TOTAL DO REDUCE: " + total);