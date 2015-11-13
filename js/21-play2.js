import * as data from '../data/data'

// data.nums
// data.stocks
// data.exchanges
// data.movies


// Get Year from Object using Reduce
var year = data.movies.reduce( (acc, value) => {
  return acc.concat(value.year)
}, [] )

console.log( year );


// Get Cast from Object usind Reduce
var cast = data.movies.reduce( (acc, value) => {
  return acc.concat(value.cast)
}, [] )

console.log( cast );



// Get Year from Object usine Reduce and then MAP
var get = data.movies.map( item => item.year)

console.log( get );
