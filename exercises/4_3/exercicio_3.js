//Declaração de variáveis
let n = 5; let linha = "";
let i = 0; let j = 0;

for(i = 1; i <= n; i += 1){
  linha = "";
  for(j = n; j >= 1; j -= 1){
    if(j > i){
      linha += " ";
    }else{
      linha += "*";
    }
  }
  console.log(linha);
}
