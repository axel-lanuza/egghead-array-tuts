// https://egghead.io/lessons/javascript-chaining-the-array-map-and-filter-methods?pl=learn-javascript-arrays-in-depth-dbe40331


// Chain map and filter

import * as data from '../data/data'

var filteredStockSymbols =
  data.stocks.
    filter(function(item) {
      return item.price >= 150
    }).
    map(function(item) {
      return item.symbol
    })

filteredStockSymbols.forEach(function(symbol) {
  console.log( symbol );
})


// ES6

var filtered =
  data.stocks.
    filter( item => {
      return item.price >= 250
    }).
    map(item => {
      return item.symbol
    })

filtered.forEach( symbol => {
  console.log( symbol );
})
