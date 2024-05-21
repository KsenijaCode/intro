/*
IF - palyginimas

Palyginimo operatoriai:
VISI: <, >, <=, >=, ==, !=, ===, !==
NAUDOTINI: <, >, <=, >=, ===, !==
NENAUDOTINI: ==, !=

Sablonai:
if () {}
if () {} else {}
if () {} else if () ()
if () {} else if () {} else {}
if () {} ... else if () {} ... else if () {}
if () {} ... else if () {} ... else {}

*/

const age = 99;
const ageLimit = 18;

// 1 variantas
if (age > ageLimit) {
    console.log('Sorry, per jaunas');
}

// 2 variantas
if (age < ageLimit) {
        console.log('Sorry, per jaunas...');       
} else {                                        // alternatyvus
    console.log('Uzeik');                        // veiksmas, jeigu
}                                                 // netenkina salygos

if (4 < 2) {
    console.log('Taip, daugiau');               // terminale nieko neraso,
}                                                // nes netenkina salygos


if (4 > 2) {
    console.log('Taip, daugiau.');
}


if (4 < 2) {
    console.log('Taip, daugiau.');
} else {
    console.log('Ne, maziau');
}


// 3 variantas
// red --> raudona
// blue --> melyna
// green --> zalia
// other --> Nera tokios spalvos...

const color0 = 'blue';
const color1 = 'white';
const color2 = 'orange';
const color3 = 'green';
const color4 = 'black';
const color5 = 'violet';

function colorTranslation(color) {
    let translation = '';

if (color === 'red') {                  // vekia tik viena salyga
    translation = 'Raudona';
} else if (color === 'blue') {
    translation = 'Melyna';
} else if (color === 'green') {
    translation = 'Zalia';
} else {
    translation = '...';
}

return color + ' --> ' + translation;
}
console.log(colorTranslation('blue'));
console.log(colorTranslation('white'));
console.log(colorTranslation('orange'));
console.log(colorTranslation('green'));
console.log(colorTranslation('black'));
console.log(colorTranslation('violet'));

