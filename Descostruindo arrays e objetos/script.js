let pessoa = {
    nome: "Igor",
    sobrenome: "Régis",
    empresa: "Devmeet Developer",
    cargo: "Programador front-end"
  };
  
  //console.log(pessoa.nome);
  //console.log(pessoa.cargo);
  
  // let nome = "TESTE";
  
  // const { nome:nomePessoa, cargo, empresa, sobrenome} = pessoa;
  
  // console.log("NOME DA PESSOA " + nomePessoa);
  // console.log(sobrenome);
  
  // console.log(empresa);
  // console.log(cargo);
  
  
  // =================================
  
  let nomes = ["Igor", "Regis", "Iury"];
  
  // let { 0:igor, 2:terceiraPessoa } = nomes;
  
  // console.log(igor);
  // console.log(terceiraPessoa);
  
  let [primeironome, segundonome] = nomes;
  
  console.log(primeironome);
  console.log(segundonome);