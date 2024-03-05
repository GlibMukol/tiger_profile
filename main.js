const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});

const darkModeButton = document.getElementById("darkModeMenu");
const body = document.body;

const enableDarkMode = () => {
  body.classList.add("dark-mode");
};
const disableDarkMode = () => {
  body.classList.remove("dark-mode");
};

darkModeButton.addEventListener("click", () => {
  darkModeButton.checked ? enableDarkMode() : disableDarkMode();
});

const typed = new Typed(".multiple", {
  strings: ["Cat", "Cute", "Predator"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
