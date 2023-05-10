const fs = require("fs");

function cb(err, data) {
  if (!err) {
    console.log(data);
  } else {
    console.log(err);
  }
}

fs.readFile("q1.html", "utf-8", cb);
