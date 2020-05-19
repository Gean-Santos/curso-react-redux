import React from 'react';

import Card from './components/layout/Card';
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

export default () => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Card title="#4 - Desafio Aleatório">
      <Aleatorio min={1} max={60} />
    </Card>
    
    <Card title="#3 - Fragmento">
      <Fragmento />
    </Card>

    <Card title="#2 - Com Parâmetro">
      <ComParametro
        titulo="Situação do Aluno"
        aluno="Gean Santos" nota={10} />
    </Card>
    
    <Card title="#1 - Primeiro Componente">
      <Primeiro />
    </Card>
    
  </div>
);
  