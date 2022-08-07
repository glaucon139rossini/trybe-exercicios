import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li> //Tasl cria uma il 
  );
}

const arrayDeCompromissos = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir Estudar']

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Tarefas diárias: </h1>
        <ul>{arrayDeCompromissos.map(arrayDeCompromissos => Task(arrayDeCompromissos))} </ul>
      </div> // map cria um "loop" que passa em cada posição do array, cria uma il com o task pegando a posição do array que o loop está passando.
    );
  }
}

export default App;
