"use strict";

const products = [
  { name: "mælk", price: 15, inStock: true },
  { name: "kaffe", price: 40, inStock: false },
  { name: "smør", price: 25, inStock: true },
];

window.addEventListener("load", initApp);

function initApp() {
  console.log("initApp is working!");
  document
    .querySelector("#list-container")
    .insertAdjacentHTML("beforeend", `<ul id="list"></ul>`);
  document
    .querySelector("#select-sort-by")
    .addEventListener("change", sortProducts);
  displayProducts();
}

function displayProducts() {
  document.querySelector("#list").textContent = "";
  products.forEach(displayProduct);
}
function displayProduct(product) {
  const html = /*html*/ `
        <li>${product.name} - ${product.inStock} - ${product.price}</li>
    `;
  document.querySelector("#list").insertAdjacentHTML("beforeend", html);
}

function sortProducts() {
  const sortBy = document.querySelector("#select-sort-by").value;
  if (sortBy === "price") {
    console.log(sortBy);
    products.sort((a, b) => a.price - b.price);
  } else if (sortBy === "name") {
    products.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "inStock") {
    products.sort((a, b) => b.inStock - a.inStock);
  }
  displayProducts();
}
