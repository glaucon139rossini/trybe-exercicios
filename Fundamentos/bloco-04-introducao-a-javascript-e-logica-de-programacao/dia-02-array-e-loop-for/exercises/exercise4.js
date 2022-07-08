let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0;
for (let index = 0; index < numbers.length; index+=1) {
    contador += numbers[index];
    
}
let mediaAritmetica = contador / numbers.length;
 if (mediaAritmetica > 20) {
     console.log('Valor maior que 20');
 } else {
     console.log('Valor menor que 20');
 }