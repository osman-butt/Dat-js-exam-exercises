"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", initApp);

function initApp() {
  console.log("initApp is working!");
  console.log(courses);
  showCourses();
  addNewCourse("JavaScript", "2024-01-01", "2024-05-01", 5, 50, "TEST TEACHER");
}

function showCourses() {
  document.querySelector("#courses-list").textContent = "";
  courses.forEach(showCourse);
}

function showCourse(course) {
  const html = /*html*/ `
        <li>${course.name} - ${course.ectsPoints} - ${course.teacher}</li>
    `;
  document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
}

function addNewCourse(
  name,
  startDate,
  endDate,
  ectsPoints,
  maxStudents,
  teacher
) {
  const newCourse = {
    name,
    startDate,
    endDate,
    ectsPoints,
    maxStudents,
    teacher,
  };
  courses.push(newCourse);
  showCourses();
}
