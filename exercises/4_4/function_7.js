//Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. 
//Considere que a string ending sempre será menor que a string word.

//Verificação parte do final por ser a parte em comum, o início sempre será diferente
//inicia o valor inicial da variável check com valor verdadeiro


function testWord(word, endWord) {
  let check = true;
  for (i = 1; i <= endWord.length; i += 1) {
      if (word[word.length - i] !== endWord[endWord.length - i]) {
        check = false;
      }
  }
  return check;
}
console.log(testWord("trybe", "be"));
console.log(testWord("escola", "ola"));
