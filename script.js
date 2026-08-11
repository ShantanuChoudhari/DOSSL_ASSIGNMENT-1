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

        <button class="delete-btn" onclick="deleteTask(this)">
            Delete
        </button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";

    updateEmptyMessage();
}

function deleteTask(button) {
    button.parentElement.remove();
    updateEmptyMessage();
}

function updateEmptyMessage() {
    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}
