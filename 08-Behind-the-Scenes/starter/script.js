'use strict';

// function calcAge(birthYear){
//     const age = 2037 - birthYear;

//     function printAge(){
//         let output = ` ${firstname},You are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996){
//             var millenial = true;
//             // Creating NEW variable with same name as outer scope's variable
//             const firstname = 'Steven'

//             // Reassigning outer scope's variable
//             output = 'NEW OUTPUT';

//             const str = `Oh, and you're a millenial, ${firstname}`;
//             console.log(str);

//             function add (a, b){
//                 return a +b;
//             }

//         }
//         // console.log(str);
//         console.log(millenial);
//         console.log(output);
//         // console.log(add(2,3));
//     }

//     printAge();
//     return age;
// }

// const firstname = 'Jonas';
// calcAge(1991);
// // console.log(age);

// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     console.log(2037-birthYear);
//     console.log(this);
// }

// calcAgeArrow(1950);

// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }

// jonas.calcAge();

// const matilda = {
//     year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();
// var firstName = 'Matilda'

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//SOLUTION 1 we create new constant so child scope can get this from parent scope
// const self = this;
// const isMillenial = function (){
//     console.log(self);
//     console.log(self.year >= 1981 && self.year <= 1996);
// };

//SOLUTION2 - arrow function uses scopre from parent scope
//      const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
// },
//     greet: function() {
//         console.log(this);
//         console.log(`Hey ${this.firstName}`);
//     }
// };

// jonas.greet();
// jonas.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend', friend);
// console.log('Me', friend);

// //PRIMITIVE TYPES
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);


// //Reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastname: 'Williams',
//   age : 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastname = 'Davis';
// console.log('Before marriage', jessica);
// console.log('After marriage', marriedJessica);

// // marriedJessica = {};

// // Copying objects

// const jessica2 = {
//   firstName: 'Jessica',
//   lastname: 'Williams',
//   age: 27,
//   family : ['alice', 'bob']
// };

//  const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';

// console.log('Before marriage', jessica2);
// console.log('After marriage', jessicaCopy);

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');