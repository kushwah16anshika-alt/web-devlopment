let taskInput = document.getElementById("taskinput");
let addTaskBtn = document.getElementById("addtaskbtn");
let taskList = document.getElementById("tasklist");

function addTask() {
  let taskValue = taskInput.value.trim();
  if (taskValue === "") {
    return;
  }
  let listItem = document.createElement("li");
  listItem.className =
    "list-group-item d-flex justify-content-between align-items-center task-item";

  let taskText = document.createElement("div");

  taskText.innerText = taskValue;
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-outline-danger btn-sm";
  deleteBtn.innerHTML = '<i class="bi bi-trash"></i> Delete';
  deleteBtn.addEventListener("click", function () {
    listItem.remove();
  });
  listItem.appendChild(taskText);

  listItem.appendChild(deleteBtn);

  taskList.appendChild(listItem);
  taskInput.value = "";
}
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
