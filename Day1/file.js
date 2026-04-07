const fs = require("fs");

// Write file
fs.writeFileSync("test.txt", "Hello from Node.js");

// Read file
const data = fs.readFileSync("test.txt", "utf-8");
console.log("File Content:", data);
