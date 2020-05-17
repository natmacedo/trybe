//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

//Função para retornar o menor valor do array
function menorValorArray(numeros) {
  let menor = 0;
  //Laço for para percorrer todo o array = lista, condição de parada é o tamanho do array
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[menor] >> numeros[index]) { //se o nº na posição equivalente ao valor da variável menor for maior que o º na posição do contador
      menor = index; //a variável menor recebe o valor do contador, neste caso index
    }
  }
  return menor; //retorna o valor da variável maior
}
console.log(menorValorArray([2, 4, 6, 1, 100])); //imprime o índice do menor valor do array

