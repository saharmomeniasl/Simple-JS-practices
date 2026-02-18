function addTask() {
    const input = document.getElementById("task-input");
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement("li");
    li.className = "task-item";

    const span = document.createElement("span");
    span.textContent = text;

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "✔";
    toggleBtn.className = "toggle";

    li.appendChild(span);
    li.appendChild(toggleBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

document.getElementById("taskList").addEventListener("click", function (e) {
    if (e.target.classList.contains("toggle")) {
        const li = e.target.parentElement;
        li.classList.toggle("done");
    }
});