// https://egghead.io/lessons/javascript-the-array-filter-method?pl=learn-javascript-arrays-in-depth-dbe40331


// .filter()

import * as data from '../data/data'

function getStocksOver(stocks, minPrice) {
  return stocks.filter(function(stock) {
    return stock.price >= minPrice;
  })
}

var expensiveStocks = getStocksOver(data.stocks, 150.00)

console.log( JSON.stringify(expensiveStocks) );


// ES6

var getStocksAbove = (stocksArray, startingPrice) => {
  return stocksArray.filter( item => {
    return item.price >= startingPrice
  })
}

console.log( JSON.stringify(getStocksAbove(data.stocks, 250)) );
