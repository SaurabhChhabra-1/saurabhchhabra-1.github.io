// const fish = fetch("https://www.fishwatch.gov/api/species")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// console.log(fish);
// let data;
function showLoading() {
  document.querySelector(".loading").style.display = "block";
  document.querySelector(".review-box").style.display = "none";
}
function hideLoading() {
  document.querySelector(".loading").style.display = "none";
  document.querySelector(".review-box").style.display = "flex";
}
// window.onload = loading();
const api = () => {
  showLoading();
  fetch("https://random-data-api.com/api/users/random_user")
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "gythy");
      hideLoading();
      uiChanges(data);
    });
  // let data = await res.json();
  // window.onload = loading;
  // console.log(data);
  // return data;
};
api();

// let myVar;
// function myFunction() {
//   myVar = setTimeout(loading, 3000);
// }
// console.log(data);
// api().then((res) => {
//   person = res;
//   console.log(res, "dsfdsdsfd");
//   console.log(person[first_name]);
// });

// console.log(res);
// let i = 0;
const uiChanges = function (data) {
  // console.log(data);
  document.querySelector(".img").src = data.avatar;
  document.querySelector(".name").textContent = data.first_name;
  document.querySelector(".designation").textContent = data.employment.title;
  document.querySelector(".description").textContent = `My name is ${data.first_name} ${
    data.last_name
  }. I'm a ${data.employment.title} and my age is ${
    2022 - data.date_of_birth.split("-")[0]
  }. I live in ${data.address.city}, ${data.address.state}, ${
    data.address.country
  }. You can contact me @ ${data.phone_number} `;
};
// uiChanges();

document.querySelector(".buttons-plus").addEventListener("click", function () {
  // loading();
  console.log("clicked");
  api();
  // .then((data) => {
  //   uiChanges(data);
  // });
  // uiChanges(data);

  // ++i;
  // if (i > person.length - 1) {
  //   i = 0;
  // }
});
document.querySelector(".buttons-minus").addEventListener("click", function () {
  // --i;
  // if (i < 0) {
  //   i = person.length - 1;
  // }
  console.log("clicked");
  api();
  // .then((data) => {
  //   uiChanges(data);
  // });
  // uiChanges(data);
});

document.querySelector(".surprise").addEventListener("click", function () {
  const randomPerson = Math.trunc(Math.random() * person.length);
  uiChanges(randomPerson);
});
