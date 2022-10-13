// 1st way
// const faq = function (e) {
//   // console.log(e);
//   // console.log(e.target.nextElementSibling.className);
//   document
//     .querySelector(`.${e.target.nextElementSibling.classList[0]}`)
//     .classList.toggle("open-close");
// };

// document.querySelector(".title1").addEventListener("click", faq);
// document.querySelector(".title2").addEventListener("click", faq);
// document.querySelector(".title3").addEventListener("click", faq);

// 2nd way
const questions = document.querySelectorAll(".question-btn");
console.log(questions);

questions.forEach(function (question) {
  question.addEventListener("click", function (e) {
    plusButton = question.querySelector(".plus-icon");
    plusButton.classList.toggle("hide");
    minusButton = question.querySelector(".minus-icon");
    minusButton.classList.toggle("hide");
    const quest = e.target.parentElement.parentElement.parentElement.nextElementSibling;

    questions.forEach(function (item) {
      // console.log(item);
      const openVar = item.parentElement.nextElementSibling;
      // console.log(openVar);
      // console.log(item.parentElement.nextElementSibling);
      if (openVar !== quest) {
        openVar.classList.remove("open-close");
      }
    });
    // console.log(quest);
    quest.classList.toggle("open-close");
  });
});
