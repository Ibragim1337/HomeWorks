/* console.clear();

const titles = ['Заголовок 1', 'Заголовок 2', 'Заголовок 344444444'];
const pages = [10, 20, 24234];

// создается цикл который который будет выполнятся для каждого элемента массива

for (let i = 0; i < titles.length; i++)  {
  const title = titles[i]; // в переменной title хранится название главы
  const page = pages[i].toString(); // в page хранится номер страницы и при помощи toString переводим его в строку 
  const totalLength = title.length + page.length; // в totalLength сумируется длинна заголовка и номер страницы 


  // если суммарно длинна больше 20 символов
  if (totalLength > 20) {
    const titleLength = 20 - page.length - 1; // разница между 20 и длинной страницы и отнимаем 1 для учитывания точки
    const truncatedTitle = title.slice(0, titleLength); // разделяем при помощи slice 
    console.log(`${truncatedTitle}.${page}`);
  } else {
    // если суммарно длинна загаловка и номера страницы не превышает 20, то создается строка dots и в количестве разницы 20 от длинны 
    // заголовка и повторяет эти точки 
  
    const dots = '.'.repeat(20 - totalLength);
    console.log(`${title}${dots}${page}`); // выводим в консоль
  }
}
 */

//---------------------------------------2 задание-------------------------------------------------------

/* const obj = {
  name: 'Alex',
  surName: 'Max',
  AGE: 40
};

while (true) {
  const promptInput = prompt('Введите поле:');
  const lowerCaseInput = promptInput.toLowerCase(); // перенимает введенный промпт и переводит его в нижний регистр

  let searchIncorrects = false;

  for (const key in obj) { // цикл по объекту 
    if (key.toLowerCase() === lowerCaseInput) { // если поля в объекте преобразованные в нижний регистр одинаковы с тем что ввели
      searchIncorrects = true; // тогда searchIncorrect становится true
      break; //остонавливаем цикл 
    }
  }

  console.log(promptInput, searchIncorrects);
} */

//----------------------------------------3 задание --------------------------------------------------------


while (true) {
  const promptInput = prompt('Введите строчку:');
  
  let reverseStr = '';
  for (let i = 0; i < promptInput.length; i++) {
    const char = promptInput[i]; // переменная chaar принимает каждую букву введенную в prompt
    // запускается if else где меняем верхнйи регистр на нижний и наорборот и добавляем его в строку переменнной reverseStr
    if (char === char.toUpperCase()) {
      reverseStr += char.toLowerCase();
    } else {
      reverseStr += char.toUpperCase();
    }
  }

  console.log(promptInput, reverseStr);
}