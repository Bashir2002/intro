let menu = document.querySelector(".menu");
let overlay = document.querySelector(".overlay");
let close = document.querySelector(".close");
let arrow1 = document.querySelector(".arrow1");
let arrow2 = document.querySelector(".arrow2");
let feature = document.querySelector(".feature");
let company = document.querySelector(".company");

let mad = feature.classList.contains("hidden");
// console.log(mad);

let nav = document.getElementById("nav");
menu.addEventListener("click", () => {
  // nav.style.display = "block";
  nav.classList.remove("hidden");
  // overlay.classList.remove("hidden");

  overlay.style.display = "block";
});
overlay.addEventListener("click", () => {
  // nav.style.display = "none";
  nav.classList.add("hidden");
  // overlay.classList.add("hidden");
  overlay.style.display = "none";
  company.classList.add("hidden");
  feature.classList.add("hidden");
});
close.addEventListener("click", () => {
  nav.classList.add("hidden");
  // overlay.classList.add("hidden");
  // nav.style.display = "none";
  overlay.style.display = "none";
  company.classList.add("hidden");
  feature.classList.add("hidden");
});
arrow1.addEventListener("click", () => {
  if (feature.classList.contains("hidden")) {
    feature.classList.remove("hidden");
    arrow1.src = "images/icon-arrow-up.svg";
  } else {
    feature.classList.add("hidden");
    arrow1.src = "images/icon-arrow-down.svg";
  }
});
arrow2.addEventListener("click", () => {
  if (company.classList.contains("hidden")) {
    company.classList.remove("hidden");
    arrow2.src = "images/icon-arrow-up.svg";
  } else {
    company.classList.add("hidden");
    arrow2.src = "images/icon-arrow-down.svg";
  }
});
