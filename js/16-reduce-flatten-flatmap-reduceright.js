// Advanced Reduce: Flatten, Flatmap and ReduceRight
// https://egghead.io/lessons/javascript-advanced-reduce-flatten-flatmap-and-reduceright



var data = [[1,2,3], [4,5,6], [7,8,9]]

// Flatten is when you take a list of lists and return a single list

var flatData = data.reduce(function(acc, value) {

  return acc.concat(value)
}, [])

console.log( flatData );



import {input as movies} from '../data/data'




var stars = movies.reduce(function(acc, value) {
  value.cast.forEach(function(star) {
    if (acc.indexOf(star) === -1) {
      acc.push(star);
    }
  });

  return acc;
}, []);


console.log( JSON.stringify(stars) );

var data = [1, 2, 3, 4, "5"];
var sum = data.reduceRight(function(acc, value, index) {
  console.log(index);
  return acc + value;
}, 0);

console.log(sum);
