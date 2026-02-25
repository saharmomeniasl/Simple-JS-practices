document.getElementById("startBtn").addEventListener("click", () => {

    if (num === end) {
        alert("Start and end numbers should not be equal");
        return;
    }

    num = document.getElementById("counter").textContent;

    const interval = setInterval(() => {

        if (num < end) {
            num++;
        } else if (num > end) {
            num--;
        }

        num = document.getElementById("counter").textContent;

        if (num === end) {
            clearInterval(interval);
        }
    }, speed);
});

let num = Number(document.getElementById("startValue").value);
let end = Number(document.getElementById("endValue").value);
let speed = Number(document.getElementById("speedValue").value);
