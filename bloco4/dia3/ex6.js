let n = 15;
let divs = 0;

for (i = 2; i < n; i += 1) {
    if (n % i == 0) {
        divs += 1
    }
}

if (divs > 0) {
    console.log (`O número ${n} não é primo, pois é divisível por mais ${divs} números, além dele mesmo e de 1`)
} else {
    console.log (`O número ${n} é primo o/`)
}