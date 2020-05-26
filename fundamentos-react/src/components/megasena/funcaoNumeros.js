function num(min, max) {
  return parseInt((Math.random() * (max - min + 1)) + min);
}

function gerarNumeroNaoContido(min, max, array) {
  const aleatorio = num(min, max);
  return array.includes(aleatorio) ?
    gerarNumeroNaoContido(min, max, array) : 
    aleatorio;
}

function gerarNumeros(qtde) {
  let numeros = Array(qtde)
    .fill(0)
    .reduce((nums) => {
      const gerarNum = gerarNumeroNaoContido(1, 60, nums);
      return [...nums, gerarNum];
    }, [])
    .sort((n1, n2) => n1 - n2)
  
  return numeros;
}

export default gerarNumeros;

// while (numeros.length < qtde) {
//   let numero = num(1, 60);
//   if(numeros.indexOf(numero) === -1) {
//     numeros.push(numero);
//   }
// }