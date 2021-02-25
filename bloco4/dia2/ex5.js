let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let comparison = 0;

for (let i = 0; i < numbers.length; i++) {
    if (comparison < numbers[i]) {
        comparison = numbers[i];
    } else {
        comparison = comparison;
    }
}

console.log(comparison);