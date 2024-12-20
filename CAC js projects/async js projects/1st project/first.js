const body = document.querySelector("body");
const start = document.querySelector("#start"); 
const stop = document.querySelector("#stop");
let randomcolor = () =>{
    const hex = "1234567890ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        
        let random = (Math.floor(Math.random()*16));
        let randomno = hex[random];
        color += randomno;
    }
    return color;
} ; 
let interval;
let changecolor = () =>{
    if(!interval){      //production level  code more compatible
        interval = setInterval(() => {
            body.style.backgroundColor = randomcolor();
            
        }, 1000);
    }
    
}

let stopcolor = () =>{
    clearInterval(interval);
    interval = null;  //used to not override value , after this 
}

start.addEventListener("click",changecolor);
stop.addEventListener("click",stopcolor);










