// n = 5

//     *
//    **
//   ***
//  ****
// *****

let n = 5;
let space = " ";
let asterisc = "*"
let string = ""

for (let i = 1; i <= n; i += 1) {
    string = space.repeat(n-i) + asterisc.repeat(i)
    console.log(string)
}