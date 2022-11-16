// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);



// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);
// console.log(javascriptIsFun);

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);
// console.log(String(23));
// console.log(String(23), 23);
// console.log('23' - '10' - 3);

// let n = '1' + 1;
// n = n -1;
// console.log(n);


// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('s'));
// console.log(Boolean({}));

// const money = 0;
// const string = '';
// if(string){
//     console.log("Dont spend it all ;)")
// } else {
//     console.log('You should get a job!');
// }

// let height;
// if (height){
//     console.log('YAY! Height is Defined');
// } else{
//     console.log ('Heigh is undefined');
// }
let bill;
entrybox = prompt('Enter the price');
bill = parseFloat(entrybox);
let tip1 = 0.15;
let tip2 = 0.2;
const tip = bill <= 300 && bill >= 50 ? bill * tip1 : bill * tip2;
console.log(typeof tip1);
console.log(`The whole value of receipt was ${bill+tip}, where the value of bill was ${bill}, from where tip was ${tip}, which is ${tip/bill*100 + '%'} of payed value`);
