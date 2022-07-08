const sideOne = 60;  
const sideTwo = 50;  
const sideThree = 60;  

if ( sideOne + sideTwo + sideThree === 180) {
    console.log(true);
    
} else if ( sideOne < 0 || sideTwo < 0 || sideThree < 0) {
    console.log("Não é possivel adicionar valores negativos");
} else {
    console.log(false);
};
