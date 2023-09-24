// Toggle
const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
  toggle.classList.toggle("show");
});