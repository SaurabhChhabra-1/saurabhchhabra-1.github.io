document.querySelector(".open-modal").addEventListener("click", function () {
  document.querySelector(".modal-box2").classList.toggle("hide");
  document.querySelector(".overlay").classList.toggle("hide");
});

document.querySelector(".close-modal").addEventListener("click", function () {
  document.querySelector(".modal-box2").classList.toggle("hide");
  document.querySelector(".overlay").classList.toggle("hide");
});

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".modal-box2").classList.toggle("hide");
  document.querySelector(".overlay").classList.toggle("hide");
});
