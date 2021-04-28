document.getElementById("sign-up").addEventListener("click", () => {
  document.getElementById("modal-sign-up").style.display = "flex";
});

document.getElementById("back-button").addEventListener("click", () => {
  document.getElementById("modal-sign-up").style.display = "none";
});

document.getElementById("sign-in").addEventListener("click", () => {
  document.getElementById("modal-sign-in").style.display = "flex";
});

document.getElementById("back-button-sign-in").addEventListener("click", () => {
  document.getElementById("modal-sign-in").style.display = "none";
});

document.getElementById("btn-sign-in").addEventListener("click", () => {
  document.getElementById("modal-sign-in").style.display = "none";
  document.getElementById("sign-up").style.display = "none";
  document.getElementById("sign-in").style.display = "none";
  document.getElementById("header__navbar-user").style.display = "flex";
});
