let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function letterCounter (array){
    let biggestName = '';
    
    for (let i = 0; i < array.length; i+= 1) {
        if (biggestName.length < array[i].length) {
            biggestName = array[i];
        } else {
            biggestName = biggestName;
        }
    };

    return biggestName;
};

console.log(letterCounter(names));