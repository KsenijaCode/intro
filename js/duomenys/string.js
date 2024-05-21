/*
STRING - tekstiniu simboliu grandinele

inicijavimas: ' (vienguba), " (dviguba), ` (backtick)

*/

const name = 'Jonas';
console.log(name);

const name2 = "Marija";
console.log(name2);

const sakinys = 'Labas rytas!';
console.log(sakinys);

// Vienguba (') kabute.
const kabutes1 = "Vienguba (') kabute.";
console.log (kabutes1);

// Dviguba (") kabute.
const kabutes2 = 'Dviguba (") kabute.';
console.log(kabutes2);

const personName = 'Chuck';
const personSurname = 'Norris';
const fullName = personName + personSurname;
console.log(fullName)
const full_name = 'personName' + ' ' + 'personSurname';
console.log(full_name);
const FullName = personName + ' ' + personSurname;
console.log(FullName);

// Vienguba (') ir dviguba (") kabutes.
const kabutes12 = "Vienguba (') ir" + ' dviguba (") kabutes.';  //tarpas ne skliaustuose, o tiesiog kaip teksto dalis
console.log(kabutes12);

// Vienguba (') ir dviguba (") kabutes.
const kabutes12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
const kabutes12_2 = "Vienguba (') ir dviguba (\") kabutes.";
const kabutes12_3 = 'Vienguba (\') ir dviguba (\") kabutes.';
const kabutes12_4 = "Vienguba (\') ir dviguba (\") kabutes.";

// escaping
console.log(kabutes12_1);
console.log(kabutes12_2);
console.log(kabutes12_3);
console.log(kabutes12_4);

/*
Pinigines turinys: 0;
Pinigine papildyta: 10;
Pinigines turinys: 10;
Pinigine papildyta: 90;
Pinigines turinys: 100;
*/

let piniginesTurinys = 0;
console.log(piniginesTurinys);

let piniginePapildyta = piniginesTurinys + 10;
console.log(piniginePapildyta);


piniginesTurinys = 10;
console.log(piniginesTurinys);

piniginePapildyta = piniginesTurinys + 90;
console.log(piniginePapildyta);


console.log('---------------');


/*
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/


const HTML = '<header>\r\n\
\t<img>\r\n\
\t<nav>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t</nav>\r\n\
</header>';

console.log(HTML);


console.log('---------------');


const backtick = `Labas rytas, Lietuva!`;           // ` vietoje '
console.log(backtick);

const backtick1 = `Backtikine (\`) kabute.`;        // jeigu naudojamos
const backtick2 = 'Backtikine (`) kabute.';          // tokios pacios kabutes,
const backtick3 = "Backtikine (`) kabute.";           // jas reikia escape'inti (\)

console.log(backtick1);
console.log(backtick2);
console.log(backtick3);


console.log('---------------');

// gauti: 7 + 5 = 12
const a = 7;
const b = 5;
const c = a + b;

const ats1 = a + ' + ' + b + ' = ' + c;
console.log(ats1);

const ats2 = a + " + " + b + " = " + c;
console.log(ats2);

const ats3 = `${a} + ${b} = ${c}`;
console.log(ats3);



const l = 'labas';
const r = 'rytas';

if (l === r) {
    console.log('Taip', l * r);

} else {
    console.log('Ne');
}
console.log(l*r);