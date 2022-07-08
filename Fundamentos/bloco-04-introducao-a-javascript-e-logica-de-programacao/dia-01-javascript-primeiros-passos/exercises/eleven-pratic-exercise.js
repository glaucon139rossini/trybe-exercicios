const salarioBruto = 3000;
let descontoInss = 0;
let descontoIr = 0;

if (salarioBruto <= 1556.94) {
    descontoInss = (salarioBruto * 0.08 );
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    descontoInss = (salarioBruto * 0.09 );
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    descontoInss = (salarioBruto * 0.11 );
} else if (salarioBruto > 5189.82 ) {
    descontoInss = 570.88;
} 
const salarioInss = salarioBruto - descontoInss;

if (salarioInss  >= 1903.99 && salarioInss  <= 2826.65) {
    descontoIr = (salarioInss  * 0.075) - 142.80 ;
} else if (salarioInss  >= 2528.66 && salarioInss  <= 3751.05) {
    descontoIr = (salarioInss  * 0.15 ) - 354.80;
} else if (salarioInss  >= 3751.06 && salarioInss  <= 4664.68) {
    descontoIr = (salarioInss  * 0.225 ) - 636.13;
} else if (salarioInss  > 4664.68 ) {
    descontoIr = (salarioInss  * 0.275 ) - 869.36;
} 

console.log((salarioInss - descontoIr).toFixed(2));
console.log(descontoInss , descontoIr );
