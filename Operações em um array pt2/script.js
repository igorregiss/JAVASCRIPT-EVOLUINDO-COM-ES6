// FIND

/*
let listagem = [5, 3, "Jose", 2, "Igor"]
let busca = listagem.find((item)=>{
	if(item === "Jose"){
	return console.log("ITEM ENCONTRADO COM SUCESSO")
	}
})
console.log(busca);
*/


// FILTER

let palavras = ["Igor", "Rayssa", "Ana", "Iury", "Italo", "Carlos", "Edu"];

let resultado = palavras.filter((item)=>{
	return item.length <= 4;
})

console.log(resultado);