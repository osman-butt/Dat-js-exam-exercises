"use strict";

window.addEventListener("load", initApp);

const students = [];

function initApp() {
  console.log("initApp is working!");
  document
    .querySelector("#create-student-form")
    .addEventListener("submit", createNewStudent);
  console.log(students);
}

function createNewStudent(event) {
  event.preventDefault();
  const form = event.target;

  const newStudent = {
    name: form.name.value,
    email: form.email.value,
    age: form.age.value,
  };

  students.push(newStudent);
  if (!validEmail(form.email.value)) {
    students.pop();
  }
  console.log(students);
}

function validEmail(email) {
  const prefix = email.split("@")[0].trim();
  const postfix = email.split("@")[1];
  return prefix.length >= 4 && postfix === "stud.kea.dk";
}
