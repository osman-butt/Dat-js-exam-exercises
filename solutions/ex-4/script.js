"use strict";

window.addEventListener("load", initApp);

let users = [];

async function initApp() {
  console.log("initApp is working!");
  await getUsers();
  updateUserList();
}

async function getUsers() {
  const res = await fetch("users.json");
  users = await res.json();
  return users;
}

function updateUserList() {
  document.querySelector("#userlist").textContent = "";
  users = users.filter(user => user.active);
  users.forEach(displayUser);
}

function displayUser(user) {
  const html = /*html*/ `
        <li>${user.name} - ${user.role}</li>
    `;
  document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
}

function createUser(name, active, role) {
  const newUser = { name, active, role };
  users.push(newUser);
  updateUserList();
}
