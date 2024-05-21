console.log('Number.isFinite()');

console.log(Number.isFinite(8659));
console.log(Number.isFinite(-8659));
console.log(Number.isFinite(8659.688));
console.log(Number.isFinite(-86.59));
console.log(Number.isFinite(0));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));

console.log('-----------------');

console.log('isFinite()');

console.log(isFinite(8659));
console.log(isFinite(-8659));
console.log(isFinite(8659.688));
console.log(isFinite(-86.59));
console.log(isFinite(0));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(NaN));

console.log('-----------------');

console.log('isNaN()');

console.log(isNaN(8659));
console.log(isNaN(-8659));
console.log(isNaN(8659.688));
console.log(isNaN(-86.59));
console.log(isNaN(0));
console.log(isNaN(Infinity));
console.log(isNaN(-Infinity));
console.log(isNaN(NaN));

console.log('-----------------');

//                  Sveikas skaicius

console.log('parseInt()');

const a = '87';
const b = parseInt('87');

console.log(typeof a);
console.log(typeof b);

console.log(parseInt('87'));

console.log(typeof parseInt('87'));


console.log(parseInt('87'));
console.log(parseInt('-87'));
console.log(parseInt('0'));
console.log(parseInt('87.8'));
console.log(parseInt('-87.8'));
console.log(parseInt('NaN'));
console.log(parseInt('Infinity'));
console.log(parseInt('-Infinity'));
console.log(parseInt('zodziu zaismas'));
console.log(parseInt(''));
console.log(parseInt('123abc'));
console.log(parseInt('abc123'));
console.log(parseInt('123abc123abc'));
console.log(parseInt('abc123abc123'));
console.log(parseInt('125e5'));
console.log(parseInt('1.125e5'));


console.log('-----------------');

//              Desimtainiai

console.log('parseFloat()');

console.log(parseFloat('87'));
console.log(parseFloat('-87'));
console.log(parseFloat('0'));
console.log(parseFloat('87.8'));
console.log(parseFloat('-87.8'));
console.log(parseFloat('NaN'));
console.log(parseFloat('Infinity'));
console.log(parseFloat('-Infinity'));
console.log(parseFloat('zodziu zaismas'));
console.log(parseFloat(''));
console.log(parseFloat('123abc'));
console.log(parseFloat('abc123'));
console.log(parseFloat('1.23abc123abc'));
console.log(parseFloat('abc123abc123'));
console.log(parseFloat('125e5'));               // 1e2 = 10^2 = 100
console.log(parseFloat('1.125e5'));             // 125 = 1.23 * 10^2 = 1.25e2
                                                // 0.001 = 1 * 10^-3 = 1e-3

console.log('-----------------');

//            Prideda nurodyta 0 skaiciu po kablelio

console.log('Number.toFixed()');

const c = 5;

console.log(c);
console.log(c.toFixed(25));


const d = 5.8476;

console.log(d);
console.log(d.toFixed(25));


const k = 7.5656

console.log(k);
console.log(k.toFixed(2));          // apvalinimas nuo 0.5

console.log('-----------------');

//Funkcijos isspausdinimas

console.log(parseFloat);
console.log('' + parseFloat);
console.log(parseFloat.toString());

