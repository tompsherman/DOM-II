// Your code goes here

const button = document.querySelectorAll(".btn");
const headline = document.querySelector("h2");
const header = document.querySelector(".main-navigation");
const navBar = document.querySelectorAll(".nav-link");
const intro = document.querySelector(".intro p");
const bus = document.querySelector(".intro img");
const mainContent = document.querySelector(".text-content");
const textParagraph = document.querySelector(".text-content p");

headline.addEventListener("dblclick", (event) => {
  event.target.style.fontSize = "2rem";
});
header.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
});

header.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "gray";
});

headline.addEventListener(
  "click",
  (event) => (event.target.style.fontSize = "30rem")
);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    intro.style.backgroundColor = "orange";
  }
});

document.addEventListener("keypress", function (event) {
  if (event.key === "b") {
    intro.style.backgroundColor = "green";
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    intro.style.backgroundColor = "red";
    intro.style.color = "white";
  }
});
bus.addEventListener("mousedown", (event) => {
  event.target.style.border = "thick solid #0000FF";
});
bus.addEventListener("mouseup", (event) => {
  event.target.style.border = "thick dashed #000000";
});
window.addEventListener("load", (event) => {
  intro.style.fontSize = "3rem";
});

 mainContent.addEventListener("click", (event) => {
    mainContent.style.backgroundColor = "purple";
  });

textParagraph.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "orange";
});

// textParagraph.addEventListener("click", (event) => {
//     event.stopPropagation();
//   });

textParagraph.addEventListener("click", (event) => {
  event.stopPropagation();
});

// function textSelect(event) {
//   const selection = event.target.value.substring(
//     event.target.selectionStart,
//     event.target.selectionEnd
//   );
//   textContent.textContent = `the new text is: ${selection}`;
// }
// const newH2 = document.querySelector(".text-content h2");
// newH2.addEventListener("select", textSelect);
navBar[0].addEventListener("click", (event)=>{
    event.preventDefault()
})
navBar[1].addEventListener("click", (event)=>{
    event.preventDefault()
})
navBar[2].addEventListener("click", (event)=>{
    event.preventDefault()
})
navBar[3].addEventListener("click", (event)=>{
    event.preventDefault()
})