let dropBox = false;
const dropBoxFunction = () => {
  //   document.querySelector(".drop-box-hidden").style.display = "block";
  console.log("click");
  document.querySelector(".drop-box-hidden").classList.toggle("hide");
  // document.querySelector(".drop-box").classList.toggle("drop-box2");
};

document.querySelector(".drop-box-open").addEventListener("click", dropBoxFunction);

// const api = async () => {
//   const res = await (await fetch("https://random-data-api.com/api/users/random_user")).json();
//   return res;
// };
// api().then((res) => {
//   console.log(res, "dsfdsdsfd");
// });
