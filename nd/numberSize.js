//               Skaitmenu kiekis skaiciuje

function numberSize(n) {
    const nAsText = '' + n;         // '' + 2 + '2'

    //desimtainis
    //console.log(numberSize(3.1415), '-->', 5)

    if (n % 1 ===0) {
        return nAsText.length-1;
    }

    //neigiamas
    // console.log(numberSize(-64), '-->', 2)

    if (n < 0) {
        return nAsText.length-1;
    }

    // desimtainis ir neigiamas
    //console.log(numberSize(-68.575)

    if (n % 1 !== 0 && n < 0) {
        return nAsText.length-2;
    }

    
}

console.log(numberSize(2), '-->', 1);
console.log(numberSize(25), '-->', 2);
console.log(numberSize(4895), '-->', 4);
console.log(numberSize(3.1415), '-->', 5);      // taskas skaiciuojasi, nes kaip tekstas
console.log(numberSize(-64), '-->', 2);
console.log(numberSize(-68.575), '-->', 5);
console.log(numberSize(NaN));
console.log(numberSize(Infinity));
console.log(numberSize(-Infinity));
console.log(numberSize());
console.log(numberSize(true));
console.log(numberSize(false));
console.log(numberSize(''));
console.log(numberSize('zodis'));
console.log(numberSize([]));
console.log(numberSize([1]));
console.log(numberSize([1, 2]));
console.log(numberSize('Labas', 'rytas'));
console.log(numberSize('Labas', 'rytas', 'Lietuva'));
console.log(numberSize(undefined));
console.log(numberSize(null));
console.log(numberSize(numberSize));



// const a = 4324;
// console.log(a);
// console.log('' + a);
// console.log(typeof a);
// console.log(typeof 4324);
// console.log(typeof ('' + 4324));
// console.log(typeof ('Labas' + a));
// console.log(typeof a.toString());
// console.log(a.toString());
// console.log('' + numberSize);
// console.log('' + []);
// console.log('' + 'Labas');
// console.log('' + [1, 2, 3])
// console.log('' + true);
// console.log('' + false);
