// select elements
const generateButtons = document.querySelectorAll("button");
const textarea = document.querySelector("textarea");
const checkbox = document.getElementById("human-verification");
const verifyButton = document.getElementById("verify-button");
const message = document.getElementById("verification-message");

// enable verify button when checkbox checked
checkbox.addEventListener("change", () => {
    verifyButton.disabled = !checkbox.checked;
});

// verify human
verifyButton.addEventListener("click", () => {
    message.textContent = "Verification successful!";
});

// password generator function
function generatePassword(length = 12) {
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";

    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return password;
}

// generate password when button clicked
generateButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        if (!checkbox.checked) {
            alert("Please verify you are human first!");
            return;
        }

        const password = generatePassword();
        textarea.value = password;
    });
});