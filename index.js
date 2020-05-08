import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function A(props) {
  return <p>Hola {props.nombre}!!!</p>;
}

function B(props) {
  return <p>Puntaje de {props.nombre}: 10</p>;
}

class MiComponente extends Component {
  render() {
    return <p>Hola Mundooooo!!!!</p>;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    const nombre = 'Alexis';

    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <MiComponente />
        <A nombre={nombre}/>
        <B nombre={nombre}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
