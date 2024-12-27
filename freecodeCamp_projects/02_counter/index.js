const no = document.querySelector(".main-no");
const btns = document.querySelectorAll("button");
let count = 0;
no.textContent = count;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.className == "decrement") {
      count--;
      no.textContent = count;
    } else if (btn.className == "increment") {
      count++;
      no.textContent = count;
    } else {
      count = 0;
      no.textContent = count;
    }
    if (count === 0) {
      no.style.color = "white";
    } else if (count < 0) {
      no.style.color = "yellow";
    } else {
      no.style.color = "red";
    }
  });
});
