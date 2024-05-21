// [0..1)
// console.log(Math.random());

// function moneta() {
//     if (Math.random() < 0.5) {
//         // [0..0.5)
//         return 
// }

// }

// console.log('Skaicius');
// // [0.5..1)
// console.log('Herbas');

// const metimuKiekis = 15;
// let herbai = 0;
// for (let i = 0; i < 10; i++) {
//     const iskrito = moneta();
//     if (iskito === 'Herbas') {
//         herbai++;
//     }
//     console.log(iskrito);
// }

// console.log('Herbu kiekis:', herbai);
// console.log('Skaiciu kiekis:', metimuKiekis - herbai);


const week = ['Pirmad', 'Antrad', 'Treciad', 'Ketvirtad', 'Penktad', 'Sestad', 'Sekmad'];
const step = 1 / 7;

for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * week.length);
    console.log(week[index]);
}



// Reikia atsitiktinio skaiciaus [1..10]

const skaiciai = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const step1 = 1/10;

for (let i = 0; i <= 10; i++) {
    const index = Math.floor(Math.random() * skaiciai.length);
    console.log(skaiciai[index]);
}


// Reikia atsitiktinio skaiciaus [23..617]

