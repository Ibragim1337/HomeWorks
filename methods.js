/* console.clear();

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrCheck = Object.keys(arr);

const randomElement = Math.round(Math.random() * arr.length); // Создаем переменную которая принимает в себя следущее значение
// для начала прописываем метод math.random и задаем ему длинну нашего массива
// после этого мы округляем наше число при помощи метода math.round (округляет число в зависимости от его значения после запятой, 
// если больше половины то округляет вверх, если меньше то вниз)

const arrRandom = arr[randomElement];

if (arr.length === 0) {
  console.log("Массив пустой!")
} else {
  console.log(arrRandom);
} */

//----------------------------------------2 задание -------------------------------------------

/* console.clear();

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 99];
let maxNumber = -Infinity;

if (arr.length === 0) {
  maxNumber = -Infinity;
} else {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }
}

console.log(maxNumber); */

// ---------------------------------- 3 задание ----------------------------------------------

/* const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const stringLength = 10;
let randomString = '';

for (const symbol of symbols) {
  const randomIndex = Math.round(Math.random() * symbols.length);
  randomString += symbols[randomIndex];
  if (randomString.length === stringLength) {
    break;
  }
}

console.log(randomString); */

//---------------------------------4 задание -------------------------------------------------

const year = parseInt(prompt("Введите год:"));
const month = parseInt(prompt("Введите месяц (1-12):"));

let daysInMonth;

if (month < 1 || month > 12) {
  console.log("Некорректный месяц. Введите значение от 1 до 12.");
} else {
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    daysInMonth = 30;
  } else if (month === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      daysInMonth = 29;
    } else {
      daysInMonth = 28;
    }
  } else {
    daysInMonth = 31;
  }

  console.log(`В месяце ${month} года ${year} ${daysInMonth} дней.`);
}






