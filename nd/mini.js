/*               Kintamųjų inicijavimas

Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/

const n1 = 7;

console.log(n1);


const n2 = 5;

console.log(n2);


const n3 = 2;

console.log(n3);


console.log(n1, n2, n3);


/*
Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/

const text1 = 'Labas';

console.log(text1);


const text2 = 'rytas';

console.log(text2);


const text3 = 'Lietuva';

console.log(text3);


console.log(text1, text2, text3);

/*
Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių
tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/

const marks = [10, 2, 8, 4, 6];

console.log(marks);


const numbers = [4234, 546, 54363, 9694, 245];

console.log(numbers);


const age = [18, 3, 25, 108, 40];

console.log(age);


/*
Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto
tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/


const students = ['Jonas', 'Maryte', 'Petras', 'Ona', 'Olga'];

console.log(students);


const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

console.log(days);


const Holidays = ['Easter', 'New_Year', 'Christmas', 'Birthday', 'Independence'];

console.log(Holidays);


/*                 Veiksmai su kintamaisiais

Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
*/

const sum = n1 + n2 + n3;
console.log(sum);


/*
Sujungti visus teksto tipo kintamuosius taip, jog tarp
jų būtų sudarytas tarpas
Rezultatą išvesti į console
*/

const sentence = text1 + ' ' + text2 + ' ' + text3;

console.log(sentence);


/*
Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra
skaičiai, pagal pateiktą logiką:
1-2+3-4+5
Rezultatą išvesti į console
*/

const marksSum = marks[0] - marks[1] + marks[2] - marks[3] + marks[4];

console.log(marksSum);


/*
Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo
sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis
ir tarpas
*/

const calendar = days[0] + '-' + Holidays[4] + ',' + ' '
+ days[1] + '-' + Holidays[3] + ',' + ' ' + days[2] + '-'
+ Holidays[2] + ',' + ' ' + days[3] + '-' + Holidays[1]
+ ',' + ' ' + days[4] + '-' + Holidays[0];

console.log(calendar);


/*                  Kintamųjų palyginimas

Priklausomai nuo sąlygos, susikurkite 2 skirtingų
reikšmių nurodyto tipo kintamuosius.
Lyginant, jei rezultatas tenkina palyginimo sąlygą
(nurodytą žemiau), tai į console išvesti žodį
“Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį
“Bandykite kitą kartą.”.
*/



/*Tarpusavyje palyginti skaičiaus tipo kintamuosius:

kuris didesnis*/


//kuris mažesnis



//ar jie lygūs


//ar jie nelygūs


//kuris didesnis arba lygus


//kuris mažesnis arba lygus


//Išvesti teksto tipo kintamųjų ilgius



//----------------------------------



//                     Ciklo for panaudojimas

// Suskaičiuoti ką gausime susumavus skaičius
// intervale tarp (imtinai):

// 0 … 0        [0..0]

let answer1 = 0;
for (let i=0; i<=0; i++) {
    answer1 +=i;
}
console.log(answer1);


// 0 … 4        [0..4]

let answer2 = 0;
for (let i = 0; i <=4; i++) {
    answer2 +=i;
}
console.log(answer2);


// 0 … 100      [0..100]

let answer3 = 0;
for (let i = 0; i <=100; i++) {
    answer3 +=i;
}
console.log(answer3);


// 574 … 815        [574..815]

let answer4 = 0;
for (let i = 574; i <= 815; i++) {
    answer4 +=i;
}
console.log(answer4);


// -50 … 50     [-50.50]

let answer5 = 0;
for (let i = -50; i <=50; i++) {
    answer5 +=i;
}
console.log(answer5);


// -70 … 30     [-70..30]

let answer6 = 0;
for (let i = -70; i <=30; i++) {
    answer6 +=i
}

console.log(answer6);



// Panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// pvz.: “abcdef” -> “fedcba”

function reverseText(text) {
    let answer = '';
    for (let i=0; i<=text1.length; i++) {
    answer = text[i]+answer;
}
return answer;
}

console.log(reverseText('abcdef'));


// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// 0 - 11
// 8 - 31
// -18 - 18
// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.


function numberCount(start, finish, step) {
    let answer = 0;
    for (let i=start; i<=finish; i++) {
        if (i % step === 0) {
            answer++;
        }
    }
    return 'Skaičių intervale tarp ' + start + ' ir ' + finish + ', besidalijančių be liekanos iš ' + step + ' yra ' + answer + ' vienetai.';
}

console.log(numberCount(0, 11, 3));
console.log(numberCount(0, 11, 5));
console.log(numberCount(0, 11, 7));

console.log(numberCount(8, 31, 3));
console.log(numberCount(8, 31, 5));
console.log(numberCount(8, 31, 7));

console.log(numberCount(-18, 18, 3));
console.log(numberCount(-18, 18, 5));
console.log(numberCount(-18, 18, 7));


//                      Funkcijos

// Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus

// Funkcija pavadinimu “tusciaFunkcija”:
// nepriima jokių kintamųjų
// neatlieka jokios vidinės logikos
// gražina boolean tipo reikšmę “false”
// TESTAS:
// console.log( tusciaFunkcija() );
// rezultatas: false

function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());


// Funkcija pavadinimu “daugyba”:
// priima du skaičiaus tipo kintamuosius
// atskirame kintamajame įsimena sandaugos reikšmę
// gražina saudaugos rezultatą
// TESTAI:
// console.log( daugyba( skaicius1, skaicius2 ) );
// console.log( daugyba( skaicius3, skaicius2 ) );
// console.log( daugyba( skaicius1, skaicius3 ) );
// rezultatas: teisingos reikšmės;

function daugyba(a, b) {
    return a * b;
}

console.log(daugyba(5, 3));
console.log(daugyba(7, 3));
console.log(daugyba(5, 7));

// Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// priešingu atveju, funkcija tęsia darbą
// į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// gražina skaitmenų kiekį
// TESTAI:
// console.log( skaitmenuKiekisSkaiciuje( 5 ) );
// rezultatas: 1
// console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// rezultatas: 3
// console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// rezultatas: 11
// console.log( skaitmenuKiekisSkaiciuje( true ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( NaN ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”



// Funkcija pavadinimu “didziausiasSkaiciusSarase”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
// priešingu atveju, funkcija tęsia darbą
// pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
// gražina didžiausią surastą skaičių
// TESTAI:
// console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
// rezultatas: 1
// console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
// rezultatas: 3
// console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
// rezultatas: 78
// console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
// rezultatas: 69
// console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
// rezultatas: -1
// console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( didziausiasSkaiciusSarase( [] ) );
// rezultatas: “Pateiktas sąrašas negali būti tuščias.”



// Funkcija pavadinimu “isrinktiRaides”:
// priima du kintamuosius:
// pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
// antrasis nurodo kas kelintą raidę išrinkti
// patikrinti, ar pirmasis kintamasis yra teksto tipo:
// jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą
// patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
// jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
// priešingu atveju tęsiame darbą
// patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
// jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą
// patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
// priešingu atveju tęsiame darbą
// patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// priešingu atveju tęsiame darbą
// išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
// išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
// gražina rezultatą
// TESTAI:
// console.log( isrinktiRaides( “abcdefg”, 2 ) );
// rezultatas: “bdf”
// console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
// rezultatas: “cfil”
// console.log( isrinktiRaides( “abc”, 0 ) );
// rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
// console.log( isrinktiRaides( “abc”, 4 ) );
// rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// console.log( isrinktiRaides( 1561, 2 ) );
// rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”




// Funkcija pavadinimu “dalyba”:
// turi priimti du kintamuosius
// reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
// esant blogoms sąlygoms, išvesti atitinkamą pranešimą
// esant geroms - tęsti darbą
// į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
// daliname pirmąjį skaičių iš antrojo
// grąžinti suskaičiuotą reikšmę
// TESTAI:
// sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą
