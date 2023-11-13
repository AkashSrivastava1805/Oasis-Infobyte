function toggleForm() {
    var loginForm = document.getElementById("loginForm");
    var registerForm = document.getElementById("registerForm");
    var error = document.getElementById("error");

    loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
    registerForm.style.display = registerForm.style.display === "none" ? "block" : "none";
    error.innerHTML = "";
}

function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    if (username === "Akash1805" && password === "Akash1805") {
        alert("Login successful!");
    } else {
        document.getElementById("error").innerHTML = "Invalid username or password";
    }
}

function register() {
    var username = document.getElementById("registerUsername").value;
    var password = document.getElementById("registerPassword").value;

    if (username && password) {
        alert("Registration successful!");
    } else {
        document.getElementById("error").innerHTML = "Username and password are required";
    }
}
