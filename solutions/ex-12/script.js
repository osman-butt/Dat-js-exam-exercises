"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", initApp);

function initApp() {
  console.log(courses);
  console.log("initApp is working!");
  displayCourses();
}

function displayCourses() {
  sortCourses();
  courses.forEach(displayCourse);
}

function displayCourse(course) {
  const html = /*html*/ `
    <li>${course.name} - ${course.ectsPoints}</li>
  `;
  document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
}

function sortCourses() {
  courses.sort((a, b) => a.ectsPoints - b.ectsPoints);
}
