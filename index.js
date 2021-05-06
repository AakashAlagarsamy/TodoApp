const $addText = document.getElementById("addText");
const $submit = document.getElementById("submit");
const $todoList = document.getElementById("todoList");
const $doneList = document.getElementById("doneList");
let counter = 0;
$submit.addEventListener("click", (e) => {
  if ($addText.value !== "") {
    let todo = $addText.value;
    let $todoItem = document.createElement("li");
    counter++;
    $todoItem.innerHTML = `<input id="${counter}" type="checkbox" /><label for="${counter}">${todo}</label>`;
    $todoList.appendChild($todoItem);
    $addText.value = "";
  }
});

$todoList.addEventListener("click", (e) => {
  const tempEl = e.target.parentElement;
  if (e.target.checked) {
    tempEl.classList.add("completed");
    $todoList.removeChild(tempEl);
    $doneList.appendChild(tempEl);
  }
});

$doneList.addEventListener("click", (e) => {
  const tempEl = e.target.parentElement;
  if (!e.target.checked) {
    tempEl.classList.remove("completed");
    $doneList.removeChild(tempEl);
    $todoList.appendChild(tempEl);
  }
});
