"use strict";

const animals = [
  { name: "Morten", type: "horse", age: 3 },
  { name: "Lars", type: "horse", age: 12 },
  { name: "Bo", type: "dog", age: 4 },
];

window.addEventListener("load", initApp);

function initApp() {
  console.log("initApp is working!");
  document
    .querySelector("#create-form")
    .addEventListener("submit", createAnimal);
  displayAnimals();
}

function displayAnimals() {
  document.querySelector("tbody").textContent = "";
  animals.sort((a, b) => a.age - b.age);
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  const html = /*html*/ `
        <tr>
            <td>${animal.name}</td>
            <td>${animal.type}</td>
            <td>${animal.age}</td>
        </tr>
    `;
  document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
}

function createAnimal(event) {
  event.preventDefault();
  const form = event.target;
  const newAnimal = {
    name: form.name.value,
    type: form.type.value,
    age: form.age.value,
  };
  animals.push(newAnimal);
  displayAnimals();
}
