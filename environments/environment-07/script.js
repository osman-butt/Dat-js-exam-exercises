"use strict";

window.addEventListener("load", initApp);

let students = [];

function initApp() {
  console.log("App is running!");
  document
    .querySelector("#create-student-form")
    .addEventListener("submit", submitClicked);
}

function submitClicked(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const age = Number(form.age.value);

  addStudent(name, email, age);
  displayStudents();
}

function addStudent(name, email, age) {
  const newStudent = { name, email, age };
  students.push(newStudent);
}

function displayStudents() {
  console.log(students);
  document.querySelector("#students-table-body").textContent = "";
  students.sort((a, b) => a.age - b.age);
  students.forEach(displayStudent);
}

function displayStudent(student) {
  console.log(student);
  const table = document.querySelector("#students-table-body");
  if (Number(student.age) >= 18) {
    const html = /*html*/ `
        <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
          </tr>
    `;
    table.insertAdjacentHTML("beforeend", html);
  }
}
