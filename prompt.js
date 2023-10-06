let number;
let attempts = 3; 
// while (!(number >= 0 || number < 0) && attempts > 0) {
//   --attempts;

//   number = Number(prompt('Enter number:'));
// }

// if (attempts === 0) {
//   alert('You blocked');
// } else {
//   alert('Congrats');
// }


do {
  number = Number(prompt(`Enter number:`))
  --attempts;
} while (!(number >= 0 || number < 0) && attempts > 0);

if (attempts === 0) {
  alert(`You  blocked`);
}
 else {
  alert(`Congrats`)
}