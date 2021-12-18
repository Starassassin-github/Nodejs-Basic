// Blocking 
const fs = require('fs')

// read file input.txt
const data = fs.readFileSync('myFile/input.txt', 'utf-8')
console.log(data);
console.log("Ending");

// write file
const outputText =  `Hello Node.js\n${data}\nไฟล์ถูกเขียนเมื่อ ${new Date()}`
fs.writeFileSync("myFile/output.txt", outputText)
console.log("Finish writed!");