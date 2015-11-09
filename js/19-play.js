import * as data from '../data/data'

// data.nums
// data.stocks
// data.exchanges
// data.input

//forEach

var arrFE = (arr, multiplier) => {
  let res = []
  arr.forEach( item => {
    res.push(item * multiplier)
  })
  return res
}

console.log( arrFE(data.nums, 2) );


var stockItem = (arr, key) => {
  let res = []
  arr.forEach( item => {
    res.push( item[key] )
  })
  return res
}

console.log( stockItem(data.stocks, 'symbol') );













//map

var arrM = data.nums.map( (item) => item * 3)

console.log( arrM );


var stockPrice = data.stocks.map( (item) => {
  return item.price
} )

console.log( stockPrice );







//filter



var numFilter = data.nums.filter( item => {
  return item > 5
})

console.log( numFilter );



var numFilter2 = (arr, min) => {
  return arr.filter( item => {
    return item > min
  })
}

console.log( numFilter2(data.nums, 8) );




// Using reduce to filter array
var numFilterReduce = data.nums.reduce( (acc, value) => {
  if (value > 2) {
    acc.push(value)
  }
  return acc
}, [])

console.log( numFilterReduce );




// not working yet
// might be a bad idea to try it this way

var f2 = data.movies.reduce((acc, val, index) => {
  //console.log( 'hi' );
   //console.log( val.year );
   //return
  //  var x = []
  //  x.push([0].val.year)
  //  return x
  console.log( val.year );
},0)

console.log( f2 );


var fm = data.movies.map(item => item.year)

console.log( fm );










//reduce

var reducer = (acc, item) => acc + item
var initialValue = 0

var total = data.nums.reduce(reducer, initialValue)

console.log( total );




var total2 = data.nums.reduce( (acc, value) => {
  return  acc + value
}, 0)


console.log( total2 );
