// https://egghead.io/lessons/javascript-the-array-map-method?pl=learn-javascript-arrays-in-depth-dbe40331


// .map()

// import data
import * as data from '../data/data'



function getStockSymbols(stocks) {
  return stocks.map(function(stock) {
    return stock.symbol;
  })
}

var symbols = getStockSymbols(data.stocks)

console.log(JSON.stringify(symbols));



// Lets get Prices

function getPrices(data) {
  return data.map(function(item) {
    return item.price
  })
}

var price = getPrices(data.stocks)

console.log( price );

// Lets get volume

var getVolume = data => {
  return data.map( item => {
    return item.volume
  })
}

console.log( getVolume(data.stocks) );



// Get any item

var getAny = (data, node) => {
  return data.map( item => {
    return item[node]
  })
}

console.log( JSON.stringify(getAny(data.stocks, 'symbol')) );
