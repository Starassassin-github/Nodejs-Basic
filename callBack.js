// // callback function

// function calcualate(x,y,callBack){
//     console.log("Calculating.....");
//     setTimeout(() => {
//         const sum =  x + y
//         callBack(sum)
//     }, 3000)
    
// }

// // callBack function
// calcualate(100,50,function(result){
//     console.log(`summary = ${result}`);
// })


// program download file

const url1 = "fluke.dev/file1.json"
const url2 = "fluke.dev/file2.json"
const url3 = "fluke.dev/file3.json"
const url4 = "fluke.dev/file4.json"
const url5 = "fluke.dev/file5.json"

function downloading(url,callBack){
    console.log(`loading... ${url}`)
    setTimeout(() => {
        callBack(url)
    }, 3000);
}

downloading(url1,function(result){
    console.log(`Download ${result} Complete!`)
    downloading(url2,function(result){
        console.log(`Download ${result} Complete!`)
        downloading(url3,function(result){
            console.log(`Download ${result} Complete!`)
        })
    })
})
