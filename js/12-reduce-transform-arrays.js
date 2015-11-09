// Introducing Reduce: Transforming Arrays Functionally
// https://egghead.io/lessons/javascript-introducing-reduce-transforming-arrays-functionally

var data = [15, 3, 20];

// Need an initial number

var reducer = function(accumulator, item) {
  return accumulator + item
}

var initialValue = 0

var total = data.reduce(reducer, initialValue)

console.log( `The sum is ${total}` );
