"use strict";

const products = [
  { name: "kaffe", price: 40, inStock: true },
  { name: "smør", price: 23, inStock: false },
  { name: "sodavand", price: 18, inStock: true },
];

window.addEventListener("load", initApp);

function initApp() {
  console.log("initApp is working!");
  document
    .querySelector("#create-form")
    .addEventListener("submit", createNewProduct);
  showProducts();
}

function showProducts() {
  console.log(products);
  document.querySelector("#products").textContent = "";
  const productsInStock = products.filter(item => item.inStock);
  productsInStock.forEach(showProduct);
}

function showProduct(product) {
  const html = /*html*/ `
        <li>${product.name} - ${product.price}</li>
    `;
  document.querySelector("#products").insertAdjacentHTML("beforeend", html);
}

function createNewProduct(event) {
  console.log("createNewProduct");
  event.preventDefault();
  const form = event.target;
  console.log(form.inStock.checked);
  const newProduct = {
    name: form.name.value,
    price: form.price.value,
    inStock: form.inStock.checked,
  };
  products.push(newProduct);
  showProducts();
}
