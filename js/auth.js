const form = document.getElementById("loginForm");
const message = document.getElementById("message");

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    const login = document.getElementById("login").value.trim();
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if (!login) {
      message.textContent = "Merci d'indiquer votre prénom.";
      message.style.color = "#c0392b";
      return;
    }

    if (password !== "women2027") {
      message.textContent = "Mot de passe incorrect.";
      message.style.color = "#c0392b";
      return;
    }

    localStorage.setItem("woUser", JSON.stringify({ login, role }));
    message.textContent = `Connexion réussie en tant que ${role === "admin" ? "administrateur" : "opérateur"}.`;
    message.style.color = "#208a62";

    setTimeout(() => {
      window.location.href = "live.html";
    }, 900);
  });
}
