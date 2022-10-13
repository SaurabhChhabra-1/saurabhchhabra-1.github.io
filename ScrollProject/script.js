var navbar = document.querySelector(".scroll");
var sticky = 35;
// const hideBar = function (e) {
//   console.log(e);
//   document.querySelector(".scroll").classList.remove("hide");
// };
// document.addEventListener("scroll", hideBar);

const hideBar = function () {
  if (window.pageYOffset >= sticky) {
    navbar.classList.remove("hide");
  } else {
    navbar.classList.add("hide");
  }
};
document.addEventListener("scroll", hideBar);

// window.onscroll = function () {
//   myFunction();
// };

// function myFunction() {
//   console.log(window.pageYOffset, sticky, "window.pageYOffset");
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.remove("hide");
//   } else {
//     navbar.classList.add("hide");
//   }
// }
