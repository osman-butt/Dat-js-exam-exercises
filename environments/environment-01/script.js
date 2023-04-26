"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const users = await getUser();
  //   users.forEach(showUser);
  const admin = getAdmin(users);
  //   admin.forEach(showUser);
  showUsers(admin);
}

async function getUser() {
  const res = await fetch("users.json");
  const data = await res.json();
  console.log(data);
  return data;
}

function showUser(user) {
  const html = /*html*/ `
    <li>${user.name} - active: ${user.active}</li>
    `;

  document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
}

function showUsers(admin) {
  admin.forEach(showUser);
}

function getAdmin(users) {
  const admins = users.filter(checkRole);
  return admins;
  function checkRole(user) {
    return user.role === "admin";
  }
}
