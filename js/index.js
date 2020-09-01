// Your code goes here

const button = document.querySelectorAll(".btn");
const headlines = document.querySelectorAll("h2");
const header = document.querySelector(".main-navigation");
const navBar = document.querySelectorAll(".nav");
const intro = document.querySelector(".intro p");

header.addEventListener("dblclick", (event) => {
  event.target.style.backgroundColor = "black";
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
    header.style.backgroundColor = "white";
  }
});
