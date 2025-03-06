const allElems = document.querySelectorAll("[data-allListItems]");
const toggleNavbarColor = document.querySelectorAll("#toggleBtn");
toggleNavbarColor.forEach((elems) => {
  elems.addEventListener("click", (e) => {
    allElems.forEach((items) => {
      if (document.body.classList.contains("bg-white")) {
        items.classList.toggle("hover:after:bg-Accent");
        items.classList.toggle("hover:after:bg-Primary");
      } else {
        items.classList.toggle("hover:after:bg-Accent");
        items.classList.toggle("hover:after:bg-Primary");
      }
    });
  });
});
