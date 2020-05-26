import React, {useState} from 'react';
import funcNum from './funcaoNumeros';

export default props => {
  const [number, setNumber] = useState(0);
  const setNum = (e) => setNumber(+e.target.value);
  const [gerador, setGerador] = useState([]);
  function setMega(nu) {
    const num = funcNum(nu);
    const mapMega = num.map(n => {
      return(
        <h3 key={n}
          style={
            {
              paddingTop: '5%',
            }
          }> 
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
      />
      <button onClick={(e) => setMega(number)}>Gerar</button>
      <div>
        {!gerador ? false : gerador}
      </div>
    </div>
  )
}
