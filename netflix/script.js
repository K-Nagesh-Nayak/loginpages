// just a pratice work

let submit = document.querySelector("#btn");
let username = document.querySelector("#username");
let pass = document.querySelector("#pass");
submit.addEventListener("click", () => {
    if (username.value == "" || pass.value == "") {
        alert("Warning the field must not be empty");
    } else {
        alert("SignIn successful");
    }
});
