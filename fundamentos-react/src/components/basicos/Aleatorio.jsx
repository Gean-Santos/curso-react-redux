import React from 'react';

export default props => {
  const { min, max } = props;
  const random = parseInt((Math.random() * (max - min + 1)) + min);

  return (
    <>
      <h2>Valor Aleatório:</h2>
      <p><strong>Valor Mínimo</strong> {min} </p>
      <p><strong>Valor Máximo</strong> {max} </p>
      <p><strong>Valor Escolhido</strong> {random} </p>
    </>
  );
}