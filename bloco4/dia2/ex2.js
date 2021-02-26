// 1. Pegar o array
// 2. Criar uma nova variável que representará a soma, começando com o valor 0
// 3. Criar um loop que percorra o array
//    a. Somar o valor atual do array na variável de soma
// 4. Imprimir o valor da soma 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let i = 0; i < numbers.length; i+= 1) {
    sum += numbers[i]
};

console.log(sum)