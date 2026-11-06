document.addEventListener("mousemove", function(e) {
    document.body.style.setProperty("--mouse-x", e.clientX + "px");
    document.body.style.setProperty("--mouse-y", e.clientY + "px");
});

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim().toLowerCase();
        const password = document.getElementById("password").value;
        const message = document.getElementById("loginMessage");

        const users = JSON.parse(localStorage.getItem("campusUsers")) || [];

        const user = users.find(function(account) {
            return account.email === email && account.password === password;
        });

        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            window.location.href = "dashboard.html";
        } else {
            message.textContent = "Invalid email or password. Please register first.";
            message.style.color = "red";
        }
    });
}

const toggleButton = document.getElementById("togglePassword");

if (toggleButton) {
    toggleButton.addEventListener("click", function() {
        const password = document.getElementById("password");

        if (password.type === "password") {
            password.type = "text";
            toggleButton.textContent = "HIDE";
        } else {
            password.type = "password";
            toggleButton.textContent = "SHOW";
        }
    });
}
