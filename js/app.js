const focusButton = document.getElementById("focus-button");
const inputContainer = document.getElementById("input-container");
const inputField = document.getElementById("input-field");

focusButton.addEventListener("focus", () => {
    inputContainer.style.display = "block";
    inputField.focus();
});

inputField.addEventListener("blur", () => {
    inputContainer.style.display = "none";
});
