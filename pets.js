const code = 5;

const fs = require('fs');

console.log(fs);
// var read = require('./pets.json');
//
//   console.log(read);

console.error('error #%d', code);
// Prints: error #5, to stderr
console.error('error', code);
// Prints: error 5, to stderr
