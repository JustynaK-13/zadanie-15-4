//Zad.1
const first = 'Hello';
const second = 'World';
const all = `${first} ${second}`;
console.log(all);

//Zad.2 
const multiplay = (a, b = 1) => a * b;
console.log(multiplay(5));
console.log(multiplay(5, 5));

//Zad.3
const average = (...arg) => arg.reduce((a, b) => a + b) / arg.length;
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//Zad.4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const result = average(...grades);
console.log(result);

//Zad.5
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [,, firstname,, lastname] = array;

console.log(firstname, lastname);
