const people = [
  {
    img: "https://via.placeholder.com/150/FF5733/FFFFFF?text=John",
    name: "John Doe",
    job: "Software Engineer",
    info: "John is a skilled programmer specializing in web development. \nHe enjoys solving complex problems and learning new technologies. \nIn his free time, he contributes to open-source projects.",
  },
  {
    img: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Jane",
    name: "Jane Smith",
    job: "Graphic Designer",
    info: "Jane has a keen eye for design and aesthetics. \nShe creates visually stunning graphics for brands worldwide. \nHer hobbies include photography and painting.",
  },
  {
    img: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Michael",
    name: "Michael Brown",
    job: "Data Analyst",
    info: "Michael excels at turning raw data into actionable insights. \nHe is passionate about statistics and machine learning. \nOutside work, he enjoys cycling and hiking.",
  },
  {
    img: "https://via.placeholder.com/150/FFFF33/000000?text=Emily",
    name: "Emily Davis",
    job: "Marketing Specialist",
    info: "Emily develops creative marketing strategies for startups. \nShe is known for her innovative social media campaigns. \nShe loves traveling and exploring new cultures.",
  },
  {
    img: "https://via.placeholder.com/150/FF33FF/FFFFFF?text=Chris",
    name: "Chris Wilson",
    job: "Product Manager",
    info: "Chris has a knack for managing cross-functional teams. \nHe ensures timely delivery of high-quality products. \nWhen not working, he enjoys reading and gaming.",
  },
];

const img = document.querySelector(".img");
let fname = document.querySelector(".name");
const job = document.querySelector(".job");
const info = document.querySelector(".info");
const back = document.querySelector(".back");
const front = document.querySelector(".front");
const random = document.querySelector(".random");
let curr = 0;

let add = () => {
  curr++;
  return curr;
};
let randomno = () => {
  return Math.floor(Math.random() * 5);
};
img.src = people[curr].img;
fname.textContent = people[curr].name;
job.textContent = people[curr].job;
info.textContent = people[curr].info;
front.addEventListener("click", () => {
  add();
  if (curr === 5) {
    curr = 0;
  }
  fname.textContent = people[curr].name;
  job.textContent = people[curr].job;
  info.textContent = people[curr].info;
});
random.addEventListener("click", () => {
  curr = randomno();
  fname.textContent = people[curr].name;
  job.textContent = people[curr].job;
  info.textContent = people[curr].info;
  console.log(curr);
});
