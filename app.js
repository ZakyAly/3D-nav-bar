const potato_menu = document.querySelector(".potato-menu");
const container = document.querySelector(".container");

potato_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
