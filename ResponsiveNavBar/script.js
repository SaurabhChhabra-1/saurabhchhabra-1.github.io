let dropBox = false;
const dropBoxFunction = () => {
  //   document.querySelector(".drop-box-hidden").style.display = "block";
  document.querySelector(".drop-box-hidden").classList.toggle("hide");
  document.querySelector(".drop-box").classList.toggle("drop-box2");
};

document.querySelector(".drop-box").addEventListener("click", dropBoxFunction);
console.log(screen);
// if (screen.width > 600) {
//   dropBoxFunction();
//   //   console.log("600+");
// }
