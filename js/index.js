// Your code goes here

const button = document.querySelectorAll(".btn");
const headlines = document.querySelectorAll("h2");
const header = document.querySelector(".main-navigation");
const navBar = document.querySelectorAll(".nav");
const intro = document.querySelector(".intro p");
const bus = document.querySelector(".intro img");

header.addEventListener("dblclick", (event) => {
  event.target.style.fontSize = "2rem";
});
header.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
});
header.addEventListener(
  "click",
  (event) => (event.target.style.fontSize = "30rem")
);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    intro.style.backgroundColor = "orange";
  }
});
bus.addEventListener("mousedown", (event) => {
  event.target.style.border = "thick solid #0000FF";
});
bus.addEventListener("mouseup", (event) => {
  event.target.style.border = "thick dashed #000000";
});



