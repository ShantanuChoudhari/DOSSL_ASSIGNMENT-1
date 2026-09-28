const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priorityInput");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");


// Add a new task
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

            <div class="task-name">
                ${taskName}
            </div>

            <div class="priority">
                Priority: ${priority}
            </div>

        </div>

        <div class="task-actions">

            <button
                class="complete-btn"
                onclick="completeTask(this)">
                Mark Done
            </button>

            <button
                class="delete-btn"
                onclick="deleteTask(this)">
                Delete
            </button>

        </div>
    `;

    taskList.appendChild(li);

    taskInput.value = "";

    updateEmptyMessage();
}


// Mark task as completed
function completeTask(button) {

    const task = button.parentElement.parentElement;

    task.classList.toggle("completed");

    if (task.classList.contains("completed")) {

        button.textContent = "Completed";

    } else {

        button.textContent = "Mark Done";

    }
}


// Delete task
function deleteTask(button) {

    const task = button.parentElement.parentElement;

    task.remove();

    updateEmptyMessage();
}


// Update empty task message
function updateEmptyMessage() {

    if (taskList.children.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";

    }
}


// Search tasks
function searchTasks() {

    const searchText = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const tasks = taskList.getElementsByClassName("task");

    for (let i = 0; i < tasks.length; i++) {

        const taskName = tasks[i]
            .querySelector(".task-name")
            .textContent
            .toLowerCase();

        if (taskName.includes(searchText)) {

            tasks[i].style.display = "flex";

        } else {

            tasks[i].style.display = "none";

        }
    }
}