const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navMenu = document.querySelector(".modal");

hamburger.addEventListener("click", function () {
  navMenu.classList.remove("hidden");
  navMenu.classList.add("flex");
  navMenu.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  navMenu.classList.remove("show");
  navMenu.classList.add("hidden");
});

navMenu.addEventListener("click", function () {
  navMenu.classList.add("hidden");
  navMenu.classList.remove("flex");
});
