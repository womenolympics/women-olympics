const clock = document.getElementById("clock");
const filter = document.getElementById("filter");

function updateClock() {
  if (clock) {
    clock.textContent = new Date().toLocaleTimeString("fr-FR");
  }
}

updateClock();
setInterval(updateClock, 1000);

if (filter) {
  filter.addEventListener("change", () => {
    const value = filter.value;
    document.querySelectorAll("[data-event]").forEach(item => {
      item.style.display = value === "all" || item.dataset.event === value ? "" : "none";
    });
  });
}
