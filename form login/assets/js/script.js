function register() {
    
    const username = document.getElementById("user").value.trim();
    const email = document.getElementById("email-inp").value.trim();
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;
    const messageDiv = document.getElementById("message");
    
    if (username.length <= 3) {
        messageDiv.textContent = "نام کاربری باید بیشتر از ۳ کاراکتر باشد";
        messageDiv.className = "error";
        return;
    }

    if (pass1.length < 8) {
        messageDiv.textContent = "رمز عبور باید حداقل ۸ کاراکتر باشد";
        messageDiv.className = "error";
        return;
    }

    if (email ==""){
        messageDiv.textContent = "ایمیل خود را وارد کنید"
        messageDiv.className = "error";
        return;
    }

    if (pass1 !== pass2) {
        messageDiv.textContent = "رمز عبور و تکرار آن مطابقت ندارند";
        messageDiv.className = "error";
        return;
    }

    messageDiv.textContent = "!ثبت نام موفقیت آمیز بود";
    messageDiv.className = "success";

    setTimeout(() => {
        window.location.href = "index2.html";
    }, 1500);
}

messageDiv.textContent = "!ثبت نام موفقیت آمیز بود";
messageDiv.className = "success fade-out";

messageDiv.textContent = "رمز عبور باید حداقل ۸ کاراکتر باشد.";
messageDiv.className = "error fade-out";
