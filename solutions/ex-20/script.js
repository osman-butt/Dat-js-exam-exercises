"use strict";

window.addEventListener("load", initApp);

const students = [];

function initApp() {
  console.log("initApp is working!");
  document
    .querySelector("#create-student-form")
    .addEventListener("submit", createStudentClicked);
}

function showStudents() {
  document.querySelector("#students-table-body").textContent = "";
  students.sort((a, b) => a.age - b.age);
  students.forEach(showStudent);
}

function showStudent(student) {
  const html = /*html*/ `
        <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
          </tr>
    `;
  document
    .querySelector("#students-table-body")
    .insertAdjacentHTML("beforeend", html);
}

function createStudentClicked(event) {
  event.preventDefault();
  const form = event.target;

  const name = form.name.value;
  const email = form.email.value;
  const age = form.age.value;
  students.push({ name, email, age });
  showStudents();
}
