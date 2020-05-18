//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
//Função fatorial

let number = 12;

function fator(numero) {
  let somaNumero = 0;
  for (let cont = 1; cont <= numero; cont+=1) {
    somaNumero += cont;
  }
  return somaNumero;
}

console.log(fator(number))
