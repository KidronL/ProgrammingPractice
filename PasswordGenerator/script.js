const pwInput = document.getElementById("password"); // Getting the password input element by ID
const genBtn = document.getElementById("gen-btn"); // Getting the generate password button element by ID

// Function to shuffle a string
function shuffleString(str) {
    const arr = str.split("");
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
}

// Function to generate a random password
function generatePassword() {
    const length = 12; // Length of the password
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Character set for the password
    const specialChars = "!@#$%^&*()_+"; // Special characters for the password
    let password = ""; // Variable to store the generated password

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * specialChars.length);
        password += specialChars[randomIndex];
    }

    password = shuffleString(password); // Shuffling the password
    return password;
}

// Event listener for the generate password button
genBtn.addEventListener("click", () => {
    const password = generatePassword();
    pwInput.value = password;
});