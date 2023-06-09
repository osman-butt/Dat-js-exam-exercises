"use strict";

window.addEventListener("load", initApp);

const courses = [];

function initApp() {
  console.log("initApp is working!");
  const data = getProduct();
  document
    .querySelector("#increment")
    .addEventListener("click", () => incrementClicked(data));
  document
    .querySelector("#decrement")
    .addEventListener("click", () => decrementClicked(data));
  document.querySelector("#create-form").addEventListener("submit", addCourse);
}

function addCourse(event) {
  event.preventDefault();
  const form = event.target;
  const languageCheck = [
    form.lcheck1.checked ? form.lcheck1.value : "",
    form.lcheck2.checked ? form.lcheck2.value : "",
    form.lcheck3.checked ? form.lcheck3.value : "",
  ];
  const language = languageCheck.filter(a => a !== "").join(",");
  const newCourse = {
    name: form.name.value,
    type: form.type.value,
    ects: form.ects.value,
    language: language,
    sendEmails: form.rradio1.checked,
    acitiveCourse: form.inactive.checked,
    id: Date.now() + "",
  };
  courses.push(newCourse);
  console.log(courses);
  showCourses();
  form.reset();
}

function showCourses() {
  document.querySelector("tbody").textContent = "";
  courses.forEach(showCourse);
  addTotal();
}

function addTotal() {
  const totalECTS = courses.reduce(
    (acc, course) => Number(course.ects) + acc,
    0
  );
  const html = /*html*/ `
  <tr>
    <td></td>
    <td style="font-weight: bold;">${totalECTS}</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  `;
  document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
}

function showCourse(course) {
  const html = /*html*/ `
  <tr>
    <td>${course.name}</td>
    <td>${course.ects}</td>
    <td>${course.language}</td>
    <td>${course.type}</td>
    <td><button class="delete">DELETE</button></td>
  </tr>
  `;
  document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
  document
    .querySelector("tbody tr:last-child td:last-child button.delete")
    .addEventListener("click", () => deleteCourse(course));
}

function deleteCourse(course) {
  const index = courses.findIndex(a => a.id === course.id);
  courses.splice(index, 1);
  showCourses();
}

function incrementClicked(data) {
  data.increment();
}

function decrementClicked(data) {
  data.decrement();
}

function getProduct() {
  const newProduct = { name: "Coffee", price: 50, quantity: 10 };

  function decrementQuantity() {
    if (newProduct.quantity !== 0) {
      newProduct.quantity--;
      console.log(newProduct);
    } else {
      console.log("STOCK IS EMPTY");
    }
  }

  function incrementQuantity() {
    newProduct.quantity++;
    console.log(newProduct);
  }

  return {
    product: newProduct,
    decrement: decrementQuantity,
    increment: incrementQuantity,
  };
}
