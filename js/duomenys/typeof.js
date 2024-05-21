/*
Dyomens tipo nustatymas

TYPEOF (duomens tipo nustatymo operatorius)
*/

console.log(typeof 5);
console.log(typeof 3.64);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof "");
console.log(typeof 'Labas');
console.log(typeof ' ');
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof [1, 2, 3]);
console.log(typeof ['a', 'b']);
console.log(typeof {});
console.log(typeof function empty() {});

// Kai reikia patikrinti ar TAI yra masyvas (array)
console.log(Array.isArray([]));

console.log('------------');

// Patikrinimas, ar TAI yra null
const tikrinamasDalykas = null;
if (tikrinamasDalykas === null) {
    console.log('taip');
} else {
    console.log('ne');
}
 console.log('--------');

const a = 12345;
const aType = typeof a;

console.log(a);
console.log(aType);

if (aType === 'string') {
    console.log('As dirbu su String');
} else {
    console.log('As dirbu ne su String');
}

if (typeof a !== 'string') {
    console.log('As dirbu su String');
} else {
    console.log('As dirbu ne su String');
}

console.log('----------');

const x = 'a';
const y = 7;

if (typeof x !== 'number') {
    console.log('ERROR: x');
} else if (typeof y !== 'number') {
    console.log('ERROR: y');
 } else {
    console.log('VISKAS GERAI');
 }



 