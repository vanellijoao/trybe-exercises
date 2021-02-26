// 1. Pegar o array
// 2. Criar uma nova variável que representará a soma, começando com o valor 0
// 3. Criar uma nova variável que representará a média, começando com o valor 0
// 4. Criar um loop que percorra o array
//    a. Somar o valor atual do array na variável de soma
// 5. Criar a fórmula da variável média: Variável de soma dividido pela quantidade de valores no array
// 6. Criar uma condicional
//    a. Caso o valor seja maior que 20, imprimir "valor maior que 20"
//    b. Caso o valor seja menor que 20, imprimir "valor menor que 20"

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let avg = 0;

for (let i = 0; i < numbers.length; i+= 1) {
    sum += numbers[i]
};

avg = sum / (numbers.length);


if (avg > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor que 20")
}