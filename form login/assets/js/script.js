function register() {

    const username = document.getElementById("user").value.trim();
    const email = document.getElementById("email-inp").value.trim();
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;
    const messageDiv = document.getElementById("message");

    // پاک کردن کلاس‌های قبلی
    messageDiv.className = "";

    // چک خالی بودن فیلدها
    if (username === "" || email === "" || pass1 === "" || pass2 === "") {
        messageDiv.textContent = "همه فیلدها باید پر شوند!";
        messageDiv.className = "error";
        return;
    }

    // نام کاربری حداقل 4 کاراکتر
    if (username.length < 4) {
        messageDiv.textContent = "نام کاربری باید حداقل ۴ کاراکتر باشد";
        messageDiv.className = "error";
        return;
    }

    // حداقل طول رمز عبور
    if (pass1.length < 8) {
        messageDiv.textContent = "رمز عبور باید حداقل ۸ کاراکتر باشد";
        messageDiv.className = "error";
        return;
    }

    // تطابق رمز عبور
    if (pass1 !== pass2) {
        messageDiv.textContent = "رمز عبور و تکرار آن مطابقت ندارند";
        messageDiv.className = "error";
        return;
    }

    // موفقیت
    messageDiv.textContent = "ثبت نام موفقیت‌آمیز بود!";
    messageDiv.className = "success fade-out";

    setTimeout(() => {
        window.location.href = "index2.html";
    }, 1500);
}
