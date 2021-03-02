function endingString(string1, string2) {
    let index = string1.length - string2.length;
    let shortString = '';

    for (let i = 0; i < string2.length; i += 1) {
        shortString += string1[index + i]
    };

    if (shortString == string2) {
        return true
    } else {
        return false
    }
}

console.log(endingString('tribe', 'be'))
console.log(endingString("joaofernando", "fernan"))