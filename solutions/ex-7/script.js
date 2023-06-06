"use strict";

window.addEventListener("load", initApp);

const products = [
  { name: "kaffe", price: 50, inStock: true },
  { name: "cola", price: 20, inStock: true },
  { name: "vaskepulver", price: 70, inStock: false },
];

function initApp() {
  console.log("initApp is working!");
  document
    .querySelector("#create-form")
    .addEventListener("submit", createNewProduct);
  showProducts();
}

function showProducts() {
  document.querySelector("#products").textContent = "";
  //   products.sort((a, b) => a.price - b.price);
  products.sort((a, b) => b.inStock - a.inStock);
  products.forEach(showProduct);
}

function showProduct(product) {
  const html = /*html*/ `
        <li>${product.name} - ${product.price} - ${product.inStock}</li>
    `;
  document.querySelector("#products").insertAdjacentHTML("beforeend", html);
}

function createNewProduct(event) {
  event.preventDefault();
  const form = event.target;
  const newProduct = {
    name: form.name.value,
    price: form.price.value,
    inStock: form.inStock.checked,
  };
  products.push(newProduct);
  showProducts();
}
