let numbers = [2, 3, 6, 7, 10, 1];

function highestNumberIndex (array){
    let comparison = 0;
    
    for (let i = 0; i < numbers.length; i+= 1) {
        if (comparison < numbers[i]) {
            comparison = numbers[i];
        } else {
            comparison = comparison;
        }
    };

    return numbers.indexOf(comparison);
};

console.log(highestNumberIndex(numbers))