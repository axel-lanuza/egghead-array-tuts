// Array.prototype.sort();

import * as data from '../data/data'


console.log(data.names.sort() );

console.log(data.names.sort().reverse() );

console.log( data.nums.sort( (a, b) => a - b ) );


var lessons = [
    {
        title: 'Javascript Array methods in depth - concat',
        views: 1000
    },
    {
        title: 'Javascript Array methods in depth - slice',
        views: 1050
    },
    {
        title: 'Javascript Array methods in depth - join',
        views: 1025
    }
];

var list = lessons
    .sort((a, b) => b.views - a.views)
    .map(x => `    <li>${x.title} (${x.views})</li>`)
    .join('\n');

var output = `<ul>\n${list}\n</ul>`;


var container = document.createElement('div')

container.innerHTML = output

document.body.appendChild(container)
