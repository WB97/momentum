
"use strict";

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");

function onSubmit(t) {
    t.preventDefault();
    console.log(loginInput.value);
}

// loginButton.addEventListener("click", handleLoginBtnClick);
loginForm.addEventListener("submit", onSubmit);