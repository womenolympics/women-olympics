const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", mainNav.classList.contains("open"));
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => mainNav.classList.remove("open"));
  });
}
