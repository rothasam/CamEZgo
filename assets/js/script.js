// Hero banner vdo
const player = new Plyr("#player");

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




// FAQ
const accordion = document.querySelectorAll(".accordion h3");
let mainParent;
let height;
let answer;
accordion.forEach((item) => {
  item.addEventListener("click", () => {
    height =
      item.parentElement.nextElementSibling.firstElementChild.offsetHeight;
    answer = item.parentElement.nextElementSibling;
    mainParent = item.parentElement.parentElement;
    if (mainParent.classList.contains("active")) {
      mainParent.classList.remove("active");
      answer.style.height = `0px`;
    } else {
      mainParent.classList.add("active");
      answer.style.height = `${height}px`;
    }
  });
});

// Add to cart
// const offcanvasElementList = document.querySelectorAll('.offcanvas')
// const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))
