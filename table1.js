// Функция для создания таблицы
function createTable(rows, cols) {
  let table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
      let row = document.createElement("tr");

      for (let j = 0; j < cols; j++) {
          let cell = document.createElement("td");

        
          cell.textContent = "Row " + (i + 1) + ", Col " + (j + 1);

  
          row.appendChild(cell);
      }

      table.appendChild(row);
  }


  document.body.appendChild(table);

  return table; // Возвращаем таблицу
}

// Функция для добавления строки в конец таблицы
function addRow(table) {
  let newRow = table.insertRow(-1); // -1 вставляет строку в конец 
 
  for (let i = 0; i < table.rows[0].cells.length; i++) {
      let cell = newRow.insertCell(i);
      cell.textContent = "New Row, Col " + (i + 1);
  }
}

// Функция для добавления столбца в конец таблицы
function addColumn(table) {
  for (let i = 0; i < table.rows.length; i++) {
      let cell = table.rows[i].insertCell(-1); 
      cell.textContent = "Row " + (i + 1) + ", New Col";
  }
}

// Функция для удаления последней строки из таблицы
function deleteRow(table) {
  if (table.rows.length > 1) {
      table.deleteRow(-1); 
  } else {
      console.log("Cannot delete the last row.");
  }
}

// Функция для удаления последнего столбца из таблицы
function deleteColumn(table) {
  if (table.rows.length > 0 && table.rows[0].cells.length > 1) {
      for (let i = 0; i < table.rows.length; i++) {
          table.rows[i].deleteCell(-1); 
      }
  } else {
      console.log("Cannot delete the last column.");
  }
}


let myTable = createTable(5, 5);

addRow(myTable);
addColumn(myTable);
deleteRow(myTable);
deleteColumn(myTable);