document.querySelector('#elementoOndeVoceEsta').parentNode.parentNode.style.color = 'green';

document.querySelector('#primeiroFilhoDoFilho').innerText = "O primeiro filho do filho.";

document.querySelector('#pai').firstChild;

document.querySelector('#elementoOndeVoceEsta').parentNode;

document.querySelector('#elementoOndeVoceEsta').nextSibling.textContent;

document.querySelector('#elementoOndeVoceEsta').nextElementSibling;

document.querySelector('#pai').lastElementChild.previousElementSibling.textContent;

//Crie um irmão para elementoOndeVoceEsta.
function adicionarSection() {
    let sessaoNova = document.createElement('section');
    let conteudoSessao = document.createTextNode('Olá Mundo');
    sessaoNova.appendChild(conteudoSessao);

    let elementoPai = document.querySelector('#pai');
    let secElemento = document.getElementById('elementoOndeVoceEsta');
    elementoPai.insertBefore(sessaoNova, secElemento);

}
document.body.onload = adicionarSection();

//Crie um filho para elementoOndeVoceEsta.
function adicionarFilho() {
    let sessaoFilho = document.createElement('section');
    let conteudoFilho = document.createTextNode('Oi eu sou o filho!');
    sessaoFilho.appendChild(conteudoFilho);

    let elementoFilho = document.querySelector('#primeiroFilhoDoFilho');
    let elementoVoceEsta = document.querySelector('#elementoOndeVoceEsta');
    elementoVoceEsta.insertBefore(sessaoFilho, elementoFilho);
}

document.body.onload = adicionarFilho();

//Crie um filho para primeiroFilhoDoFilho.
function adicionarFilhoDoPrimeiro() {
    let sessaoFilhoDoPrimeiro = document.createElement('section');
    // criando id para a section criada.
    sessaoFilhoDoPrimeiro.setAttribute('id', 'primeiroFilhoDoPrimeiroFilho');
    let conteudoFilhoDoPrimeiro = document.createTextNode('Oi eu sou o filho do Primeiro Filho!');
    sessaoFilhoDoPrimeiro.appendChild(conteudoFilhoDoPrimeiro);

    let elementoPrimeiroFilho = document.querySelector('#primeiroFilhoDoFilho');
    elementoPrimeiroFilho.appendChild(sessaoFilhoDoPrimeiro);
}

document.body.onload = adicionarFilhoDoPrimeiro();

//A partir desse filho criado, acesse terceiroFilho
// - criamos uma id primeiramente
let acessoTerceiroFilho = document.querySelector('#primeiroFilhoDoPrimeiroFilho');
let acessoPai = document.querySelector('#pai');
let testPai = acessoTerceiroFilho.parentNode;
while (testPai !== acessoPai) {
    testPai = testPai.parentNode;
}
testPai.lastElementChild.previousElementSibling.textContent = "teste do teste";

//Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
let varPaiDoPai = document.querySelector('#paiDoPai');
let varPai = document.querySelector('#pai');
let varElementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let varPrimeiro = document.querySelector('#primeiroFilhoDoFilho');
let listaPaiDoPai = varPaiDoPai.childNodes;
let listaPai = varPai.childNodes;
let listaElemento = varElementoOndeVoceEsta.childNodes;





for (index of listaPaiDoPai) {
    if (index !== varPai ) {
        varPaiDoPai.removeChild(index);
    }
}
console.log(listaPai);
contador = 0;
for (ind of listaPai) {
    if (ind.id !== "elementoOndeVoceEsta" ) {
        (varPai.childNodes[contador]).remove();
        console.log(ind +'removido');
    }
    contador +=1;
}
console.log(listaPai);
for (i of listaElemento) {
    if (i !== varPrimeiro ) {
        varElementoOndeVoceEsta.removeChild(i);
    }
}

