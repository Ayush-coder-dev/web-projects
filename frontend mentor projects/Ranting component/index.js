const stars = document.querySelector(".star");
const rating = document.querySelectorAll(".no");
const submit = document.querySelector(".submit");













let no;

rating.forEach((no,index)=>{
    no.addEventListener("click",()=> changecolor(index))
})

function changecolor (myno) {

    rating.forEach((e,i)=>{
        if(myno <= i){
            no.classList.add("bgo")
        }else{
            no.classList.remove("bgo")
        }
    })
}
