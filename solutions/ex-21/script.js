"use strict";

window.addEventListener("load", initApp);

const students = [];

function initApp() {
  console.log("initApp is working!");
  document
    .querySelector("#create-student-form")
    .addEventListener("submit", addNewStudent);
}

function addNewStudent(event) {
  event.preventDefault();
  const form = event.target;
  const newStudent = {
    name: form.name.value,
    email: form.email.value,
    age: form.age.value,
  };
  students.push(newStudent);
  showStudents();
}

function showStudents() {
  console.log(students);
  document.querySelector("#students-table-body").textContent = "";
  const seniorStudents = students.filter(student => student.age >= 18);
  seniorStudents.sort((a, b) => a.name.localeCompare(b.name));
  seniorStudents.forEach(showStudent);
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
