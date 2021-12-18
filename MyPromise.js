// Build Promise

const url1 = "fluke.dev/file1.json"
const url2 = "fluke.dev/file2.json"
const url3 = "fluke.dev/file3.json"
const url4 = "fluke.dev/file4.json"
const url5 = "fluke.dev/file5.json"
const connect = true    // check for connect

function downloading(url) {
    return new Promise(function(resolve,reject){
        console.log(`Downloading a file from ${url}`);
        setTimeout(()=>{
            if(connect){
                resolve(`Loaded ${url} finish!`);
            } else {
                reject("Error!");
            }
        },3000)
    })
}

/*  Promise Hell
downloading(url1).then(function(result){
    console.log(result);
    downloading(url2).then(function(result){
        console.log(result);
        downloading(url3).then(function(result){
            console.log(result);
        })
    })
})
*/

/*  Using Promise
downloading(url1).then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
}).finally(()=>{
    console.log("Ending Process");
})
*/

// Promise then
downloading(url1)
.then(function(result){
    console.log(result);
    return downloading(url2)
}).then(function(result){
    console.log(result);
    return downloading(url3)
}).then(function(result){
    console.log(result);
    return downloading(url4)
})