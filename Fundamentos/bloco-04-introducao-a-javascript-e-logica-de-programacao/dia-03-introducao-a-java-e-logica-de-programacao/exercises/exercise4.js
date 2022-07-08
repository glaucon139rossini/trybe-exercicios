let numeroPrimo = 0;

for (let numeroPrimo = 0; numeroPrimo <= 50; numeroPrimo += 1) {
    isPrimo = true;
    for (let divisor = 2; divisor < numeroPrimo; divisor += 1) {

        if (numeroPrimo % divisor === 0) {// Verificando se é primo.
            isPrimo = false;
        };
    };
    if (isPrimo) {
        maiorNumeroPrimo = numeroPrimo;
    }
};
console.log(maiorNumeroPrimo);