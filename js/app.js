// menu toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

//add hovered class in selected list item
let = document.querySelectorAll(".navigation li");
function activeLink() {
  list.forEach((element) => element.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((element) => element.addEventListener("mouseover", activeLink));
