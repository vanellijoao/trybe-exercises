// 1. Criar um novo array, vazio
// 2. Criar um loop que rode 25 vezes somando 1 ao valor anterior, a partir do número 1
//    a. A cada loop, adicionar esse valor no final do novo array
// 3. Criar um novo loop do tamanho do novo array
//    a. A cada loop, imprimir a metade do valor pego no array

let numbers = [];

for (let i = 1; i < 26; i+= 1) {
    numbers.push(i)
}

for (let j = 0; j < numbers.length; j +=1) {
    console.log(numbers[j] / 2)
}