let = document.querySelectorAll(".navigation li");
function activeLink() {
  list.forEach((element) => element.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((element) => element.addEventListener("mouseover", activeLink));
