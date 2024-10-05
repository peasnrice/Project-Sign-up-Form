console.log("loaded");

const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

function validatePassword() {
    if (password.value === "" && confirmPassword.value === "") {

    } else if (password.value !== confirmPassword.value) {
        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");
    } else {
        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");
    }
}

function handleTab(event) {
    if (event.key === "Tab") {
        validatePassword();
    }
}

password.addEventListener("focusout", validatePassword);
confirmPassword.addEventListener("focusout", validatePassword);

password.addEventListener("keydown", handleTab);
confirmPassword.addEventListener("keydown", handleTab);