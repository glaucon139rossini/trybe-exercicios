const  valorCusto = 10;
const valorVenda = 20;
const impostoSobreOCusto =  valorCusto * 0.20;
const custoTotal =  valorCusto  + impostoSobreOCusto;
const lucro = valorVenda - custoTotal;


if ( valorCusto < 0 || valorVenda < 0) {
    console.log('ERROR!');
} else {
    lucroTotal = lucro  * 1000;
    console.log(lucroTotal);
};
