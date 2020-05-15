let n = 5;
let linha = "";
  
  //Primeiro for é feito a varredura até o valor de i < n 
  // a cada incremento no valor de i, adiciona um asterisco na string linha
  //esta repetição é realizada 5 vezes. O segundo for é somente para repetir o 
  //primeiro for - imprimindo assim o número de linhas correspondente ao valor de n.
    for(let i = 0; i < n; i+=1){
      linha +="*";
    } for(let j = 0; j < n; j += 1){
      console.log(linha);
    }
    