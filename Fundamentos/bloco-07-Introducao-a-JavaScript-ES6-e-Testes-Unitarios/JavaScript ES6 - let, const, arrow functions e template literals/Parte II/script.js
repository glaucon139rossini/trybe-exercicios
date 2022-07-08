// let fatorial = 4;
// let resultado = fatorial;
// for (let i = 1; i < fatorial; i++) {
//     resultado *= i;
// }
// console.log(resultado);


//Crie uma função que receba um número e retorne seu fatorial.
 f = (n) => n <= 1 ? 1 : n * f(n-1)
 console.log(f(5)); 



 //Crie uma função que receba uma frase e retorne a maior palavra.
 function maiorPalavra(string) {
  var arrayStr = string.split(" ");
  var maior = 0;
  var palavra = null;
  arrayStr.forEach(function(str) {
      if (maior < str.length) {
          maior = str.length;
          palavra = str;
      }
  });
  return palavra;
}
console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));




// 4.1 Escreva uma função que substitua a letra 'x' em uma frase
const fraseTryber = 'Tryber x aqui!'
const substituiX = (str) => {
return str.replace('x', 'Glaucon');
} 
const skills = ['JavaScript','HTML','CSS']; 

 
const resultado = (habilidades) => {
     habilidades = (substituiX(fraseTryber));
    console.log(`${habilidades}\nMinhas três principais habilidades são:` );
    for (let index = 0; index < skills.length; index+=1) {
        console.log(`${skills[index]}\n`);
        
    }
}
(resultado());