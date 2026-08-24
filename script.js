const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priorityInput");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

function addTask() {
    const taskName = taskInput.value.trim();
    const priority = priorityInput.value;

    if (taskName === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.className = "task";

    li.innerHTML = `
        <div class="task-info">
            <div class="task-name">${taskName}</div>
            <div class="priority">Priority: ${priority}</div>
        </div>

        <div>
            <button class="complete-btn" onclick="completeTask(this)">
                Mark Done
            </button>

            <button class="delete-btn" onclick="deleteTask(this)">
                Delete
            </button>
        </div>
    `;

    taskList.appendChild(li);

    taskInput.value = "";

    updateEmptyMessage();
}

function completeTask(button) {
    const task = button.parentElement.parentElement;

    task.classList.toggle("completed");

    if (task.classList.contains("completed")) {
        button.textContent = "Completed";
    } else {
        button.textContent = "Mark Done";
    }
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
    updateEmptyMessage();
}

function updateEmptyMessage() {
    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}
function addTask() {

    const studentName = document.getElementById("studentName").value;
    const task = document.getElementById("taskInput").value;
    const dueDate = document.getElementById("dueDate").value;
    const status = document.getElementById("status").value;

    if (studentName === "" || task === "" || dueDate === "") {
        alert("Please fill all fields");
        return;
    }

    const table = document.getElementById("taskTable");

    const row = table.insertRow();

    row.insertCell(0).textContent = studentName;
    row.insertCell(1).textContent = task;
    row.insertCell(2).textContent = dueDate;
    row.insertCell(3).textContent = status;

    const deleteCell = row.insertCell(4);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function () {
        row.remove();
    };

    deleteCell.appendChild(deleteButton);

    document.getElementById("taskInput").value = "";
    document.getElementById("dueDate").value = "";
}
