let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = 0; cont = 0; let teste =0;

for (let i = 0; i < numbers.length; i++) {
  cont = numbers[i]%2 != 0;
  if(cont != 0){
    teste++;
  }
}

console.log(teste);




