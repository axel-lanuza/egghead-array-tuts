// Introducing Reduce: Common Patterns
// https://egghead.io/lessons/javascript-introducing-reduce-common-patterns


var data = [1,2,3]
var doubled = data.reduce(function(acc, value) {
  acc.push(value * 2)
  return acc
}, [])

console.log( "My doubled data:", doubled );


// This is just like a map()
//
var doubleMapped = data.map(function(item) {
  return item * 2
})

console.log( "My doubled data:", doubleMapped );


// forEach
var dfe = function(arr) {
  var result = []
  arr.forEach(function(item) {
    result.push(item * 2)
  })
  return result
}

console.log( "My doubled forEach Data:", dfe(data) );





// Just get even numbers using reduce
var data2 = [1,2,3,4,5,6]

var evens = data2.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value)
  }
  return acc
}, [])

console.log( evens );

// Get even numbers using filter
var evenFilter = data2.filter(function(item) {
  return item % 2 === 0
})

console.log( evenFilter );


// For HUGE arrays, Reduce is faster than running FIlter and Map methods.
// Reduce goes over the array once, while Filter goes once and then Map has to follow after that







// var data = [1, 2, 3];
// var doubled = data.reduce(function(acc, value) {
//   acc.push(value * 2);
//
//   return acc;
// }, []);
//
// var doubleMapped = data.map(function(item) {
//   return item * 2;
// });
//
// var data2 = [1, 2, 3, 4, 5, 6];
// var evens = data2.reduce(function(acc, value) {
//   if (value % 2 === 0) {
//     acc.push(value);
//   }
//
//   return acc;
// }, []);
//
// var evenFiltered = data2.filter(function(item) {
//   return (item % 2 === 0);
// });
//
// var filterMapped = data2.filter(function(value) {
//   return value % 2 === 0;
// }).map(function(value) {
//   return value * 2;
// });
//
// var bigData = [];
// for (var i = 0; i < 1000000; i++) {
//   bigData[i] = i;
// }
//
// // console.time('bigData');
// var filterMappedBigData = bigData.filter(function(value) {
//   return value % 2 === 0;
// }).map(function(value) {
//   return value * 2;
// });
// // console.timeEnd('bigData');
//
// // console.time('bigDataReduce');
// var reducedBigData = bigData.reduce(function(acc, value) {
//   if (value % 2 === 0) {
//     acc.push(value * 2);
//   }
//   return acc;
// }, []);
// // console.timeEnd('bigDataReduce');
