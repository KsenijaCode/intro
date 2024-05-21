/*
OBJECT - objektas
*/

const empty = {};
console.log(empty);

// const stud1 = ['Jonas', 19, false];
// const stud2 = ['Maryte', 25, true];
// const stud3 = ['Petras', 18, false];

// console.log(stud2[1]);

const stud1 = {                 // Objektas
    name: 'Jonas',
    age: 19,
    isMarried: false
};
console.log(stud1);
console.log(stud1.name);
console.log(stud1.age);


const stud2 = {
    age: 25,
    name: 'Maryte',
    isMarried: true
};
console.log(stud2);


const students = [
    {name: 'Jonas', age: 19, isMarried: false},
    {name: 'Maryte', age: 25, isMarried: true},
    {name: 'Petras', age: 18, isMarried: false}
];
console.log(students);
console.log(students[2]);
console.log(students[2].name);

function introduction(studentData) {
    return `Sveiki, as esu ${studentData.name}, man ${studentData.age} metu ir esu/nesu vedes`;
}

console.log(introduction(students[0]));