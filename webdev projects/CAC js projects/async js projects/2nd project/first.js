new Promise( (resolve,reject) => {
    setTimeout(function(){
        console.log("promise");
        resolve()
    },2000)
    setTimeout(function(){
        console.log("promise");
        reject()
    },2000)
}).then(() =>{
    console.log("then");
    
}).catch(() =>{
    console.log("error")
})

console.log("ayush");
