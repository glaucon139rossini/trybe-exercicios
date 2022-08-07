/*Agora que temos a url vamos criar um arquivo e dentro
 dele uma função para pegar o array com as moedas. 
 
 Crie também um arquivo HTML (index.html, por exemplo) 
que deve conter uma tag para listar as crypto moedas. 
 */


const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  //console.log(moedas); para visualizar no terminal habilito 
  //o console e chamo a função
  return coins;
}

//fetchMoedas(); chamo a função para conseguir ver no terminal.

/*agora vamos fazer com que as moedas apareçam na tela. 
Utilize o seguinte formato: Nome da moeda (símbolo da moeda):
valor em dólares. Exemplo: Bitcoin (BTC): 46785.06. */

const setCoins = async () => {
  const coins = await fetchCoins();

  const coinsList = document.getElementById('coins-list');

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');

      newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

      coinsList.appendChild(newLi);
    });
}

window.onload = () => setCoins();