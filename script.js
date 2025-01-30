const form = document.querySelector(".coming-soon form");
const input = document.querySelector(".email");
const errorMessage = document.querySelector(".error-message");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value == "") {
        errorMessage.innerText = "Email cannot be empty";
        errorMessage.style.display = "block";

        errorIcon.style.display = "block";

        input.style.borderWidth = "2px";
        input.style.borderColor = "red";
    } else {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = regex.test(input.value);

        if (isValid) {
            errorMessage.innerText = "";
            errorMessage.style.display = "none";

            errorIcon.style.display = "none";

            input.style.borderWidth = "1px";
            input.style.borderColor = "hsl(0, 36%, 70%)";
        } else {
            errorMessage.innerText = "Please provide a valid email";

            errorMessage.style.display = "block";
            errorIcon.style.display = "block";

            input.style.borderWidth = "2px";
            input.style.borderColor = "red";
        }
    }
});
