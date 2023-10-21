//----------------1 задание ------------------

// const arr = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < arr.length; ++i) {
//   arr[i] = arr.length - i;
// }

// console.log(arr);

//--------------- 2 задание --------------------

// const arr = [1, 2, 3];
// const element = 'begin';

// for (let i = arr.length; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = element;

// console.log(arr);

//-------------- 3 задание --------------------

const Object = {
  field1: 'value 1',
  field2: 'value2',
  field3: 'value3',
};

const haveThisField = [];
const notHaveThisField = [];

for (let i = 1; i <= 10; i++) {
  const userInput = prompt(`Попытка ${i}: Введите название поля:`);
  
  let found = false;
  for (let fieldName in Object) {
    if (fieldName === userInput) {
      haveThisField[i - 1] = userInput;
      found = true;
      break;
    }
  }
  
  if (!found) {
    notHaveThisField[i - 1] = userInput;
  }
}

haveThisField.length = notHaveThisField.length = 10;

console.log('Поля, которые в объекте:', haveThisField);
console.log('Поля, которые не в объекте:', notHaveThisField);
