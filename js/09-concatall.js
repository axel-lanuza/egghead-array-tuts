// https://egghead.io/lessons/javascript-create-an-array-concatall-method?pl=learn-javascript-arrays-in-depth-dbe40331


// ConcatAll

// working with nested data scructures so we  can FLATTEN arrays


import * as data from '../data/data'

data.exchanges.forEach( item => {
  item.forEach( i => {
    console.log( JSON.stringify(item) );
  })
})



Array.prototype.concatAll = function() {
  var results = [];

  this.forEach(function(subArray) {
    subArray.forEach(function(item) {
      results.push(item);
    });
  });

  return results;
};


var stocks =  data.exchanges.concatAll();

stocks.forEach( stock => {
  console.log(JSON.stringify(stock));
});
