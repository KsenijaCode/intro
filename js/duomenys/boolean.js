/*
BOOLEAN - loginės reikšmės

- true
- false

Boolean logikos operatoriai:
- && (and)      ampersand
- || (or)
- !             apverčia sąlygą; ne > 2

Kaip imterpretuojami kiti duomenu tipai ir
ju reiksmes, jei jie yra naudojami lyg boolean?

String:
- jei tuscias - false
- jei ne tuscias - true

Number:
- jei 0 - false
- jei ne 0 - true
- jei NaN - false
- jei +/- Infinity - true

Array:
- jei tuscias - true
- jei ne tuscias - true

Object:
- jei tuscias - true
- jei netuscias - true

Undefined - false

null - false
*/

const username = 'Jonas';
const age = 99;
const isSunShining = true;         // klausimo forma
const hasFuel = false;

console.log(isSunShining);
console.log(hasFuel);

console.log('KAIP NENAUDOTI:', true + true);    // true skaito kaip 1
console.log('KAIP NENAUDOTI:', (true + true) * (true + true + true));   // (1+1)*(1+1+1)
console.log('KAIP NENAUDOTI:', true * false);   // false skaito kaip 0

console.log('----------');

console.log(true && true);
console.log(true && false);         // jeigu aplink && yra 
console.log(false && true);          //  bent 1 false,
console.log(false && false);         //  visa salyga bus false

console.log('----------');

// MERGINA
// kada eis i pasimatyma?
// - grazus
// - jaunas
// - turtingas

const isBeautiful = true;
const isYoung = true;
const isRich = true;

const willGo = isBeautiful && isYoung && isRich;
console.log(willGo);

const isBeautiful1 = false;
const isYoung1 = true;
const isRich1 = true;

const willGo1 = isBeautiful1 && isYoung1 && isRich1;
console.log(willGo1);       // neis, nes netenkina
                             //  nors 1 is butinu (&&) salygu

console.log('----------');

// VAIKINAS
// kada eis i pasimatyma?
// - grazi
// - jauna
// - turtinga

const isBeautiful2 = true;
const isYoung2 = true;
const isRich2 = true;

const willGo2 = isBeautiful2 || isYoung2 || isRich2;
console.log(willGo2);

const isBeautiful3 = false;
const isYoung3 = true;
const isRich3 = true;

const willGo3 = isBeautiful3 || isYoung3 || isRich3;
console.log(willGo3);

const isBeautiful4 = false;
const isYoung4 = false;
const isRich4 = true;

const willGo4 = isBeautiful4 || isYoung4 || isRich4;
console.log(willGo4);       // eis, nes tenkina
                             // nors 1 salyga

console.log('----------');
console.log('----------');

//           2 * 2 * 2     =   8
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('----------');

console.log(true || true);          // jeigu yra bent 1 true
console.log(true || false);          // aplink ||, 
console.log(false || true);          // salyga bus true
console.log(false || false);

console.log('----------');
console.log('----------');

//           2 * 2 * 2 * 2 * 2      =  32
console.log(true && true && true);
console.log(true && true && false);
console.log(false && true && true);
console.log(false && false && true);
console.log(false && true && false);
console.log(false && false && false);
console.log(true && false && true);
console.log(true && false && false);

console.log('----------');

console.log(true && true || true);
console.log(true && true || false);
console.log(false && true || true);
console.log(false && false || true);
console.log(false && true || false);
console.log(false && false || false);
console.log(true && false || true);
console.log(true && false || false);

console.log('----------');

console.log(true || true && true);
console.log(true || true && false);
console.log(false || true && true);
console.log(false || false && true);
console.log(false || true && false);
console.log(false || false && false);
console.log(true || false && true);
console.log(true || false && false);

console.log('----------');

console.log(true || true || true);
console.log(true || true || false);
console.log(false || true || true);
console.log(false || false || true);
console.log(false || true || false);
console.log(false || false || false);
console.log(true || false || true);
console.log(true || false || false);

console.log('----------');
console.log('----------');

//           2 * 2 * 2 * 2 * 2 * 2 * 2      =  128
console.log(true && true && true && true);          // 1 false &&
console.log(true && true && true && false);
console.log(true && false && true && true);
console.log(true && true && false && true);
console.log(false && true && true && true);
console.log('----------');
console.log(true && true && false && false);        // 2 false &&
console.log(true && false && true && false);
console.log(false && true && true && false);
console.log(false && false && true && true);
console.log(false && true && false && true);
console.log(true && false && false && true);
console.log('----------');
console.log(false && false && false && true);        // 3 false &&
console.log(false && false && true && false);
console.log(false && true && false && false);
console.log(false && false && true && false);



console.log('----------');


if (true) {
    console.log(true);
} else {
    console.log(false);
}


console.log('---------------');

if (4 == '4') {
    console.log('Taip');

} else {
    console.log('Ne');
}


const n1 = 4;                           // sujungia kaip tekstus
const n2 = '4';

if (n1 == n2) {
    console.log('Taip', n1 + n2);
} else {
    console.log('Ne');
}

