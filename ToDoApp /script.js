let todo = [];
document.querySelector(".btn-submit").addEventListener("click", function (e) {
  e.preventDefault();
  let inputValue = document.querySelector(".input").value;
  if (inputValue !== "") {
    todo.push(inputValue);
    // console.log(todo);
    document.querySelector(".input").value = "";
    addHtml(inputValue);
  }
});

const addHtml = function () {
  document.querySelector(".to-do").innerHTML = "";
  todo.forEach((element, i) => {
    AdjacentHTML(element, i);

    document.querySelector(`#btn-delete-${i}`).addEventListener("click", deleteTodo);
    // const event1 = document.querySelector(`#btn-delete-${i}`);
    // const click = event1.closest(`#btn-delete-${i}`).addEventListener("click", deleteTodo);

    document.querySelector(`#btn-edit-${i}`).addEventListener("click", editTodo);
  });
};

const editTodo = function (e) {
  const editResult = prompt("Change the task Name", todo[e.target.closest("button").id.slice(-1)]);
  //   console.log(editResult);
  const targetEdit = e.target.closest("button").id.replace(/[^0-9]/g, "");

  if (editResult !== "" && editResult != null) {
    todo.splice(targetEdit, 1, editResult);
    // console.log(editResult, todo);

    // console.log(typeof editResult);
    addHtml();
  }
};

const deleteTodo = (e) => {
  const deleteResult = confirm("You want to delete it?");

  const targetDelete = e.target.closest("button").id.replace(/[^0-9]/g, "");
  if (deleteResult) {
    todo.splice(targetDelete, 1);
    addHtml();
  }
};

const AdjacentHTML = function (element, i) {
  document.querySelector(".to-do").insertAdjacentHTML(
    "afterbegin",
    `<div id=task- class="task">
        <p class="details">${element}</p>
        <div class="buttons">
        <button type="button" class="btn btn-danger" id="btn-delete-${i}"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.5 1a.5.5 0 0 0-.5.5v1h4v-1a.5.5 0 0 0-.5-.5h-3ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1H3.042l.846 10.58a1 1 0 0 0 .997.92h6.23a1 1 0 0 0 .997-.92l.846-10.58Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg> Delete
         </button>
        <button type="button" class="btn btn-info" id="btn-edit-${i}">  
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg> Edit
        </button>
        </div>
        </div>`
  );
};

// const event1 = document.querySelector(`#btn-delete-${i}`);

// const clcik = event1.closest(`#btn-delete-${i}`).addEventListener("click", deleteTodo);

// document.querySelector(`#btn-edit-${i}`).addEventListener("click", editTodo);
