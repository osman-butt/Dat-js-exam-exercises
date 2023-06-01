"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("initApp virker!");
  const users = await getUsers();
  console.log(users);
  users.forEach(displayUser);
  displayCount(users);
}

async function getUsers() {
  const usersJson = await fetch("users.json");
  const data = await usersJson.json();
  return data;
}

function displayUser(user) {
  const list = document.querySelector("#userlist");
  const html = /*html*/ `
        <li>${user.name} - ${user.active} - ${user.role}</li>
    `;
  list.insertAdjacentHTML("beforeend", html);
}

function displayCount(users) {
  const adminCount = document.querySelector("#admin-count");
  const guestCount = document.querySelector("#guest-count");
  const userCount = document.querySelector("#user-count");

  const adminHTML = /*html*/ `
        ${users.filter(user => user.role === "admin").length};
    `;
  const guestHTML = /*html*/ `
        ${users.filter(user => user.role === "guest").length};
    `;
  const userHTML = /*html*/ `
        ${users.filter(user => user.role === "user").length};
    `;

  adminCount.insertAdjacentHTML("beforeend", adminHTML);
  guestCount.insertAdjacentHTML("beforeend", guestHTML);
  userCount.insertAdjacentHTML("beforeend", userHTML);
}
