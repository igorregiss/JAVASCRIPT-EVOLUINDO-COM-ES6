// QUESTÃO (CRIE UMA LISTA DE PRODUTOS) - 1, 2 E 3
const produtos = ['COMPUTADOR', 'TELEFONE', 'MOUSE', 'TECLADO'];
	console.log('TODOS OS PRODUTOS: ' + produtos);
	console.log('QUANTIDADE DE PRODUTOS: '+ produtos.length);
	console.log('ESSA É SUA NOVA LISTA: '+ produtos.filter(p => p !== 'MOUSE'));

	// QUESTÃO (CRIE UMA LISTA DE PRODUTOS) - 4
const findProduto = produtos.find(p => p === 'COMPUTADOR');
if(findProduto){
	console.log(`OPA! TEM ${findProduto} NA SUA LISTA!`)
}else{
	console.log('ESSE PRODUTO NÃO EXISTE! TENTE NOVAMENTE.');
}

// QUESTÃO (CRIE UMA LISTA DE PRODUTOS) - 5
produtos.splice(1,1)

	console.log('ESSA É SUA NOVA LISTA: ' + produtos);

	//  QUESTÃO (CRIE UMA LISTA DE APENAS NUMEROS 1,3,5,7,0,9) - 1,2 E 3 
const numeros = [1,3,5,7,0,9];
	console.log('NUMEROS EM ORDEM: '+ numeros.sort());
	console.log('NUMERO DESCARTADO: '+ numeros.shift());
	console.log('NOVA ORDEM DOS NUMEROS: ' + numeros.reverse())
	numeros.push(8);
	console.log(numeros);

//  QUESTÃO (CRIE UMA STRING QUE CONTENHA O DIA DE HOJE) - 1 
let hoje = '27/03/2001';
const [dia, mes, ano] = hoje.split('/');
	console.log('DIA: ' + dia);
	console.log('MES: ' + mes);
	console.log('ANO: ' + ano);