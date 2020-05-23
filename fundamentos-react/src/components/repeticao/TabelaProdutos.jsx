import React from 'react';

import produtos from '../../data/produtos';
import './precos.css'

export default props => {
  let val = 0;
  const produtosMap = produtos.map(produto => {
    val = produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{val}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {produtosMap}
        </tbody>
      </table>
    </div>
  );
}