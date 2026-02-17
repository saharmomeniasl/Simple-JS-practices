// function addTask(){
//     const input = document.getElementById("taskInput");
//     const text = input.value.trim()
//     if (!text) return;

//     const li = document.createElement("li");
//     li.textContent = text;

//     li.addEventListener("click", ()=> {
//         li.classList.toggle("done");
//     });

//     const del = document.createElement("button");
//     del.textContent = "I did it"
//     del.addEventListener("click", () => li.remove())

//     li.appendChild(del);

//     document.getElementById("taskList").appendChild(li);
//     nput.value = "";
// }

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement("li");
    li.className = "task-item";

    const span = document.createElement("span");
    span.textContent = text;

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "✔"; // دکمه تغییر وضعیت
    toggleBtn.className = "toggle";

    li.appendChild(span);
    li.appendChild(toggleBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

// استفاده از delegation برای مدیریت کلیک‌ها
document.getElementById("taskList").addEventListener("click", function (e) {
    if (e.target.classList.contains("toggle")) {
        const li = e.target.parentElement;
        li.classList.toggle("done");
    }
});