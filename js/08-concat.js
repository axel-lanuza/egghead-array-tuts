// https://egghead.io/lessons/javascript-javascript-array-methods-in-depth-concat?pl=learn-javascript-arrays-in-depth-dbe40331


// Array.prototype.concat()


var items = [1,2]

var newItems = items.concat(3,4, [5,6])

console.log( items );

console.log( newItems ); // [1, 2, 3, 4, 5, 6]

// Can't do nested arrays


var people = [
  {
    name: 'ben'
  },
  {
    name: 'minal'
  }
]

people.forEach( person => {
  console.log( person.name );
})


var people2 = [
  {
    name: 'amir'
  },
  {
    name: 'rajan'
  }
]

people
  .concat(people2)
  .forEach( person => {
    console.log( person.name );
  })

// Pretty cool
