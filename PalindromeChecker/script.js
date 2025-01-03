const palValue = document.getElementById("pal-in");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

function checkPalindrome() {
    let value = palValue.value.toLowerCase();

    if (value === value.split("").reverse().join("")) {
        resultDiv.innerHTML = `${value} is a palindrome.`;
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerHTML = `${value} is not a palindrome.`;
        resultDiv.style.color = "red";
    }
}