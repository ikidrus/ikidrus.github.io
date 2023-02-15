// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika humburger-menu di klik
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// ketika user klik di luar sidebar untuk menghilangkan navbar
const humburger = document.querySelector("#humburger-menu");

document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
