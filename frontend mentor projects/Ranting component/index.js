const stars = document.querySelector(".star")
const rating = document.querySelectorAll(".no")
const submit = document.querySelector(".submit")



rating.forEach((cuur,ei) =>{
    cuur.addEventListener("click",() =>{
        rating.forEach((ele,ii) =>{
            if(ei<=ii){
                console.log(ei)
            }else{
                console.log("done")
            }
        })
    })
})


