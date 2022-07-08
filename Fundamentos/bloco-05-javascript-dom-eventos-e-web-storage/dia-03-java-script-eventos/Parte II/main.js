const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

const primeiroLi = document.querySelector('#first-li');
const segundoLi = document.querySelector('#second-li');
const terceiroLi = document.querySelector('#third-li');

function addClasse(evt) {
  const selecionaTech = document.querySelector('.tech'); //Irá selecionar o primeiro elemento que tiver a classe tech.
  selecionaTech.classList.remove('tech'); // Onde tiver a classe tech, irá remover.
  evt.target.classList.add('tech'); // Irá adicionar a classe tech, onde eu clicar.

}
primeiroLi.addEventListener('click', addClasse) //vai executar a função de adicionar classe, onde eu clicar. 
segundoLi.addEventListener('click', addClasse) //vai executar a função de adicionar classe, onde eu clicar. 
terceiroLi.addEventListener('click', addClasse) //vai executar a função de adicionar classe, onde eu clicar. 

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function inputTexto(evt) {
  const getTech = document.querySelector('.tech'); // Irá receber a tech. (Segunda etapa)
  getTech.innerText = evt.target.value; //Inserindo o valor de input no texto de tech. (Terceira etapa)
}
const selecionaInput = document.querySelector('#input');
selecionaInput.addEventListener('input', inputTexto) //adicionando uma função de inserir texto na tech. (Primeira etapa)

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

const top3 = document.querySelector('#my-spotrybefy');
top3.addEventListener('dblclick', redireciona) // Adicionando a função "redireciona" quando clicar duas vezes no my-spotrybefy'.

function redireciona(evt) {
  window.location.replace('https://github.com/glaucon139rossini'); //Redireciona a página para o meu portfolio.
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

top3.addEventListener('mouseover', alteraCor)
top3.addEventListener('mouseout', tiraCor)

function alteraCor(evt) { 
  top3.style.color= 'red'; // deixa a letra vermelha quando passa o mouse.
}

function tiraCor(evt) {
  top3.style.color= 'white'; // deixa a cor como era originalmente.
}


// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.