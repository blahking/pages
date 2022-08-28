const openIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-xmark");

const mobileMenu = document.querySelector(".mobile-menu");

openIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

closeIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
