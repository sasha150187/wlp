var menuButton = document.querySelector(".navigation-toggle");

menuButton.addEventListener("click", function(e) {
  e.preventDefault();
  if (menuButton.classList.contains("toggle-active")) {
    menuButton.classList.remove("toggle-active")
  } else {
    menuButton.classList.add("toggle-active");
  }
});
