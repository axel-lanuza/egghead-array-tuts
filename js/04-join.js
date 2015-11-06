//https://egghead.io/lessons/javascript-javascript-array-methods-in-depth-join?pl=learn-javascript-arrays-in-depth-dbe40331


// Array.prototype.join()


var names = ['ben', 'minal']

console.log( names.join(' ') );



var help = [
  'Usage',
  '    foo-app <input>'
]

if (process.argv[2] === 'help') {
  console.log( help.join('\n') );
}


// now run in terminal `node js/04-join.js help`




// chain it too!


var name = 'ben sheaprd'

var upper = name.split(' ')
  .map(x => x.charAt(0).toUpperCase() + x.slice(1))
  .join(' ')

console.log( upper );
