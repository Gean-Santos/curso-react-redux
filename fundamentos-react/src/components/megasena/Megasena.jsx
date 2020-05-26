import './Megasena.css'
import React, {useState} from 'react';
import funcNum from './funcaoNumeros';


export default props => {
  const [number, setNumber] = useState(3);
  const setNum = (e) => setNumber(+e.target.value);
  const [gerador, setGerador] = useState([]);
  function setMega(nu) {
    const num = funcNum(nu);
    const mapMega = num.map(n => {
      return(
        <h3 key={n}> 
          {n} 
        </h3>
      );
    });
    setGerador(mapMega);
  }
 
  return (
    <div className="Megasena">
      <label htmlFor="n">Total de Números Gerados </label>
      <input type="number" id="n"
        value={number}
        onChange={setNum}
        min="3"
        max="8"
      />
      <button onClick={(e) => setMega(number)}>Gerar</button>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!gerador ? false : gerador}
      </div>
    </div>
  )
}
