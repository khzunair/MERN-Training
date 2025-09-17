const submitButton = document.querySelector("#submit-btn");
const taskList = document.querySelector("#task-list");
const taskInput = document.querySelector("#task-input");

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskItem = document.createElement("li");

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.addEventListener("change", () => {
            taskItem.classList.toggle("completed");
        });

        const taskSpan = document.createElement("span");
        taskSpan.innerText = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });


        taskItem.appendChild(checkBox);
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteButton);


        taskList.appendChild(taskItem);

        taskInput.value = "";

    } else {
        alert("Task cannot be empty text");
    }
});