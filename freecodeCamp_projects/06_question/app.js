const anss = document.querySelectorAll(".ans");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //added event listener to every btn
    // console.log(e.target.offsetParent.nextElementSibling);
    const currans = e.target.offsetParent.nextElementSibling; //to get current ans
    console.log(e);
    currans.classList.toggle("hidden"); //at the end it toggles

    anss.forEach((item) => {
      //to get every item means every anss
      if (item.classList != currans.classList) {
        //check if both are equal
        item.classList.add("hidden"); //if cuuans is not equal to item ans or all other ans hidden class is added
        console.log(item);
      }
    });
  });
});
