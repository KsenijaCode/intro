/*
FUNCTION - funkcija, perpanaudojama logika
() - parametrų blokas
{} - logikos blokas
[] -

Input --> Function() --> Output
*/

function doSomething() {
    // 1. Input (parametru) validavimas
    // 2. Vykdome logika
    // 3. Gauto rezultato validavimas
    // 4. Graziname rezultata
}

function funkcijosPavadinimas() {
}

const a = funkcijosPavadinimas();

console.log(a);

function empty() {
    return undefined;
}

console.log(empty());

function giveMeFive() {
    return 5;
}

function giveMeSix() {
    return 6;
}

console.log(giveMeFive());
console.log(giveMeSix());

/*
Input:
name: Jonas
surname: Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis!
Laba diena, as esu Petras Petraitis!
Laba diena, as esu Ona Onaite!
*/

function intro(name, surname) {
    return 'Laba diena, as esu ' + name + ' ' + surname + '!';
}

console.log(intro('Jonas', 'Jonaitis'));
console.log(intro('Petas', 'Petraitis'));
console.log(intro('Ona', 'Onaite'));

/*
Input:
- pirmas skaicius = 5
- antras skaicius = 7

Output:
35
*/

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

console.log(multiply(5, 7));
console.log(multiply(8, -5));
console.log(multiply(54, 17));


// Mano vardas yra Jonas, man 90 metu ir as megstu cepelinus.
// Mano vardas yra Maryte, man 80 metu ir as megstu pyragus.

function iLike(name, age, item) {
    return 'Mano vardas yra ' + name + ', man ' + age + ' metu ir as megstu ' + item + '.';
    // return 'Mano vardas yra VARDAS, man X metu ir as megstu KAZKA.'
}

console.log(iLike());
console.log(iLike('Jonas'));
console.log(iLike('Jonas', '90', 'cepelinus'));
console.log(iLike('Maryte', '80', 'pyragus'));

console.log('--------------');

function price(value) {                             // savikaina
    const PVM = 21;                                  // + PVM
    const priceIncrease = 1 + PVM / 100;              // = pardavimo kaina
    const priceForSale = value * priceIncrease ;

    return priceForSale;
}

// uz kiek reikia parduoti, jei savikaina:
console.log(price(100));
console.log(price(150));

// Dictionary : zodis, zodis, zodis.
function words(w1, w2, w3) {
    let sentence = 'Dictionary: ';          // jei let, leidzia
    sentence += w1;                          // keisti, t.y
    sentence += ', ';                         // prie saves prideti
    sentence += w2;
    sentence += ', ';
    sentence += w3;
    sentence += '.';

    return sentence;
}

console.log(words('Labas', 'rytas', 'Lietuva'));