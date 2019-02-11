import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{height: '100vh', padding: '30px'}}>
        <h1>Politicas de privacidad</h1>
        <p>Esta aplicacion esta desarrollada con el fin de organizar eventos tipo babyshower usando una autenticacion con facebook</p>
        <p>El fin principal es poder otorgar una herramienta para solucionar la organizacion de regalos</p>
        <p>Esta aplicacion es de libre distribucion</p>
        <p>Cualquier abuso reportarlo a <strong>stevensierra.dev@gmail.com</strong></p>
        <footer style={{marginTop: 'auto'}}>Copyright 2019</footer>
      </div>
    );
  }
}

export default App;
