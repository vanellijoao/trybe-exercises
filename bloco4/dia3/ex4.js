// n = 5

//   *
//  ***
// *****

let n = 9;
let space = " ";
let asterisc = "*"
let string = ""

if (n % 2 > 0) {
    for (let i = 1; i <= n; i += 2) {
        string = space.repeat((n-i)/2) + asterisc.repeat(i) + space.repeat((n-i)/2)
        console.log(string)
    }
} else {
    for (let i = 2; i <= n; i += 2) {
        string = space.repeat((n-i)/2) + asterisc.repeat(i) + space.repeat((n-i)/2)
        console.log(string)
    }
}