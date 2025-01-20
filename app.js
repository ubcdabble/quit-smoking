import { signInWithEmailAndPassword } from "firebase/auth";

// Handle Login
const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Show success message
    errorMessage.textContent = "Login successful! Welcome, " + user.email;
    errorMessage.style.color = "green";

    // Optional: Redirect or perform additional actions
    console.log("User logged in:", user);
  } catch (error) {
    // Show error message
    errorMessage.textContent = error.message;
    errorMessage.style.color = "red";

    console.error("Login failed:", error);
  }
});