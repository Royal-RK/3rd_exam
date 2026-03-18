let menuBtn = document.querySelector(".navbar-toggler");
let navMenu = document.querySelector(".offcanvas");

let open = true;
menuBtn.addEventListener("click", () => {
  if (open === true) {
    menuBtn.classList.remove("activeShow");
    navMenu.style.right = "-100%";
    document.body.classList.remove("no-scroll");
    open = false;
  } else {
    menuBtn.classList.add("activeShow");
    navMenu.style.right = "0%";
    document.body.classList.add("no-scroll");
    open = true;
  }
});
