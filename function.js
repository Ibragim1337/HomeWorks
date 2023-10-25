/* function log (message) {
  console.log(message);
}

function timer(ms, message) {
  setTimeout(log, ms, `From timer : ${message}`)
}

timer(1000, 'one'); */
//--------------------------------------------------------------

/* function log (message) {
  console.log(message);
}

function timer(ms, message) {
  setInterval(log, ms, `From timer : ${message}`)
}

timer(1000, 'one');
timer(1000, 'two');
timer(1000, 'three'); */

//------------------------------------------------
/* console.clear();

function log (message) {
  console.log(message);
}

function timer(ms, message) {
  const timerId = (setInterval(log, ms, message))
  setTimeout(function(){
    clearInterval(timerId);
  }, 5000)
}

timer(1000, 'one');
timer(1000, 'two');
timer(1000, 'three'); */

//-----------------------------------------------------------


function result(number) {
  if (number <= 1){
    return number;
  }
  return number + result(number - 1);
}

console.log(result(10));