// // Remember, we're gonna use strict mode in all scripts now!
// "use strict";

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = temps[i];
//     if (curTemp < min) min = temps[i];
//   }
//   console.log(max, min);
//   return max - min;
// };

// // calcTempAmplitude([3, 7, 4, 23, 1]);
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// const calcTempAmplitudeNew = function (t1, t2) {

//     const temps = t1.concat(t2);
//     console.log(temps)

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = temps[i];
//     if (curTemp < min) min = temps[i];
//   }
//   console.log(max, min);
//   return max - min;
// };

// // calcTempAmplitude([3, 7, 4, 23, 1]);
// const amplitudeNew = calcTempAmplitudeNew([3,5,1],[9,0,5]);
// console.log(amplitudeNew);

// const measureKelvin = function(){
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',

//         //C FIX THE BUG
//         // value: Number(prompt('Degrees celsius:')),
//         value: 10,
//     }
//     // console.log(measurement);

//     //FIND THE BUG
//     console.table(measurement);
//     // console.log(measurement.value);
//     // console.warn(measurement.value);
//     // console.error(measurement.value);
//     const kelvin = measurement.value + 273;
//     return kelvin;
// }

// // A) identy the bug
// console.log(measureKelvin());

// //Using a debugger

// const calcTempAmplitudeBug = function (t1,t2) {
//     const temps = t1.concat(t2);
//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     debugger;

//     if (curTemp > max) max = temps[i];
//     if (curTemp < min) min = temps[i];
//   }
//   console.log(max, min);
//   return max - min;
// };

// // calcTempAmplitude([3, 7, 4, 23, 1]);
// const amplitudeBug = calcTempAmplitudeBug([3,5,1],[9,4,5]);
// //A) IDENTIFY
// console.log(amplitudeBug);

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]} degree celsius in ${i+1} days ... `;
//   }
//   console.log(str);
// };

// printForecast(data1);
// printForecast(data2);