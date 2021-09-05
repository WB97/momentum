"use strict";

function onSubmit(event) {
  const saveName = loginInput.value;
  event.preventDefault();
  localStorage.setItem(USER_KEYNAME, saveName);
  loginForm.classList.add(CLASSNAME_HIDDEN);
  toDoList.classList.remove(CLASSNAME_HIDDEN);
  toDoFrom.classList.remove(CLASSNAME_HIDDEN);
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
const toDoList = document.getElementById("todo-list");
const toDoFrom = document.getElementById("todo-form");

const CLASSNAME_HIDDEN = "hidden";
const USER_KEYNAME = "username";
const userName = localStorage.getItem(USER_KEYNAME);

if (userName != null) {
  printGreeting(userName);
  toDoList.classList.remove(CLASSNAME_HIDDEN);
  toDoFrom.classList.remove(CLASSNAME_HIDDEN);
} else {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", onSubmit);
}
