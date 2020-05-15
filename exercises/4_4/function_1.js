//Crie uma função que receba uma string e retorne true se for um palíndromo, 
//ou false, se não for!
let inverso = ""; let verificaPalavra = "";
function palindromo(palavra){
  for(i = 0; i < palavra.length; i += 1){
    inverso += palavra[i];
  }if(inverso === palavra){
   return true;
  } else{
    return false;
  }
}

console.log(palindromo("luz azul"));