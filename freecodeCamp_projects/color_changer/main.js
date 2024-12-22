let normal = document.querySelector(".normalmode");
let hex = document.querySelector(".hexmode");
const btn = document.querySelector(".button1");
const stop = document.querySelector(".button2");
const value = document.querySelector(".hex");

let isnormal = true;
let ishex = false;
let stopi;

const randomhexcolor = () => {
  const hexcolorarray = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "A",
    "B",
    "D",
    "C",
    "E",
    "F",
  ];
  let hexcolor = "#";
  for (let i = 0; i < 6; i++) {
    let randomcolor = Math.floor(Math.random() * 16);
    let color = hexcolorarray[randomcolor];
    hexcolor += color;
  }
  value.textContent = hexcolor;
  return hexcolor;
};

const randomnormalcolor = () => {
  const normalcolorarray = ["green", "red", "yellow", "pink", "blue"];
  let randomncolor = Math.floor(Math.random() * 5);
  let rnc = normalcolorarray[randomncolor];
  console.log(rnc);
  value.textContent = rnc;

  return rnc;
};

normal.addEventListener("click", () => {
  isnormal = true;
  ishex = false;
  console.log(isnormal, ishex);
});

hex.addEventListener("click", () => {
  isnormal = false;
  ishex = true;
  console.log(isnormal, ishex);
});
btn.addEventListener("click", () => {
  stopi = setInterval(() => {
    if (isnormal === true) {
      document.body.style.backgroundColor = randomnormalcolor();
    } else {
      document.body.style.backgroundColor = randomhexcolor();
    }
  }, 1000);
});

stop.addEventListener("click",()=>{
  clearInterval(stopi);
})
