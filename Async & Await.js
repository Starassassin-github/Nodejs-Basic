// Async & Await

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

// Async & Await

async function start(){
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
}

start()

// api picture (backend) -> frontend (ShowOnWeb)
// api (promise) -> (pendig) -> wait data (await) -> Showing        #1
// loading..... -> Showing                                          #2