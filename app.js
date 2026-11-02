// let name = "Disha";
// console.log("Hello" +" "+ name);

const fs = require("fs");
fs.writeFileSync("data.txt","Hello Javascript");
console.log("File Created");

// Why can we do this?

// Because Node.js provides the File System API, which allows JavaScript to interact with files on the computer