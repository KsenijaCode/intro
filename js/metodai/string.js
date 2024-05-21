/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

const word = 'Labas rytas, Lietuva!';

console.log(word);
console.log('Labas rytas, Lietuva!');

console.log(word[0]);
console.log('Labas rytas, Lietuva!'[0]);

console.log(word.charAt(0));
console.log('Labas rytas, Lietuva!'.charAt(0));

console.log(word.charCodeAt(0));
console.log(word.charCodeAt(1));
console.log(word.charCodeAt(2));
console.log(word.charCodeAt(3));
console.log(word.charCodeAt(4));


//          Zodziu sujungimas

console.log('Labas '.concat('rytas'));
console.log('Labas '.concat('rytas,', 'Lietuva'));
console.log('Labas '.concat('rytas, ').concat('Lietuva'));


//          Sulygina galunes
console.log('endsWith()');

console.log('Labas'.endsWith('a'));
console.log('Labas'.endsWith('s'));


//          Sulygina pradzias
console.log('startsWith()');

console.log('Labas'.startsWith('l'));
console.log('Labas'.startsWith('L'));
console.log('Labas'.startsWith('Lab'));


//          Ar savyje turi
console.log('includes()');

console.log('Tomato'.includes('k'));
console.log('Tomato'.includes('o'));
console.log('Tomato'.includes('ma'));
console.log('Tomato'.includes('to'));
console.log('Pomidoras'.includes('p'));


//          Nustato indeksa (vieta)
console.log('indexOf()');

console.log('Tomato'.indexOf('t'));
console.log('Tomato'.indexOf('T'));
console.log('Tomato'.indexOf('om'));        // nustato 1-ojo zenklo indeksa


//          Iesko is galo


//          Pakartoja
console.log('repeat()');

console.log('Labas '.repeat(5));
console.log('Labas '.repeat(0));
console.log('Labas '.repeat(NaN));
console.log('Labas '.repeat());
console.log('Labas '.repeat(0.5));
console.log('Labas '.repeat(3.5));          // ima sveika skaiciu


//          Replace
console.log('replace()');

console.log('Tomato'.replace('To', 'Ku'));
console.log('Tomato'.replace('o', '_'));                    // keicia pirma
console.log('Tomato'.replace('o', '_').replace('o', '_'));  // norint keisti kelis


//          Pakeicia visus
console.log('replaceAll()');

console.log('Aaaaaa'.replaceAll('a', 'k'));


//
console.log('slice()');


const p = 'Pyragelis';

console.log(p.slice(-3));
console.log(p.slice(6));
console.log(p.slice(p.length-3));


const m = 'Vasara';

console.log(m.slice(-3));
console.log(m.slice(6));
console.log(m.slice(m.length-3));


console.log('Pyragelis'.slice(2, 4));
console.log('Pyragelis'.slice(-100));
console.log('Pyragelis'.slice(2, 5));
console.log('Pyragelis'.slice(2, 6));

const dalis = 'Pyragelis'.slice(2, 100);
console.log(dalis, dalis.length);

console.log('-------------');
console.log('split()');

const sakinys = 'Labas rytas, Lietuva!';
const zodziai = sakinys.split(' ');
console.log(zodziai);
console.log(zodziai[0]);
console.log(zodziai[1]);
console.log(zodziai[2]);
console.log(zodziai[3]);

const sakinys2 = 'Bananas';
const dalys = sakinys2.split('a');
console.log(dalys);

const sakinys3 = 'Pomidoras';
const dalys1 = sakinys3.split('a');
console.log(dalys1);

const sakinys4 = 'Bananas';
const dalys2 = sakinys4.split('B');
console.log(dalys2);

const sakinys5 = 'aaaWaaaWaaawaaaWaaa';
const dalys3 = sakinys5.split('W');
console.log(dalys3);

const sakinys211 = '';
const dalys11 = sakinys211.split('');
console.log(dalys11);

const sakinys21 = ' ';
const dalys15 = sakinys21.split('');
console.log(dalys15);


console.log('-------------');
console.log('trim()');

console.log('Pomidoras'.trim());


const text = 'Labas, rytas, Lietuva!';

const dictionary = text
    .replace(',', '')
    .replace('!', '')
    .split(' ');
console.log(dictionary);