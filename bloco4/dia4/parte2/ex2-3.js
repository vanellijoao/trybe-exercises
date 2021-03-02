let numbers = [2, 3, 6, 7, 10, 0, -3];

function lowestNumberIndex (array){
    let comparison = 10000;
    
    for (let i = 0; i < numbers.length; i+= 1) {
        if (comparison > numbers[i]) {
            comparison = numbers[i];
        } else {
            comparison = comparison;
        }
    };

    return numbers.indexOf(comparison);
};

console.log(lowestNumberIndex(numbers))