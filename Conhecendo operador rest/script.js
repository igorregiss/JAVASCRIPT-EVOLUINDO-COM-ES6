// REST Operator

/*
function convidados(...nomes){
    console.log("Seja bem vindo todos convidados");
    console.log(nomes);
}

convidados("Igor", "Rayssa", "Thereza", "Pedro");
*/

function sorteador(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log("Numero gerado foi: " + numeros[numeroGerado]);
}

sorteador(1, 4, 6, 21, 27, 31, 65, 62);
