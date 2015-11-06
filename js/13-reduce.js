// Array.prototype.reduce in JavaScript by example
// https://egghead.io/lessons/javascript-array-prototype-reduce-in-javascript-by-example

let numbers = [1,2,3,4,5]

console.clear()

numbers.reduce( (prev, current, index, array) => {
  console.log( { prev, current, index, array } )
  //console.log( JSON.stringify({ prev, current, index, array }) )
  return current
})


console.log(
  "Total Sum",
  numbers.reduce((prev, cur) => prev + cur)
 );


let people = [
  {
    name: 'ben',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'minal',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'amir',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'rajan',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'sidi',
    yearsExperience: 9,
    department: 'IT'
  }
]

function classifyExperience(employee) {
  let years = employee.yearsExperience

  if(years <= 1) return 'NOOB'
  if(yeas <= 5) return 'AM'
  if(years <= 10) return 'PRO'

  return 'EXPERT'
}

console.log(
  "All experience sum",
  people.reduce((sum, current) => sum + current.yearsExperience, 0)
);


let departmentExperienceSums = people.reduce((accumulator, current) => {
  let department = current.department
  if (!accumulator[department]) {
    accumulator[department] = 0
  }
  accumulator[department] += current.yearsExperience
  return accumulator
}, {})

console.log(
  "Sum each department's collective experience", departmentExperienceSums
 );
