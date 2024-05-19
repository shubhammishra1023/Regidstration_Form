let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)
// index.js

const passwordInput = document.getElementById("password");
const passwordStrength = document.getElementById("password-strength");
const strengthText = document.getElementById("strength");

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;

    // Check the strength of the password
    let strength = "Weak";
    if (password.length >= 8) {
        strength = "Strong";
    } else if (password.length >= 4) {
        strength = "Medium";
    }

    // Update the strength text and styling
    strengthText.textContent = strength;
    passwordStrength.className = "password-strength " + strength.toLowerCase();
});