//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let arrayTeste = [2, 3, 2, 5, 8, 8, 8];
function valorRepetidoArray(array) {
    let contador = 0;
    let maisRepetidos = 0;
    let numeroRepetido = 0;
    for (let i in array) {
        for (let n in array) {
            if (array[i] == array[n]) {
              contador += 1;
            }
            if (contador > maisRepetidos) {
              contador = maisRepetidos;
              numeroRepetido = array[i];
            }
        }
        return numeroRepetido;
    }
}
    console.log(valorRepetidoArray(arrayTeste));