const menuIcon = document.querySelector(".fa-bars");
const mobileMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
