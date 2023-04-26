const iconsNav = document.querySelectorAll("#navBarList li a");

function activeIconNav() {
  iconsNav.forEach(function (el) {
    el.classList.remove("actived");
  });
  this.classList.add("actived");
}
iconsNav.forEach(function (el) {
  el.addEventListener("click", activeIconNav);
  // el.addEventListener("click", activeIconNav);
});
