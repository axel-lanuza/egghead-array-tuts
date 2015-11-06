//https://egghead.io/lessons/javascript-javascript-array-methods-in-depth-slice


var items = [1,2,3,4,5]

// We can get a Shallow copy using slice()
var copy = items.slice()


copy.push(6)

copy[0] = 100

console.log( items );
console.log( copy );


//
var person = { name: 'Ben'}

var item2 = [1, person]
var copy2 = item2.slice()

console.log( item2 );
console.log( copy2 );



// Start and end
var items3 = [1,2,3,4,5]
var copy3 = items.slice(3,4)

console.log( copy3 );


// Making some filters

var person2 = {
  name: 'ben-jamin'
}

var filters = {
  'deslugify': x => x.replace('-', ' '),
  'uppercase': x => x.toUpperCase()
}

var input = 'name | deslugify | uppercase' // BEN JAMIN

var sections = input.split('|').map(x => x.trim()) // ["name", "deslugify", "uppercase"]

console.log( sections );

var ref = person2[sections[0]]

console.log( ref );


var output = sections
  .slice(1)
  .reduce((prev, next) => {
    if (filters[next]) {
      return filters[next].call(null, prev)
    }
    return prev
  }, ref)
  // Set a reference, so the first time ithe reduction runs, ref is equal to person.name

  // Then each time it runs, next is equal to the next item in the input


console.log( output );




// Let's make some more filters
