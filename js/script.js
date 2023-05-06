const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navMenu = document.querySelector(".modal");

hamburger.addEventListener("click", function () {
  navMenu.classList.remove("hidden");
  navMenu.classList.add("flex");
});

closeBtn.addEventListener("click", function () {
  navMenu.classList.add("hidden");
  navMenu.classList.remove("flex");
});

navMenu.addEventListener("click", function () {
  navMenu.classList.add("hidden");
  navMenu.classList.remove("flex");
});
