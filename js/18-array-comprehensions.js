// Array Comprehensions
// https://egghead.io/lessons/ecmascript-6-array-comprehensions


// NOTES - I can't get Array Comprehensions to run in babel gulp

let people = [
    {
        "firstName": "Melinda",
        "phone": "1-607-194-5530",
        "email": "dignissim.Maecenas.ornare@lacusAliquam.co.uk"
    },
    {
        "firstName": "Elizabeth",
        "phone": "1-155-446-1624",
        "email": "cursus.et.magna@nislsemconsequat.edu"
    },
    {
        "firstName": "Ferris",
        "phone": "1-871-927-1710",
        "email": "est@Vivamus.co.uk"
    },
    {
        "firstName": "Zephania",
        "phone": "1-581-440-7373",
        "email": "egestas.rhoncus@Donecest.ca"
    },
    {
        "firstName": "Melinda",
        "phone": "1-568-162-3621",
        "email": "montes.nascetur@sitamet.co.uk"
    }
]


let emails = [for({email} of people) email]

console.log( emails );


// let emails = [for({email, firstName} of people) if(firstName === "Melinda") email]
//
//
// console.log(emails);
//
//
//
// var nums = [1, 2, 3, 4, 5];
// var letters = ["a", "b", "c", "d", "e"];
//
// var battleship = [for(num of nums) [for(letter of letters) num + letter]];
//
// console.log(battleship);
