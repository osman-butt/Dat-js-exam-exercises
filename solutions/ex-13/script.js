"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", initApp);

function initApp() {
  console.log("initApp is working!");
  document
    .querySelector("#select-filter-ects")
    .addEventListener("change", filterByEcts);
  displayCourses(courses);
}

function displayCourses(courses) {
  document.querySelector("#courses-list").textContent = "";
  courses.forEach(displayCourse);
}

function displayCourse(course) {
  const html = /*html*/ `
        <li>${course.name} - ${course.ectsPoints}</li>
    `;
  document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
}

function filterByEcts() {
  const filterChoice = document.querySelector("#select-filter-ects").value;
  if (filterChoice === "all") {
    let filteredList = structuredClone(courses);
    displayCourses(filteredList);
  } else {
    let filteredList = courses.filter(
      course => course.ectsPoints === Number(filterChoice)
    );
    displayCourses(filteredList);
  }
}
