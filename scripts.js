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

password.addEventListener("focusout", () => {
    validatePassword();
})

confirmPassword.addEventListener("focusout", () => {
    validatePassword();
})