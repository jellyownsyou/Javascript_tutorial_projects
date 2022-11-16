"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

// function logger() {
//     console.log('My name is Samo');

// }

// function logger1() {
//   console.log("My name is Samo");
// }

// function logger2() {
//   console.log("My name is Samo");
// }
// //calling /running /invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;

// }

// console.log(fruitProcessor(5, 0));

// console.log(fruitProcessor(5, 4));

// var num = 23
// num = Number('num');
// console.log(typeof num);

// function myfunction(){
//     console.log(num);
// }
// myfunction();

// function calcAge1(birthYeah){
//     return 2021 - birthYeah;
// }

// const calcAge2 = function(birthYeah) {
//  return 2037 - birthYeah;
// }

// const age1 = calcAge1(1991);
// const age2 = calcAge2(1991);

// console.log(age1, age2);
// const calcAge2 = function(birthYeah) {
// return 2037 - birthYeah;}

//arrow function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));

// const anotherfunction = function(birthYear){
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = anotherfunction(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0){
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }

//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1970, 'Mike'));

// const calcAvarage = (score1p, score2p, score3p, score1k, score2k, score3k) => {
//   const avgDolphins = (score1p + score2p + score3p) / 3;
//   const avgKoalas = (score1k + score2k + score3k) / 3;
//   return [avgDolphins, avgKoalas];
// }

// const calcAvarage2 = (score1p, score2p, score3p, score1k, score2k, score3k) => {
//   const avgDolphins = (score1p + score2p + score3p) / 3;
//   const avgKoalas = (score1k + score2k + score3k) / 3;
//   return [avgDolphins, avgKoalas];
// };

// //MATCH 1
// const data1 = calcAvarage(44,23,71,65,54,49);
// const avgDolphins1 = data1[0];
// const avgKoalas1 = data1[1];

// //MATCH2
// const data2 = calcAvarage2(85,54,71,23,34,27);
// const avgDolphins2 = data2[0];
// const avgKoalas2 = data2[1];

// function checkWinner(avgDolphins1, avgKoalas1, avgDolphins2, avgKoalas2){
//     if (avgDolphins1>avgKoalas1){
//         console.log(`Dolphins have won first match by ${avgDolphins1-avgKoalas1} points.`);
//     } else if (avgDolphins1<avgKoalas1){
//         console.log(`Koalas have won first match by ${avgKoalas1-avgDolphins1} points.`);
//     } else {
//         console.log(`The match is even`);
//     }
//     if (avgDolphins2>avgKoalas2){
//         console.log(`Dolphins have won second match by ${avgDolphins2-avgKoalas2} points.`);
//     } else if (avgDolphins2<avgKoalas2){
//         console.log(`Koalas have won second match by ${avgKoalas2-avgDolphins2} points.`);
//     } else {
//         console.log(`The match is even`);
//     }
// }

// checkWinner(avgDolphins1, avgKoalas1, avgDolphins2, avgKoalas2);

// const calcAvarage = (a, b, c) => (a + b + c) / 3;

// //Test1
// let scoreDolphins = calcAvarage(44, 23, 71);
// let scoreKoalas = calcAvarage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log(`No team wins...`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// //Test2

// scoreDolphins = calcAvarage(85, 54, 41);
// scoreKoalas = calcAvarage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = 'Michael';
// const friend2 = 'Samo';
// const friend3 = 'Tadej';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991,1986,2008,2020);
// console.log(years);

// console.log(friends[0], years[3]);

// console.log(friends.length);
// console.log(friends[friends.length-1]);

// friends[2] = 'Jay';
// console.log(friends);

//add elements end
//  const friends = ["Michael", "Jay", "Jorday"];
//  const newLength = friends.push('Jay', 'Steven', 'rer');
//  console.log(friends);
//  console.log(newLength);

//  //add elemets beginning
//  friends.unshift('John');
//  console.log(friends);

//  //remove elemets beginning last
//  friends.pop();
//  const popped = friends.pop();
//  console.log(popped);
//  console.log(friends);

//  //remove first element
//  friends.pop();
//  const popped = friends.pop();
//  console.log(popped);
//  console.log(friends);

//  console.log(friends.indexOf('rer'));

//  console.log(friends.includes('Steven'));
//  console.log(friends.includes('Bob'));

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// // const calcTip = (bill) =>
// //   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// const jonasArray = [
//     'JOnas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName : 'Jonas',
//     lastName : 'Schmedtmann',
//     age : 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.');

// // if(jonas[interestedIn]){
// //     console.log(jonas[interestedIn]);
// // } else {
// //     console.log('Wrong request! Chose between firstName, lastName, age, job and friends');
// // }

// // jonas.location = 'Portugal';
// // jonas['twitter'] = '@jonasschmedtman';
// // console.log(jonas);

// // Challange
// // "Jonas has 3 friends, and his best friend is called Michael"

// console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`)

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function(){
//   //     // console.log(this);
//   //     return 2037 - this.birthYear;
//   // }

//   calcAge: function(){
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function() {
//     return `${this.firstName} is a ${this.calcAge()} - year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//   }
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// // console.log(jonas['calcAge'](1991));

// console.log(jonas.getSummary());

// const mark = {
//     fullname : 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI : function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };
// const john = {
//   fullname: "John Smith",
//   mass: 93,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if(mark.bmi > john.bmi) {
//     console.log(`${mark.fullname}'s BMI (${mark.bmi})
// is higher than ${john.fullname}'s BMI (${john.bmi})`);
// } else if (john.bmi > mark.bmi){
//     console.log(`${john.fullname}'s BMI (${john.bmi})
// is higher than ${mark.fullname}'s BMI (${mark.bmi})`);
// }

// console.log('Lifting weights repetition 1 ');
// console.log('Lifting weights repetition 2 ');
// console.log('Lifting weights repetition 3 ');
// console.log('Lifting weights repetition 4 ');
// console.log('Lifting weights repetition 5 ');
// console.log('Lifting weights repetition 6 ');
// console.log('Lifting weights repetition 7 ');
// console.log('Lifting weights repetition 8 ');
// console.log('Lifting weights repetition 9 ');
// console.log('Lifting weights repetition 10 ');

// for loop keeps running while condition is TRUE
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} `);
// }

// ];

// //new array
// const types = []

// for(let i = 0; i < jonas.length ; i++){
//     //reading from jonas array
//     // console.log(jonas[i], typeof jonas[i]);

//     //filling types array
//     // types[i] = typeof jonas[i];

//     types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// const jonas = [
//   "JOnas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   2037 - 1921
// ];

// console.log('---ONLY STRINGS---');
// for (let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] !== 'string') continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("---BREAK WITH NUMBER---");
// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);
//   if (typeof jonas[i] !== "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//   "JOnas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"]
// ];

// // 0,1, ..., 4
// // 4, 3, ..., 0

// for (let i = jonas.length -1; i >= 0; i--){
//     console.log(i,jonas[i]);
// };

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++){
//         console.log(`Exercise ${exercise} Lifting weight repetition ${rep} `)
//     }
// };

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`FOR: Lifting weights repetition ${rep} `);
// }

// let rep = 1;
// while (rep <= 10){
//     console.log(`WHILE: Lifting weights repetition ${rep}`);
//     rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// };
// if (dice ===6) {
//     console.log(`You finally rolled 6`);
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// let tips = [];
// let totals = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i=0; i < bills.length; i++ ){
//     tips.push(calcTip(bills[i]));
//     totals.push(bills[i] + calcTip(bills[i]));
//     console.log(`Current total is ${totals[i]}, where bill is ${bills[i]} and tip is ${tips[i]}`)

// };

// console.log (bills, tips, totals);

// const calcAvarage = function (arr) {
//     let sum = 0;
//     for(let i= 0; i < arr.length; i++){
//         // sum = sum + arr[i];
//         sum += arr[i];
//     }
//     console.log(sum);
//     return sum / arr.length;
// }
// console.log(calcAvarage(tips));
// console.log(calcAvarage(bills));
// console.log(calcAvarage(totals));