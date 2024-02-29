function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  var li = document.createElement("li");
  li.textContent = taskInput.value;
  li.onclick = function () {
    this.classList.toggle("completed");
  };

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteButton);
  taskList.appendChild(li);
  taskInput.value = "";
}
