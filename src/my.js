window.addEventListener("scroll", (event) => {
  let vertical_scroll = this.scrollY;
  const header = document.querySelector("#top");
  const classes = header.classList;
  if (vertical_scroll > 10) {
    classes.add("shadow");
  }
  else {
    classes.remove("shadow");
  }
})