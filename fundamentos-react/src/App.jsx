import React from 'react';
import './App.css'

import Card from './components/layout/Card';
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card title="#4 - Desafio Aleatório" color="#0F0">
        <Aleatorio min={1} max={60} />
      </Card>
      
      <Card title="#3 - Fragmento">
        <Fragmento />
      </Card>

      <Card title="#2 - Com Parâmetro" color="#00F">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Gean Santos" nota={10} />
      </Card>
      
      <Card title="#1 - Primeiro Componente" color="#F0F">
        <Primeiro />
      </Card>
    </div>
  </div>
);
  