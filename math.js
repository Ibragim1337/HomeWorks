// function performOperation(operation) {
//   if (typeof operation === 'function') {
//     return operation();
//   } else {
//     return new Error('не является функцией');
//   }
// }

// const result = performOperation(Math.PI);

// if (result instanceof Error) {
//   console.error(result.message);
// } else {
//   console.log(result);
// }

//---------------------------------------------


let multiplyResult = 1;
let divisionResult = 1;
let subtractResult = 0;


function multiply(value) {
  multiplyResult *= value;
  return multiplyResult;
}


function division(value) {
  if (value !== 0) {
    divisionResult /= value;
    return divisionResult;
  } else {
    return new Error('Делить на ноль нельзя');
  }
}


function subtract(value) {
  subtractResult -= value;
  return subtractResult;
}


console.log(multiply(2));     
console.log(division(4));     
console.log(subtract(3));     
