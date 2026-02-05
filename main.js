const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Merci ! Votre message a bien été envoyé (demo).");
  form.reset();
});
