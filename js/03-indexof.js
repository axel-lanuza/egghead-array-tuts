// https://egghead.io/lessons/javascript-javascript-array-methods-in-depth-indexof?pl=learn-javascript-arrays-in-depth-dbe40331

//indexOf()
// used to search an array for a particular value

var family = ['ben', 'minal', 'amir', 'rajan']
var amirExists = family.indexOf('amir') > -1

console.log( family.indexOf('amir') );

if (!amirExists) {
  family.push('amir')
}

console.log( amirExists );

function exists(name, arr) {
  return arr.indexOf(name) > -1
}


var test = exists('ben', family)
console.log( test);



// Using objects


var ben = {
  name: 'ben'
}
var minal = {
  name: 'minal'
}
var amir = {
  name: 'amir'
}


var fam2 = [ben, minal]

console.log( fam2.indexOf(ben) );




// Use indexOf to create a filter

var whitelist = ['.css', '.js']

var events = [
  {
    file: 'css/core.css'
  },
  {
    file: 'js/app.js'
  },
  {
    file: 'index.html'
  }
]

var filtered = events.filter(event => {
  var extension = require('path').extname(event.file)
  return whitelist.indexOf(extension) > -1
})

console.log( filtered );
