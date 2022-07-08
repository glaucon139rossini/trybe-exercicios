//1 - Escreva uma função que dado um nameay de nomes e um nome 
//retorne true se ele estiver contido e caso contrário, 
//retorne false, use some;
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (argumento1, argumento2) => names.some(argumento1 => argumento1 === argumento2);
  //Adicione seu código aqui
console.log(hasName(names, 'José'));
