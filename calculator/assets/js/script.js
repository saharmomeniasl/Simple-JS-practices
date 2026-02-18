let expression = "";

const processEl = document.getElementById("process");

const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        const value = btn.textContent;

        if (!btn.id) return;

        if (value === "AC") {
            expression = "";
            processEl.textContent = "0";
            return;
        }

        if (value === "del") {
            expression = expression.slice(0, -1);
            processEl.textContent = expression;
            return;
        }

        if (value === "=") {
    try {
        const result = eval(expression);

        if (result === Infinity) {
            alert("عدد دوم نباید 0 باشد")
            expression = "";
            return;
        }

        expression = result.toString();
        processEl.textContent = expression;

    } catch {
        processEl.textContent = "Error";
        expression = "";
    }

    return;
}

        if (value === "×") expression += "*";
        else if(value ==="%") expression += "/100";
        else if (value === "÷") expression += "/";
        else expression += value;
        processEl.textContent = expression;
    });
});
