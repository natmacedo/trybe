//Crie uma função que receba um array de nomes e retorne o nome 
//com a maior quantidade de caracteres.

let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorString(nomes) {
  let indiceMaior = 0;
  for (let indice in nomes) {
    if (nomes[indice].length > nomes[indiceMaior].length) {
      indiceMaior = indice;
    }
  }
  return nomes[indiceMaior];
}

console.log(maiorString(arrayTeste));
