const video = document.querySelector(".video");
document.querySelector(".switch").addEventListener("click", function (e) {
  // console.log(e);
  console.log(e.target.classList);
  console.log(!e.target.classList.contains("hide"));
  if (!e.target.classList.contains("hide")) {
    document.querySelector(".slider-1").classList.add("hide");
    video.pause();
  } else {
    // document.querySelector(".slider-2").classList.toggle("hide");
    video.play();
  }
});
