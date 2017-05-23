const code = 5;

// if(read) {
var read = require('./pets.json');
  // var read = JSON.parse('pets.json');
  console.log(read);
// }
console.error('error #%d', code);
// Prints: error #5, to stderr
console.error('error', code);
// Prints: error 5, to stderr
