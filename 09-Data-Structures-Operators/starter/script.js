'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function(starterIndex, mainIndex){
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   }

//   // openingHours: {
//   //   thu: {
//   //     open: 12,
//   //     close: 22,
//   //   },
//   //   fri: {
//   //     open: 11,
//   //     close: 23,
//   //   },
//   //   sat: {
//   //     open: 0, // Open 24 hours
//   //     close: 24,
//   //   },
//   // },
// };

// const arr = [2,3,4];
// const a = [0];
// const b = [1];
// const c = [2];

// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(arr);

// let [main, ,secondary] = restaurant.categories;
// console.log(main,secondary);

// //Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main,secondary);

// console.log(restaurant.order(2,0));

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2,0);
// console.log(starter, mainCourse);

// //nested destructuring
// const nested = [2,4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i, j);
// const [i, ,[j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p=2,q=3,r=4] = [8,9];
// console.log(p,q,r);

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function({starterIndex, mainIndex, time = '20:00', adress}){
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}.`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3){
//   console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
// },

//   orderPizza: function(mainIngredient, ...otherIngredients){
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   }
// };

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests:0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi'
// };
//OR asssignment operatpr
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest2.owner = rest1.owner && '<ANDONYMOUS>';
// rest2.owner = rest2.owner && '<ANDONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// //SPREAD, because of right side of =
// const arr = [1,2, ...[3,4]];

// //REST, because of left side of operator
// const [a,b, ...others] = [1,2,3,4,5];
// console.log(a,b,others);

// const [pizza, ,risotto, ...otherfood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherfood);

// //Objects
// const { sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// //2) functions
// const add = function(...numbers) {
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// console.log(sum);
// };

// add(2,3);
// add(5,3,7,2);
// add(8,2,5,3,2,1,4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// //USE ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'Jonas');

// if (restaurant.orderPizza){
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// restaurant.orderDelivery({
//   time: '22:30',
//   adress: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// })

// restaurant.orderDelivery({
//   adress: 'Via del Sole, 21',
//   starterIndex : 1,
// })

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

// //Default values
// const { menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// //Muttating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c:14};

// ({a, b} = obj);
// console.log(a,b);

// //Nested objects
// const {fri: {open: o, close: c}} = openingHours;

// console.log(o,c);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// // console.log(mainMenuCopy);

// //Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(menu);

// //Iterables: arrays, strings, maps, sets. NOT objects!
// const str = 'JOnas';
// const letters = [...str, '', 's'];
// console.log(letters);
// console.log(...str);

// //Not gonna work, because this is not the place that expects multiple values seperated by the comma
// // console.log(`${...str}`);

// //REAL WORLD EXAMPLE
// const ingredients = [];
// //  = [
//   // prompt("Let's make pasta! Ingredient 1? "),
//   // prompt("Let's make pasta! Ingredient 2? "),
//   // prompt("Let's make pasta! Ingredient 3? ")];

//   console.log(ingredients);

//   restaurant.orderPasta([ingredients[0], ingredients[1], ingredients[2]]);
//   restaurant.orderPasta(...ingredients);

//   //OBJECTS
// const newRestaurant = {foundedIn: 19988, ...restaurant, founder: 'Guiseppe'}
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 11.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// //5

// const {odds: {team1, x: draw, team2}} = game;
// console.log(team1, draw, team2);

// //6
// const printGoals = function(...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
//   printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
//   printGoals('Davies', 'Muller');
//   printGoals(...game.scored);

//   //7.

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// const weekdays = ['mon', 'tue', 'wed',]
//  const openingHours = {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   };

//  // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //ES6 enchanced oject literal
//   openingHours,
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({starterIndex, mainIndex, time = '20:00', adress}){
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}.`
//     );
//   },

//   orderPasta(ing1, ing2, ing3){
//   console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
// },

//   orderPizza(mainIngredient, ...otherIngredients){
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   }
// };

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days :`
// for (const day of properties) {
//   openStr += `${day}, `
// }

// console.log(openStr);

// //Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// //Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, {open,close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close ${close}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon)console.log(restaurant.openingHours.mon.open);

// //WITH OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //EXAMPLE

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {

//   const open = restaurant.openingHours[day]?.open ?? 'closed'
//   console.log(`On ${day}, we open at ${open}`);
// }

// //Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

// //Arrays
// const user = [
//   {name: 'Jonas', email: 'hello@jonas.io'}
// ];

// console.log(user[0]?.name ?? 'User array empty');

// if(user.length > 0) console.log(user[0].name);
// else console.log('user array empty');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// };

// console.log([...menu.entries()]);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 11.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza', ]);
// console.log(ordersSet);

// console.log(new Set('Jonas'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Garlic Bread');
// // ordersSet.clear();
// console.log(ordersSet);

// for(const order of ordersSet) console.log(order);

// //Example

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staff);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

// console.log(new Set('jonasschmedtman').size);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetiran', 'Organic'])
//   .set('open', 11)
//   .set('closed', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

//   console.log(rest.get('name'));
//   console.log(rest.get(true));
//   console.log(rest.get(1));

//   const time = 21; 
//   console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));


// const arr = [1,2];
// rest.set(arr, 'Test');
// rest.set(document.querySelecter('h1'), 'Heading');

//   console.log(rest.has('categories'));
//   rest.delete(2);
//   rest.set([1,2], 'Test');
//   console.log(rest);
//   console.log(rest.size);

//   console.log(rest.get(arr));

//  const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// }


// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'java'],
//   [3, 'javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// //Convert object to map
// console.log(Object.entries(openingHours));

// const hoursMap = new Map(Object.entries(openingHours));

// for (const [key, value] of question){
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);

// }

// question.get(question.get('correct') === answer);

// //CONVERT MAP TO ARRAY
// console.log([...question]);
// console.log(question.entries);
// console.log(question.keys);
// console.log(question.values);
// console.log(question.entries);

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);


// //1.
// // console.log(gameEvents.values());
// const events = [...new Set(gameEvents.values())];

// console.log(events);

// //2.

// gameEvents.delete(64);

// //3.

// console.log(`An event, happened, on avarage, every ${90/gameEvents.size} minutes`);
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`An event, happened, on avarage, every ${time/gameEvents.size} minutes`);

// // 4.
// for (const [min,event] of gameEvents){
//     const half = min <= 45 ? 'FIRST' : 'SECOND';
//     console.log(`[${half}[HALF] ${min}: ${event}`);
// }

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);


// console.log(airline.length);
// console.log('b737'.length);

// console.log(airline.indexOf('r'));
// // console.log(airline.lastindexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4)); 
// console.log(airline.slice(4, 7)); 

// console.log(airline.slice(0, airline.indexOf('')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));


// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));
// console.log(airline.slice(-2));

// const checkMiddleSeat = function(seat){
//    //B AND E are middle seats
//    const s = seat.slice(-1);
//    if(s === 'B' || s === 'E')
//    console.log('You got the middle seat');
//    else console.log('You got lucky');
// }


//  checkMiddleSeat('11B');
//  checkMiddleSeat('23C');
//  checkMiddleSeat('3E');

//  console.log(new String('jonas'));

//  console.log(airline.toLowerCase());
//  console.log(airline.toUpperCase()); 


 //Fix capitalization in name
//  const passenger = 'j0nAS'; //Jonas
//  const passengerLower = passenger.toLowerCase();
//  const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
//  console.log(passengerCorrect);

//  // Comparing emails

//  const email = 'hello@jonas.io';
//  const loginEmail = '   Hello@Jonas.Io \n';

//  const lowerEmail = loginEmail.toLowerCase();
//  const trimmedEmail = lowerEmail.trim();
//  console.log(trimmedEmail);

//  const normalizedEmail = loginEmail.toLowerCase().trim();
//  console.log(normalizedEmail);
//  console.log(email === normalizedEmail);

//  //replacing
//  const priceGB = '288,97€';
//  const priceUS = priceGB.replace('€', '$'). replace(',', '.')
//  console.log(priceUS);

//  const announcement = 'All passengers come to barding door 23. Boarding door 23!'
//  console.log(announcement.replaceAll('door', 'gate'));
//  console.log(announcement.replaceAll(/door/g, 'gate'));

//  //Booleans
//  const plane = 'Airbus A320neo';
//  console.log(plane.includes('A320'));
//  console.log(plane.includes('Beo'));
//  console.log(plane.includes('An2'));
//  console.log(plane.includes('A32'));

//  if(plane.startsWith('Air3bus') && plane.endsWith('neo')){
//      console.log('Part of the nEW airbus family');

//  }else {
//     console.log('Not');
//  }

//  //Practice exercise 
//  const checkBaggage = function(items){
//     const baggage = items.toLowerCase();
//     if(baggage.includes('knife') || baggage.includes('gun')){
//         console.log('You are not allowed on board');
//         } else {
//             console.log('Welcome aboard!');
//         }
//  };
//  checkBaggage('i have a laptop, some Food and a pocket Knife');
//  checkBaggage('Socks and camera');
//  checkBaggage('Get some snacks and a gun for protection');

// SPLIT and join
// console.log('a+very+nice+string'.split('+'));
// console.log('Samo Goljat'.split(' '));

// const [firstName, lastName] = 'Samo Goljat'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function(name){
//     const names = name.split(' ');
//     const namesUpper = [];

//     for(const n of names){

//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
 


//     }
//     console.log(namesUpper.join(' '));
// }

// capitalizeName('jessica and smith davis')
// capitalizeName('jonas Schmedtmann')

// //Padding
// const message = 'Go to gate 23'
// console.log(message.padStart(25, '+').padEnd(35, '+'));
// console.log('Jonas'.padStart(25, '+').padEnd(35, '+'));

// const MaskCreditCard = function(number){
//     const str = number + '';
//     const last = str.slice(-4);
//     return last.padStart(str.length, '*')
// }
// 4
// console.log(MaskCreditCard(353243135315));
// console.log(MaskCreditCard('352350235023535325235'));

// //Repeat
// const message2 = 'Bad weather...All Departues Delayed...  ';
// console.log(message2.repeat(5));

// const planesInLine = function (n){
//     console.log(`There are ${n} planes in line ${'plane'.repeat(n)}`);
// }
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);



// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));


// document.querySelector('button').addEventListener('click', function(){
//     const text = document.querySelector('textarea').value;
//     const rows = text.split('\n');
    


//     for(const row of rows){
//         const [first, second] = row.toLowerCase().trim().split('_');
        
//         const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;

//           console.log(output.padEnd(20, '*'));
//     }
  
// });


/*THIS TEST DATA
underscore_case 
 first_name
 Some_Variable
  calculate_AGE
delayed_departure

*/


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0,3).toUpperCase()

  for(const flight of flights.split('+')){
      const [type, from, to, time] = (flight.split(';'));
      const output = `${type.startsWith('_Delayed') ? '!!' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':','h')})`.padEnd(36);
      console.log(output);
  }