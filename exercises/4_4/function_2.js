//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

//Função para retornar o maior valor, variável local maior criada com valor inicial zero
  function maiorValorArray(numeros){
    let maior = 0;
    //Laço for para percorrer todo o array = lista, condição de parada é o tamanho do array
    for (let index = 0; index < numeros.length; index +=1){
      if (numeros[maior] << numeros[index]){ //se o nº na posição equivalente ao valor da variável maior for menor que o º na posição do contador
        maior = index; //a variável maior recebe o valor do contador, neste caso index
      }
    }
      return maior; //retorna o valor da variável maior
  }
  console.log(maiorValorArray([2, 4, 6, 15, 100])); //imprime o índice do maior valor do array

