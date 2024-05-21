/*
UNARY - vienybe     (a++, a--)
BINARY - dvejyba    (a+b)
TERNARY - trejyba   (a?b:c)
*/

let a = 0;

if (4 > 2) {
    a += 10;
} else {
    a -= 5;
}

console.log(a);


const b = 4 > 2 ? 8*8 : 66;
console.log(b);


const d = 1 + 2 > 3 ? 4 : 5;
console.log(d);

const d1 = 1 + (2 > 3 ? 4 : 5);
console.log(d1);

const e = 'labas'.length > 0 ? 'ilgas' : 'tuscias';
console.log(e);

const f = 'pomidoras'[1 < 2 ? 0 : 5];       // grazina indeksus
console.log(f);

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;

const n = 7;
const ats2 = n > 0 ? sum(n, n) : diff(n, 10);

let ats = null;

if (n > 0) {
    ats = sum(n, n);
} else {
    ats = diff(n, 10);
}

console.log(ats);
console.log(ats2);


const first = text => text[0];
const last = text => text[text.length - 1];
// const last = text => text.at(-1);

// console.log(first('Labas'));
// console.log(last('Labas'));

const text1 = 'Labas';
const strAts = text1.length < 5 ? first(text1) : last(text1);
console.log(strAts);


const funcToCall = text1.length < 5 ? first : last;
const strAts2 = funcToCall(text1);
console.log(funcToCall);
console.log(strAts2);


const jonasMarks = [];
const maryteMarks = [10, 2, 8, 4, 6];

function emptyMarksArray() {
    return 'Nera pazymiu';
}

function marksAverage(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    const count = marks.length;
    const average = sum / count;
    return average;
}

const jonasFunc = jonasMarks.length === 0
    ? emptyMarksArray
    : marksAverage;
const jonasAverage = jonasFunc(jonasMarks);
console.log(jonasAverage);

const maryteFunc = maryteMarks.length === 0
    ? emptyMarksArray
    : marksAverage;
const maryteAverage = maryteFunc(maryteMarks);
console.log(maryteAverage);