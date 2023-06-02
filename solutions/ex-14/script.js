"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", initApp);

function initApp() {
  console.log("initApp is working!");
  console.log(courses);
  sortByStartDate();
  showCourses();
}

function showCourses() {
  courses.forEach(showCourse);
}

function showCourse(course) {
  const html = /*html*/ `
        <li>${course.name} - ${course.startDate} - ${course.ectsPoints} ECTS</li>
    `;
  document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
}

function sortByStartDate() {
  courses.sort(
    (course1, course2) =>
      new Date(course1.startDate) - new Date(course2.startDate)
  );
}
