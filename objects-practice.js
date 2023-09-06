"use strict"
// #1
let obj = {x: 1, y: 2, z: 3};
console.log(obj['x']); // previous code: console.log(obj[x]);

// #2
let obj2 = {x: 1, y: 2, z: 3};
let key = 'x';

console.log(obj2[key]); // previous code: console.log(obj2.key);

// #3
let obj3 = {x: 1, y: 2, z: 3};
let sum = obj3.x + obj3.y + obj3.x; // previous code: let sum = obj3[x] + obj3[y] + obj3[x];

console.log(sum);

// #4
let obj4 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj4).length); // previous code: console.log(obj4.length);