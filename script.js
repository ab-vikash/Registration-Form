const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Validate Name
function validateName() {
    if (name.value.trim() === "") {
        nameError.textContent = "Name cannot be empty";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

// Validate Email
function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Invalid email format";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

// Validate Password
function validatePassword() {
    if (password.value.trim().length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

// Enable or Disable Submit Button
function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

// Real-time validation on input change
name.addEventListener('input', validateForm);
email.addEventListener('input', validateForm);
password.addEventListener('input', validateForm);

// Prevent form submission if fields are not valid
document.getElementById('registrationform').addEventListener('submit', function (event) {
    validateForm();
    if (!btn.disabled) {
        alert('Form submitted successfully!');
    } else {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
