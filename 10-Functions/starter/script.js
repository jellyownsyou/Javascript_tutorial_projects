'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//   //ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 2, 5);

// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmedtman',
//     passport: 23225265
// }

// const checkIn = function(flightNum, passenger){
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name
    
//     if(passenger.passport === 23225265 ){
//         alert('Check In')
//     } else {
//         alert('Wrong passport!')
//     }
// }

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Is the same as doing....
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 1000000000);
// }

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str){
//     const [first, ...others] = str.split('');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// // High-order function (takes in function)
// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Trasnformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// // JS uses callback all the time
// const high5 = function(){
//     console.log('Emoji');
// }
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const greet = function(greeting) {
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     };
// }

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

// //Challange rewritte as arrow function
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hello')('Jonas');

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     // book: function() {}
//     book(flightNum, name){
//         console.log(` ${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name});
//     },
// };

// lufthansa.book(239, 'Samo Gojat')
// lufthansa.book(635, 'John Smith')
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // book(23, 'Sarah Williams') does not work


// //Manually set this keyword
// book.call(eurowings, 23, 'Sarah Williams')
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'Lx',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

//Apply method 
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

//Bind method
// book.call(eurowings, 23, 'Sarah Williams')

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEw23('JOnas Schmedtman');
// bookEw23('Martha Cooper');


// //With Event Listener
// lufthansa.planes = 300;
// lufthansa.buyPLane = function() {
//     console.log(this);
//     this.planes++
//     console.log(this.plane);
// };

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane)

// const poll = {
//     question : 'What is your favorite programming language?',
//     options: ['0: Javascript', '1:Python','2: Rust', '3: C++' ],
//     //This generates [0,0,0,0,]
//     answers: new Array(4).fill(0),
//     registerNewAnswer(){
//       //GET ANSWER
//       const answer = Number(
//         prompt(
//           `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//         )
//       );
//       console.log(answer);
//       //REGISTER answer
//       typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
//       this.displayResults();
//       this.displayResults('string');

//     },
//     displayResults(type = 'array'){
//         if(type === 'array'){
//             console.log(this.answer);
//         } else if (type === 'string'){
//             //Poll restults are 12,24,24,
//             console.log(`Poll results are ${this.answer.join(', ')}`);
//         }
//     }

// };


// // poll.registerNewAnswer();
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));


(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue';
    });
})();