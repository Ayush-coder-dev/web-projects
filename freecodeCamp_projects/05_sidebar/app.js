const show = document.querySelector(".sidebar-show");
const fbtn = document.querySelector("#logo");
const sbtn = document.querySelector("#btn");

let isbtn = true;

fbtn.addEventListener("click", () => {
  if (isbtn) {
    show.classList.add("hide");
    sbtn.classList.remove("hide");
  }
});

sbtn.addEventListener("click", () => {
  show.classList.remove("hide");
  sbtn.classList.add("hide");
});
