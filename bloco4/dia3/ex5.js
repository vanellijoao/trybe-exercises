// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

let n = 7;
let space = "-";
let asterisc = "*"
let string = ""

for (let i = 1; i <= n; i += 2) {
    string = space.repeat((n-i)/2) + asterisc.repeat(i) + space.repeat((n-i)/2)
    console.log(string)
}