/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT1_2);


// Math bibliotekos metodai

console.log(Math.abs());        //   | |  skaiciaus absoliutine verte

console.log(Math.cbrt(8));      //   kubine saknis

console.log(Math.ceil(3.14));   // apvalina i didziaja puse
console.log(Math.ceil(-3.14));

console.log(Math.floor(3.14));      // apvalina i mazaja puse
console.log(Math.floor(-3.14));

console.log(Math.round(3.0000001));    // matematinis apvalinimas nuo 0.5 
console.log(Math.round(3.4999999));
console.log(Math.round(3.5));
console.log(Math.round(3.5000001));
console.log(Math.round(3.9999999));

console.log(Math.trunc(3.0000001));    // palieka sveikaja dali
console.log(Math.trunc(3.4999999));
console.log(Math.trunc(3.5));
console.log(Math.trunc(3.5000001));
console.log(Math.trunc(3.9999999));

console.log(Math.trunc(-3.0000001));
console.log(Math.trunc(-3.4999999));
console.log(Math.trunc(-3.5));
console.log(Math.trunc(-3.5000001));
console.log(Math.trunc(-3.9999999));

console.log(Math.fround(3));            // dvejetaine => desimtaine
console.log(Math.fround(-3));
console.log(Math.fround(3.5));
console.log(Math.fround(0.1));
console.log(Math.fround(-0.1));

console.log(Math.hypot())               // Pitagoro teorema

console.log(Math.max(1, 3));            // randa didziausia skaiciu

console.log(Math.min(1, 3, -8, 56));    // randa maziausia skaiciu
                                        // ne masyvuose

console.log(Math.pow(2, 3));            // laipsnis
console.log(2 ** 3);                    // arba

console.log(Math.random())              // intervale nuo 0 iki 1 --> [0..1)

console.log(Math.random()*10)           // intervale iki 10

console.log(Math.random()*-7.5)


console.log(Math.sign(5));
console.log(Math.sign(-5));
console.log(Math.sign(0));
console.log(Math.sign(-0));
console.log(Math.sign(Infinity));
console.log(Math.sign(-Infinity));
console.log(Math.sign(NaN));

