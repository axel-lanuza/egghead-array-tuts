// https://egghead.io/lessons/javascript-introducing-reduce-reducing-an-array-into-an-object?pl=learn-javascript-arrays-in-depth-dbe40331


// reduce array to object



//see CONSOLE!
var votes = [
  "angular",
  "angular",
  "react",
  "react",
  "react",
  "angular",
  "ember",
  "react",
  "vanilla",
  "riot"
];


// How can I turn this arry in to an object?
// Let's use reduce


// Let's start by creating an accumulator
var initialValue = {}

// Let's make a reducer
// Tally is whatever got returned last time reducer was run. Except in the first run with tally is equal to the initialValue

var reducer = function(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1
  } else {
    tally[vote] = tally[vote] + 1
  }

  // return your accumulator
  return tally
}

var result = votes.reduce(reducer, initialValue)

console.log( result );





// I need to revisit this



// Tried differently
var Votes = votes.reduce(reducer, {})

console.log( Votes );




// Doing it all at once
// Defininf the Accumulator inside the reduce function

var V = votes.reduce( (acc, value) => {
  if (!acc[value]) {
    acc[value] = 1
  } else {
    acc[value] = acc[value] + 1
  }

  // return your accumulator
  return acc
}, {} )


console.log( V );




// Reworded for the hell of it. Not sure if this is a good idea or not.
var vv = votes.reduce( (votes, vote) => {
  if (!votes[vote]) {
    votes[vote] = 1
  } else {
    votes[vote] = votes[vote] + 1
  }

  // return your accumulator
  return votes
}, {} )


console.log( vv );
