const fs = require('fs');


function reader(path) {
 

  let u = fs.readFileSync(path);
  let users = JSON.parse(u);
  return users
}

module.exports = reader