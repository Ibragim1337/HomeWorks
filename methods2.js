// function customSetInterval(callback, interval) {
//   function execute() {
//     callback();
//     setTimeout(execute, interval);
//   }

//   setTimeout(execute, interval);
// }


// function myFunction() {
//   console.log("Hello, World!");
// }

// customSetInterval(myFunction, 1000); 


//----------------------------------------------------------------------------------------

// function printArrayElements(array) {
//   let index = 0;

//   let intervalId = setInterval(function() {
//     if (index < array.length) {
//       console.log(array[index]);
//       index++;
//     } else {
//       clearInterval(intervalId);
//     }
//   }, 1000);
// }

// let myArray = [1, 2, 3, 4, 5];
// printArrayElements(myArray);


//-----------------------------------------------------------

// function countdownTimer(interval, startNumber) {
//   let currentNumber = startNumber;

//   const intervalId = setInterval(() => {
//     if (currentNumber >= 0) {
//       console.log(currentNumber);
//       currentNumber--;
//     } else {
//       clearInterval(intervalId);
//     }
//   }, interval * 1000);
// }

// countdownTimer(1, 5);

//---------------------------------------------------------------