"use strict";

import { teachers } from "./teachers.js";

window.addEventListener("load", initApp);

function initApp() {
  console.log("initApp is working!");
  console.log(teachers);
  teachers.sort((a, b) => a.name.localeCompare(b.name));
  teachers.sort((a, b) => a.email.localeCompare(b.email));
  teachers.forEach(displayTeacher);
}

function displayTeacher(teacher) {
  const html = /*html*/ `
        <li>${teacher.name} - ${teacher.email}</li>
    `;
  document
    .querySelector("#teachers-list")
    .insertAdjacentHTML("beforeend", html);
}
