// 1. Pegar o array
// 2. Criar uma nova variável que representará o valor de comparação com o anterior, com valor inicial 0
// 3. Criar um loop que percorra o array
//    a. Criar uma condicional
//        i. Caso o valor da variável comparação seja menor que o valor pego no loop, transformar o valor da comparação no valor pelo no loop
//        ii. Caso o valor seja maior, a variável comparação deve se manter a mesma
// 4. Imprimir o valor da variável comparação

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let comparison = 0;

for (let i = 0; i < numbers.length; i+= 1) {
    if (comparison < numbers[i]) {
        comparison = numbers[i];
    } else {
        comparison = comparison;
    }
}

console.log(comparison);