// document.querySelector(".vision-btn").addEventListener("click", function (e) {
//   document.querySelector(".history").classList.add("hide");
//   document.querySelector(".goals").classList.add("hide");
//   document.querySelector(".vision").classList.remove("hide");
//   document.querySelector(".history-btn").classList.remove("selected");
//   document.querySelector(".goals-btn").classList.remove("selected");
//   document.querySelector(".vision-btn").classList.add("selected");
// });

// document.querySelector(".goals-btn").addEventListener("click", function () {
//   document.querySelector(".history").classList.add("hide");
//   document.querySelector(".goals").classList.remove("hide");
//   document.querySelector(".vision").classList.add("hide");
//   document.querySelector(".history-btn").classList.remove("selected");
//   document.querySelector(".goals-btn").classList.add("selected");
//   document.querySelector(".vision-btn").classList.remove("selected");
// });

// document.querySelector(".history-btn").addEventListener("click", function () {
//   document.querySelector(".history").classList.remove("hide");
//   document.querySelector(".goals").classList.add("hide");
//   document.querySelector(".vision").classList.add("hide");
//   document.querySelector(".history-btn").classList.add("selected");
//   document.querySelector(".goals-btn").classList.remove("selected");
//   document.querySelector(".vision-btn").classList.remove("selected");
// });

const but = document.querySelector(".buttons");
const buttons = document.querySelectorAll(".btn");
const details = document.querySelectorAll(".details");
but.addEventListener("click", function (e) {
  const classes = e.target.classList[0].split("-");
  console.log(e);
  console.log(classes);
  console.log(e.target.parentElement.nextSibling.nextSibling);
  if (classes) {
    buttons.forEach((btn) => {
      console.log(btn, classes[0]);
      btn.classList.remove("selected");
    });
    details.forEach((detail) => {
      console.log(detail, classes[0]);
      detail.classList.add("hide");
    });
    e.target.classList.add("selected");
    document.querySelector(`.${classes[0]}`).classList.remove("hide");
  }
});
