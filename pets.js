const code = 5;

const fs = require('fs');

var node = process.argv[0];
var file = process.argv[1];
var cmd = process.argv[2];

if (cmd === 'read') {
  fs.readFile(guestsPath, 'utf8', function(err, data) {
    if (err) {
      throw err;
    }

    var guests = JSON.parse(data);

    console.log(guests);
  });
}
else {
//   console.error('error #%d', code);
//   // Prints: error #5, to stderr
//   console.error('error', code);
//   // Prints: error 5, to stderr
  console.error(`Usage: ${node} ${file} read`);
  process.exit(1);
}



// console.log(data);
