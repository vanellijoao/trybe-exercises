function verificaPalindromo (word) {
    let sameLetter = 0;
    
    for (let i = 0; i < word.length; i += 1) {
        if (word[i] === word[word.length - 1 - i]) {
            sameLetter;
            // console.log(`${word[i]} é igual a ${word[word.length-1-i]} por isso ${sameLetter} fica igual`)
        } else {
            sameLetter += 1;
            // console.log(`${word[i]} é diferente de ${word[word.length-1-i]} por isso ${sameLetter} aumenta em 1`)
        }
    }

    if (sameLetter > 0) {
        return false
    } else {
        return true
    }
};

console.log(verificaPalindromo('arara'))
console.log(verificaPalindromo('desenvolvimento'))