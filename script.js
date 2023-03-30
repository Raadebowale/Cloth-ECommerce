const bar = document.querySelector("#bar");
const closeNav = document.querySelector("#close");
const nav = document.querySelector("#header__navbar");

const MainImg = document.querySelector("#MainImg");
const smallImages = document.querySelectorAll(".small-img");

bar.addEventListener("click", () => {
  nav.style.display = "flex";
});

closeNav.addEventListener("click", () => {
  nav.style.display = "none";
});

smallImages.forEach((smallImg) => {
  smallImg.addEventListener("click", () => {
    MainImg.src = smallImg.src;
  });
});
