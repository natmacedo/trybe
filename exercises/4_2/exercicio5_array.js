let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = numbers[0];

for (let j = 0; j < numbers.length; j++) {
  if(numbers[j] > maior) {
    maior = numbers[j];
    }  
}

console.log("O maior número é:", maior);
