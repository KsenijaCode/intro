

let labas = "labas123"


function pavadinimas(labas) {       // rasyti f-jos pavadinima

    return console.log("Sveiki atvyke");
}

pavadinimas(labas)          // f-jos pavadinimas, iskviecia kas yra viduje, t.y. ""


let lakas = "lakas123"

function pavadinimas1(a,b) {
    return console.log(a+b); 
}

console.log(pavadinimas1(8,5));

pavadinimas1(5,7);

//
function arLyginis(skaicius) {
if(skaicius % 2 === 0) {
    console.log(`${skaicius} yra lyginis`)
}
else {
    console.log(`${skaicius} yra nelyginis`)
}
}
arLyginis(6)

// ciklas nuo...iki
function printNumber(count) {
    for(let i = -10; i<=count; i = i+3) {       // dideja 3 vtn.
        console.log(i);
    }
}
printNumber(10)


// Surasti didziausia skaiciu
const array = [1,5,11,-1,20,32]

function biggestNumber(arr) {
let biggest = arr[0]
for(let i = 0; i < arr.length; i++) {
    if(arr[i]> biggest) {
        biggest = arr[i]
    }
}
return console.log(biggest)
}
biggestNumber(array)


console.log('----------')