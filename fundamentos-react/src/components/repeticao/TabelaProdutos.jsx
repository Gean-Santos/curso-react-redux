import React from 'react';

import produtos from '../../data/produtos';
import './TabelaProdutos.css'

export default props => {
  let val = 0;
  const produtosMap = produtos.map((produto, id) => {
    val = produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return (
      <tr key={produto.id} className={id % 2 === 0 ? 'Par' : 'Impar'}>
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