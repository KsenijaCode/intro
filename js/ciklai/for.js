/*
FOR - pagrindinis ciklas (loop)
*/

// atstumas: 100 m
// zingsnis: 1 m
// zingsniu: 80-200       - priklauso nuo aplinkybiu

// ciferblatas: 60 padalu
// trukme padalos: 1 min.
// per kiek?: 60 min.

/* for (let i = 0; i < 10; i = i+1) {           ( ) - kiek kartu
                                                i = ... - nuo kurios vietos pradeda
                                                i + ... - koks zingsnis
                                                i < ... - iki kada kartoja
                                                { } - ka darysime
}                                               iteration i - pasikartojimas
*/

console.log('START');

for (let i = 0; i < 10; i++) {            
    console.log(i);
}

console.log('FINISH');

console.log('START');

/*
for (let i = 0; i > 0; i++) {       nesuveiks, nes antra salyga (i > 0)
    console.log(i);                 netenkina pirmos - ne = 0
}
*/

for (let i=20; i < 10; i--) {           // i turi atitikti     
    console.log(i);                      // 2-a salyga
}

console.log('FINISH');


console.log('START');

for (let i=20; i > 10; i -= 2.3) {      // kompiuterio
    console.log(i);                     // skaiciavimo ypatumai
}

console.log('FINISH');

                                        // * 10
console.log('START');

for (let i=200; i > 100; i -= 23) {     // konvertavimas i / is
    console.log(i / 10);                // desimtaine / dvejataines
}

console.log('FINISH');


console.log('------------');

//                 0        1       2       3       4
const colors = ['white', 'black', 'red', 'green', 'blue'];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);

console.log('------------');

for (let i = 0; i < colors.length; i++) {
    console.log(i, colors[i]);
}

console.log('------------');

for (let i = colors.length-1; i >= 0; i--) {        // atbuline tvarka
    console.log(i, colors[i]);                      // arba i > -1
}

console.log('------------');

for (let i = colors.length-1; i >= 0; i--) {        // ciklas mažėjimo tvarka, reikšmės - didėjimo
    console.log(i, colors[colors.length-1-i]);                      
}


console.log('------------');


const marks = [10, 2, 8, 4, 6];

let sum = 0;

for (let i=0; i<marks.length; i++) {
    sum += marks[i];
    console.log(sum);
}
console.log('............');
console.log(sum / marks.length);

console.log('------------');

const jonas = [];
const maryte = [10,2];
const petras = [9, 8, 7];
const ona = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function marksAverage(marks) {
    if (marks.length === 0) {
        return 'Nera pazymiu';
    }

    let sum = 0

    for (let i=0; i<marks.length; i++) {
        sum += marks[i];
    }

    return sum / marks.length;
}

    
console.log(marksAverage(jonas));
console.log(marksAverage(maryte));
console.log(marksAverage(petras));
console.log(marksAverage(ona));


console.log('------------');

const text = 'Labas';

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);