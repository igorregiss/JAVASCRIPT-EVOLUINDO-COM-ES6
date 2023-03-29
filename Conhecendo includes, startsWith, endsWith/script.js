// includes, startsWith, endsWith


// INCLUDES - BUSCANDO OS DADOS DE UMA OUTRA VARIAVEL
let nomes = ["Igor", "Regis", "Conde"];
console.log(nomes.includes("Igor"));

if(nomes.includes("Igor")){
	console.log("ESTA NA LISTA");
}else{
	console.log("NAO ESTA NA LISTA");
}


// STARTSWITH - BUSCANDO SE O DADO COMEÇA COM AQUILO
let nome = "Igor";
console.log (nome.startsWith("Igor"));


//ENDSWITH - BUSCANDO SE O DADO TERMINA COM AQUILO
console.log(nome.endsWith("or"));