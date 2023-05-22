const iconsNav = document.querySelectorAll("#navBarList li a");

document.addEventListener("scroll", () => {
  const scroll = scrollY;
  iconsNav.forEach(function (el) {
    el.classList.remove("actived");
  });

  if (scroll < 500) {
    document.querySelector("a[href='#home']").classList.add("actived");
  } else if (scroll > 500 && scroll < 1000) {
    document.querySelector("a[href='#aboutMe']").classList.add("actived");
  } else if (scroll > 1000 && scroll < 1500) {
    document.querySelector("a[href='#myExperience']").classList.add("actived");
  } else if (scroll > 1500 && scroll < 2300) {
    document.querySelector("a[href='#projects']").classList.add("actived");
  } else if (scroll > 2300) {
    document.querySelector("a[href='#contact']").classList.add("actived");
  }
});

const a = [];
console.log(a);
