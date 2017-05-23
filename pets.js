const code = 5;

const fs = require('fs');

var node = process.argv[0];
var file = process.argv[1];
var cmd = process.argv[2];
var index = process.argv[3];

if (cmd === 'read') {
  fs.readFile('./pets.json', 'utf8', function(err, data) {
    if (err) {
      throw err;
    }

    var pets = JSON.parse(data);
      if(index > pets.length - 1) {
        console.error(`Usage: ${node} ${file} read ${index}`);
        process.exit(2);
      }
    console.log(pets[index]);
  });
}
else {
  console.error(`Usage: ${node} ${file} read`);
  process.exit(1);
}



// console.log(data);
