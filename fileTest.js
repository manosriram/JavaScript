const fs = require("fs");

fs.open("test.txt", "a", (err, fd) => {
  if (err) throw err;

  fs.appendFile(fd, "Hey there from ES6..", "utf8", err => {
    fs.close(fd, err => {
      if (err) throw err;
    });
    if (err) throw err;
  });
});

fs.copyFile("test.txt", "destination.txt", err => {
  if (err) throw err;
  console.log("File Copied!!");
});

fs.chmod("test.txt", 0o765, err => {
  console.log("Permission Changed to Read Only.");
});
