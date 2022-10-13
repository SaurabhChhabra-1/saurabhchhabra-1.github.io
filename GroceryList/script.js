const btn = document.querySelector(".button");
const input = document.querySelector(".input");
const clearAll = document.querySelector(".clear");
const addHtml = document.querySelector(".input-box");
const message = document.querySelector(".message");
let groceries = [];
let editItem = -1;
let numitems = 0;
const messages = [
  "Item Added to the List",
  "Please Enter Value",
  "Empty List",
  "Item Removed",
  "Value Changed",
  "",
];

const showMessage = function (text, type) {
  if (type === "add") {
    message.innerHTML = text;
    message.classList.add("correct");
  } else if (type === "delete") {
    message.innerHTML = text;
    message.classList.add("wrong");
  }
  setTimeout(() => {
    message.innerHTML = "";
    message.classList.remove("correct");
    message.classList.remove("wrong");
  }, 1000);
};
let edit;
let deleteElem;
const insertHtml = function (text, key) {
  const html = `<div class="grocery">
  <h4 class="text">${text}</h4>
  <div>
  <button id=edit-${key} data-id=${key} type="button" class="edit"><i  class="fas fa-edit"></i></button>
  <button id=delete-${key} data-id=${key} type="button" class="delete"><i  class="fa-solid fa-trash-can"></i></button>
  </div>
  
  </div>
  `;
  addHtml.insertAdjacentHTML("beforeend", html);
  edit = document.querySelector(`#edit-${key}`);
  edit.addEventListener("click", function (e) {
    // editItem = groceries.findIndex((elem) => elem.key == e.currentTarget.dataset.id);
    editItem = e.currentTarget.dataset.id;
    console.log(editItem, "edit");
    btn.innerHTML = "Edit";
    input.value = groceries[editItem].value;
  });

  deleteElem = document.querySelector(`#delete-${key}`);
  deleteElem.addEventListener("click", function (e) {
    const delItem = groceries.findIndex((elem) => elem.key == e.currentTarget.dataset.id);
    groceries.splice(delItem, 1);
    showMessage(messages[3], "delete");
    e.currentTarget.parentElement.parentElement.remove();
  });
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value) {
    if (editItem > -1) {
      //   console.log(
      //     document.querySelector(`#edit-${editItem}`).parentElement.previousElementSibling.innerHTML
      //   );
      btn.innerHTML = "Submit";
      groceries[editItem].value = input.value;
      document.querySelector(`#edit-${editItem}`).parentElement.previousElementSibling.innerHTML =
        groceries[editItem].value;
      input.value = "";
      editItem = -1;
      showMessage(messages[4], "add");
    } else {
      const key = numitems;
      showMessage(messages[0], "add");
      groceries.push({ key: key, value: input.value });
      insertHtml(input.value, key);
      numitems++;
    }
  } else {
    showMessage(messages[1], "delete");
  }
  //   }
  input.value = "";
});

clearAll.addEventListener("click", function () {
  groceries = [];
  addHtml.innerHTML = "";
  showMessage(messages[2], "delete");
});
