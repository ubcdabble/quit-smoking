
// Handle Login
const loginForm = document.getElementById("login-form")
const errorMessage = document.getElementById("error-message")

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault()

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailandPassword(auth, email, password);
        console.log("User logged:", userCredential.user);
        errorMessage.textContent = "Login successful!";
        errorMessage.style.color = "green";

    } catch (error) {
        console.error("Error logging in:", error.message);
        errorMessage.textContent = error.message;
        errorMessage.style.color = "red";
    }
});