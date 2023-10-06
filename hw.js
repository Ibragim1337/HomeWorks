// Вариант с не отрицатетельными числами

// let n = 7;
// let m = 7;
// let limit = 4;

// main: for(let i = 0; i <= n; i++) {
//   for(let k = 0; k <= m; k++){
//     if (limit === 0){
//       break main;
//     }
//       limit--;
//   console.log(i, k)
//   }
// }


// Вариант с отрицательными числами 

let n = -7;
let m = -7;
let limit = 20;

main: for(let i = 0; i >= n; i--) {
  for(let k = 0; k >= m; k--){
    if (limit === 0){
      break main;
    }
    limit--;
    console.log(i, k)
  }
}
