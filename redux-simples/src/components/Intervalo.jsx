import './Intervalo.css';
import React from 'react';
import Card from './Card';

export default props => {
  return (
    <Card title="Intervalo de Números">
      <span>
        <strong>Mínimo</strong>
        <input type="number" value={0}/>
      </span>
      <span>
        <strong>Mínimo</strong>
        <input type="number" value={0}/>
      </span>
    </Card>
  );
}