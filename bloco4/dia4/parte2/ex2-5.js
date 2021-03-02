let numbers = [2, 3, 2, 5, 8, 2, 3];


function mostRepeatedNumber (array) {
// Criando uma array representando o quanto cada número se repetiu    
    let number = 0;
    let times = [];

    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array.length; j += 1) {
            if (array[i] == array[j]) {
                number += 1;
            }
        };

        times.push(number);

        number = 0;
    }

// Descobrindo o maior valor da array nova
    let comparison = 0;
        
    for (let i = 0; i < times.length; i+= 1) {
        if (comparison < times[i]) {
            comparison = times[i];
        } else {
            comparison = comparison;
        }
    };

// Pegando o número que mais se repetiu baseado no index do maior número da array nova
    let index = 0;

    index = times.indexOf(comparison)

    return numbers[index]
}

console.log(mostRepeatedNumber(numbers))

