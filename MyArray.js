// Самому было сложно сделать, решение было найдено в интернете

function MyArray() {
  this.length = 0;

  for (let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
    this.length++;
  }

  this.shift = function() {
    if (this.length === 0) {
      return undefined; // Если массив пуст, возвращаем undefined
    }

    const firstElement = this[0];

    // Элементы все сдвигаются в лево
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }

    // Уменьшается длина массива и удаляется последний элемент
    delete this[this.length - 1];
    this.length--;

    return firstElement;
  };


  this.unshift = function() {
    const numArgs = arguments.length;

    // Сдвигается все элементы вправо
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + numArgs] = this[i];
    }

    // Добавляем новые элементы в начало
    for (let j = 0; j < numArgs; j++) {
      this[j] = arguments[j];
    }

    // Обновляем длину массива
    this.length += numArgs;

    return this.length;
  };
}

// Пример использования
const myArr = new MyArray(1, 2, 3);
console.log(myArr);

const shiftedElement = myArr.shift();
console.log(shiftedElement); 
console.log(myArr); 

const newLength = myArr.unshift(5, 6);
console.log(newLength);
console.log(myArr); 
