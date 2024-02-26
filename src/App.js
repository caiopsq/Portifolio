import React from 'react';
import Header from './Header.js'
import './App.css';

function App() {
  return (
    <Header name='Caio Queiroz' links={["Sobre", "Contato", "Portifólio"]}></Header>
  );
}

export default App;
