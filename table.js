function createTable(n, m) {
  
  let table = document.createElement('table');
  table.border = '1';

  
  for (let i = 0; i < n; i++) {
      let row = table.insertRow();

      for (let j = 0; j < m; j++) {
          let cell = row.insertCell();
          cell.textContent = 'Строка ' + (i + 1) + ' Ячейка ' + (j + 1);
      }
  }

  document.getElementById('container').appendChild(table);
}


createTable(10, 10);
