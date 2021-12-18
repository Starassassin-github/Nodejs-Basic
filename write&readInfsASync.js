// Non-Blocking
const fs = require('fs')

// read file input.txt
fs.readFile("myFile/input.txt", 'utf-8',(err,data)=>{
    if (err) return console.log("Error", err)
    const outputText = `Hello Node.js\n${data}\nไฟล์ถูกเขียนเมื่อ${new Date()}`
    fs.writeFile("myFile/output.txt", outputText, err=>{
        if (err) return console.log("Error", err)
        console.log("Writting Finish!");
    })
})
console.log("Finish!");