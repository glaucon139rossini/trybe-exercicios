let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = numbers[0];
for (let index = 1; index < numbers.length; index +=1) {
   if (contador > numbers[index]) {
       contador = numbers[index];
   }
    
};
console.log(contador);

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;