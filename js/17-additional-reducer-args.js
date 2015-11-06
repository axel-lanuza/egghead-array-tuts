// Advanced Reduce: Additional Reducer Arguments
// https://egghead.io/lessons/javascript-advanced-reduce-additional-reducer-arguments

function reducer(acc, value, index, array) {
  var intermediaryValue = acc + value

  if (index === array.length -1) {
    return intermediaryValue / array.length
  }

  //return acc + value
  return intermediaryValue
}

var data = [1,2,3,4,5]

var sum = data.reduce(reducer, 0)

console.log( sum );
