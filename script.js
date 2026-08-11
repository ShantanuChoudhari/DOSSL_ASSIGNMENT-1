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
