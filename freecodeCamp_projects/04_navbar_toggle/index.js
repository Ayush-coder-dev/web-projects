const mainclass = document.querySelector("ul");
const body = document.querySelector("body");
const btn = document.querySelector(".btn");
let ison;
let isallow;
window.addEventListener("DOMContentLoaded",()=>{
    if (window.innerWidth < 600) {
        console.log(window.innerWidth);
        ison = true;
        isallow = true;
      } else {
        ison = false;
        isallow = false;
      }
      console.log(ison);
})
// window.addEventListener("resize", () => {
//   if (window.innerWidth < 600 && isallow===true) {
//     console.log(window.innerWidth);
//     ison = true;
//     isallow = false
//   } else if(window.innerWidth > 600 && isallow===false){
//     ison = false;
//     isallow = true;
//   }
//   console.log(ison);
// });



  btn.addEventListener("click", () => {
    if (mainclass.classList.contains("hide") ) {
      mainclass.classList.add("show");
      mainclass.classList.remove("hide");
      console.log("abc");
    } else {
      mainclass.classList.add("hide");
      mainclass.classList.remove("show");
    }
  });
// } else {
//     btn.removeEventListener("click", () => {
//         if (mainclass.classList.contains("hide") ) {
//           mainclass.classList.add("show");
//           mainclass.classList.remove("hide");
//           console.log("abc");
//         } else {
//           mainclass.classList.add("hide");
//           mainclass.classList.remove("show");
//         }
//       }); 
// }
