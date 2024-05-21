/*
ARROW FUNCTION - rodykline funkcija, lambda f-ja
*/

const n1 = 7;
const n2 = 5;

// funkcijos deklaravimas

function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);


function dif(a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${dif(n1, n2)}`);


// kintamajam priskiriama anonimine f-ja

const diff = function (a, b) {
return a - b
}
console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);


const multi = function (a, b) {
    return a*b;
}
console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);


// arrow function

const multi1 = (a, b) => {
    return a * b
}
console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);

// arrow function
// jeigu logikos bloke yra tik 1 procedura,
// galima nerasyti {return}

const div = (a, b) =>  a / b;
console.log(`${n1} / ${n2} = ${div(n1, n2)}`);


//arroe function
// jeigu 

const square = (n) => n * n;
console.log(`${n1} * ${n1} = ${square(n1)}`);
console.log(`${n2} * ${n2} = ${square(n2)}`);


const hi = name => `Hi, my name is ${name}!`;

console.log(hi('Jonas'));
console.log(hi('Marija'));


// abbreviation

const abbr = (firstName, lastname) => firstName[0] + '.' + lastname[0] + '.';
const abbr1 = (a, b) => `${a[0]}.${b[0]}.`;
console.log(abbr('Jonas', 'Kazlauskas'));


console.log('-----------------');


console.log(vienas());                  // galima iskviesti pries f-jos aprasyma

function vienas() {
    return 'VIENAS'
}

console.log(vienas());


const antras = () => 'ANTRAS';

console.log(antras());