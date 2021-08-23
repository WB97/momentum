
"use strict";

function onSubmit(event) {
    const saveName = loginInput.value;
    event.preventDefault();
    localStorage.setItem(USER_KEYNAME, saveName);
    loginForm.classList.add(CLASSNAME_HIDDEN);
    printGreeting(saveName);
}
function printGreeting(userName) {
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(CLASSNAME_HIDDEN);
}

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const CLASSNAME_HIDDEN = "hidden";

const USER_KEYNAME = "username";
const userName = localStorage.getItem(USER_KEYNAME);

if (userName != null) {
    printGreeting(userName);
} else {
    loginForm.classList.remove(CLASSNAME_HIDDEN);
    loginForm.addEventListener("submit", onSubmit);
}