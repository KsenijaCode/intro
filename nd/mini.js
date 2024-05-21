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
