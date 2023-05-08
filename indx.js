const iconsNav = document.querySelectorAll("#navBarList li a");

document.addEventListener("scroll", () => {
  const scroll = scrollY;
  iconsNav.forEach(function (el) {
    el.classList.remove("actived");
  });

  if (scroll < 570) {
    document.querySelector("a[href='#home']").classList.add("actived");
  } else if (scroll > 570 && scroll < 1141) {
    document.querySelector("a[href='#aboutMe']").classList.add("actived");
  } else if (scroll > 1141 && scroll < 1712) {
    document.querySelector("a[href='#myExperience']").classList.add("actived");
  } else if (scroll > 1712 && scroll < 2540) {
    document.querySelector("a[href='#projects']").classList.add("actived");
  } else if (scroll > 2540) {
    document.querySelector("a[href='#contact']").classList.add("actived");
  }
});

const a = [];
console.log(a);
