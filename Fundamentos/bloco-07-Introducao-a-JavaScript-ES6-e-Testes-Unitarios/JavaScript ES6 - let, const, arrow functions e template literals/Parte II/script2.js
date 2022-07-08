//Crie uma página com um contador de cliques

let clickCount= 0;

function incrementClick() {
    updateDisplay(clickCount +=1);
}

function resetCounter() {
    clickCount= 0;
    updateDisplay(clickCount);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}