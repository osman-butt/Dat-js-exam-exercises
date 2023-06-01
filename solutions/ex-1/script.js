"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("initApp virker!");
  const users = await getUsers();
  console.log(users);
  const admins = users.filter(user => user.role === "admin");
  admins.forEach(displayUser);
}

async function getUsers() {
  const res = await fetch("users.json");
  const data = await res.json();
  return data;
}

function displayUser(user) {
  const list = document.querySelector("#userlist");
  const html = /*html*/ `
        <li>${user.name} - Aktiv? ${user.active ? "Ja" : "Nej"}</li>
    `;
  list.insertAdjacentHTML("beforeend", html);
}
