"use strict";

import { teachers } from "./teachers.js";

window.addEventListener("load", initApp);

function initApp() {
  console.log("initApp is working!");
  showTeachers();
}

function showTeachers() {
  document.querySelector("#teachers-list").textContent = "";
  teachers.forEach(showTeacher);
}

function showTeacher(teacher) {
  const html = /*html*/ `
    <li>${teacher.name} - ${teacher.email}</li>
  `;
  document
    .querySelector("#teachers-list")
    .insertAdjacentHTML("beforeend", html);
}

function addTeacher(name, email) {
  console.log("addTeacher");
  const newTeacher = { name, email };
  teachers.push(newTeacher);
  showTeachers();
}
