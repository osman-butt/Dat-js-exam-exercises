"use strict";

window.addEventListener("load", initApp);

const animals = [];

function initApp() {
  console.log("initApp is working!");
  document
    .querySelector("#create-form")
    .addEventListener("submit", createAnimalClicked);
}

function createAnimalClicked(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const type = form.type.value;
  const age = form.age.value;
  addAnimal(name, type, age);
}

function addAnimal(name, type, age) {
  const newAnimal = { name, type, age };
  animals.push(newAnimal);
  console.log(animals);
  displayAnimals();
}

function displayAnimals() {
  document.querySelector("tbody").textContent = "";
  animals.sort((animal1, animal2) => animal1.name.localeCompare(animal2.name));
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
