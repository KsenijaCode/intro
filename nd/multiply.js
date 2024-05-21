function multiply(a, b) {
    
}

function multiply(firstNumber, secondNumber) {
    const answer = firstNumber * secondNumber;
    return answer;
}

console.log(multiply(2, 2));
console.log(multiply(-672, 12));
console.log(multiply(17, 6.4532));
console.log(multiply(2, Infinity));
console.log(multiply(-Infinity, Infinity));
console.log(multiply(2, NaN));
console.log(multiply(NaN, -NaN));
console.log('------------');
console.log(multiply(5, 'Labas'));
console.log(multiply(5, 'Labas'.length));
console.log(multiply(5, []));
console.log(multiply(5, [].length));
console.log(multiply(5, [7]));
console.log(multiply(5, [7].length));
console.log(multiply(5, [7, 2]));
console.log(multiply(5, [7, 2].length));            // masyvo ilgis = 2 - 2 skaiciai (reiksmes)
console.log(multiply(5, true));                 // true = 1
console.log(multiply(5, false));                // false = 0

console.log(multiply(5, undefined));
console.log(multiply(5, null));                 // null = 0
console.log(multiply(5, multiply));          // funkcija
console.log(multiply(5, multiply()));
console.log(multiply(5, multiply(2, 4)));       // 5 * (2 * 4)

console.log(multiply(5));           // by default first, every nextNumber = undefined
console.log(multiply());            // Undefined * Undefind = NaN

function multiply(a, b) {
    if (typeof a !== 'number') {
        return 'Pirmasis parametras turi buti skaiciaus tipo';
    }

    if (typeof b !== 'number') {
        return 'Antrasis parametras turi buti skaiciaus tipo';
    }
}