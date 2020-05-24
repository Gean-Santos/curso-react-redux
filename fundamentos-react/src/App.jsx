import React from 'react';
import './App.css'

import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaPrecos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Card from './components/layout/Card';
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card title="#8 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={5} />
        <UsuarioInfo usuario={{ nome: 'Fernando' }} />
        <UsuarioInfo usuario={{ email: 'fer@nando.com' }} />
        <UsuarioInfo />
      </Card>

      <Card title="#7 - Desafio de Repeticao" color="#00F">
        <TabelaPrecos />
      </Card>

      <Card title="#6 - Lista de Alunos" color="#08F">
        <ListaAlunos />
      </Card>

      <Card title="#5 - Componente com Filhos" color="#C0C0C0">
        <Familia sobrenome="Santos">
          <FamiliaMembro nome="Gean" />
          <FamiliaMembro nome="Taysa" />
          <FamiliaMembro nome="Gilson" />
          <FamiliaMembro nome="Waldirene" />
        </Familia>
      </Card>

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
  