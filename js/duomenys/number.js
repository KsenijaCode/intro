/*
NUMBERS
- sveikieji / desimtainiai
- teigiami / neigiami
- normalus / nenormalus

Ne normalus:
- Infinity
- -Infinity
- NaN (not-a-number)

Matematiniai operatoriai:
- aritmetiniai: +, -, /, *, **, %
- priskyrimo: +=, -=, /=, *=, **=, %=
- inkrementiniai: ++, --

*/

const pirmas = 5;
const antras = 7;
const trecias = -54.5654;
const nulis = 0;
const asd = 9999999;

console.log(pirmas);
console.log(antras);

const suma = pirmas + antras;
console.log(suma);

const skirtumas = pirmas - antras;
console.log(skirtumas);

const dalmuo1 = pirmas / antras;
console.log(dalmuo1);

const dalmuo2 = antras / pirmas;
console.log(dalmuo2);

const sandauga = pirmas * antras;
console.log(sandauga);

const laipsnis1 = pirmas ** antras;
console.log(laipsnis1);

const laipsnis2 = antras ** pirmas;
console.log(laipsnis2);

console.log(2 ** 2, 2 *2);
console.log(2 ** 3, 2 * 2 * 2);
console.log(2 ** 4, 2 * 2 * 2 * 2);

const liekana1 = pirmas % antras;
console.log(liekana1);
console.log(pirmas, '%', antras, '=', liekana1);

const liekana2 = antras % pirmas;
console.log(liekana2);
console.log(antras, '%', pirmas, '=', liekana2);


let pinigine = 0;
console.log(pinigine);

pinigine = 10;
console.log(pinigine);

pinigine = 50;
console.log(pinigine);


let money = 0;
console.log(money);

money = 5;
console.log(money);

money = money + 5;
console.log(money);

money = money + 5;
console.log(money);

let greitukas = 13;
console.log(greitukas);

greitukas = greitukas + 3;
console.log(greitukas);

greitukas = 2 * greitukas - 1;
console.log(greitukas);

greitukas = greitukas % 10;
console.log(greitukas);

greitukas = greitukas ** 123;
console.log(greitukas);

greitukas = greitukas ** 0;
console.log(greitukas);

greitukas = 13;
console.log(greitukas);

console.clear;

let x = 1;

x +=1
console.log(x);

x *= 20;
console.log(x);

x /= 5;
console.log(x);

x %= 3;
console.log(x);

x **= 10;
console.log(x);


let y = 10;
console.log(y);

y += 10 + 10 + 10;
console.log(y);

y -= 5 * 4;
// 40 - 5 * 4;
console.log(y);

y -= 10 + 5 * 4;
// 20 - (10 + 5 * 4);
console.log(y);



console.log('-----------');

let makaronai = 2;
console.log(makaronai);

makaronai = makaronai + 2;
console.log(makaronai);

makaronai += 2;
console.log(makaronai);

makaronai += 1;
console.log(makaronai);

makaronai++;                // ++ - prie saves prideda 1
console.log(makaronai);

makaronai--;                // -- - is saves atima 1
console.log(makaronai);

++makaronai;                // tas pats
console.log(makaronai);

--makaronai;                // tas pats
console.log(makaronai);

// trumpesnis budas
makaronai++;
makaronai++;
makaronai++;
makaronai++;
console.log(makaronai);


console.log('----------');


let g = 6;                // let

console.log(g);

console.log(g++);           // spausdina, po to padidina

console.log(++g);           // padidina, po to spausdina

console.log(g);


console.log('----------');


let k = 6;               

console.log(k);

console.log(k--);           // spausdina, po to sumazina

console.log(--k);           // sumazina, po to spausdina

console.log(k);