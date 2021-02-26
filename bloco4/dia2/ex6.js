// 1. Pegar o array
// 2. Criar uma nova variável que representará a quantidade de valores ímpares -> isOdd
// 3. Criar um loop que percorra o array
//    a. Criar uma condicional
//        i. Caso o valor do array não seja divisível por 2 (ímpar), somar 1 à variável isOdd
//        ii. Caso seja divisível por 2 (par), não alterar a variável isOdd
// 4. Criar uma condicional
//    a. Caso o valor da variável isOdd seja maior que 0, imprimir o valor de isOdd
//    b. Caso o valor da variável isOdd seja menor ou igual a 0, imprimir "nenhum valor ímpar encontrado"

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let isOdd = 0;

for (let i = 0; i < numbers.length; i+= 1) {
    if (numbers[i] % 2 > 0) {
        isOdd += 1
    } else {

    }
};

if (isOdd > 0) {
    console.log(isOdd);
} else {
    console.log("nenhum valor ímpar encontrado")
}