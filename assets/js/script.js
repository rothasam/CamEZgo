// Back to top and Menu Sticky
window.onscroll = function () {
  stickyNavbar();
};
var navbar = document.querySelector(".navPage");
var sticky = navbar.offsetTop;
var backToTop = document.getElementById("backToTop");

function stickyNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    backToTop.style.display = "block";
  } else {
    navbar.classList.remove("sticky");
    backToTop.style.display = "none";
  }
}

backToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});






