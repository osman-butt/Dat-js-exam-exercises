"use strict";

window.addEventListener("load", initApp);

const basket = [];

async function initApp() {
  console.log("initApp is working!");
  const products = await getProducts();
  console.log(products);
  products.forEach(showProducts);
}

async function getProducts() {
  const productsJson = await fetch("products.json");
  const products = await productsJson.json();
  return products;
}

function showProducts(product) {
  const html = /*html*/ `
    <article>
      <h3>${product.name}</h3>
      <p>vægt: ${product.weight} g</p>
      <p>pris: ${product.price},-</p>
      <button>Læg i kurv</button>
    </article>
  `;
  document.querySelector("#products").insertAdjacentHTML("beforeend", html);
  document
    .querySelector("#products article:last-child button")
    .addEventListener("click", addToBasket);

  function addToBasket() {
    product.quantity = 1;
    showBasket(product);
    basket.push(product);
  }
}

function showBasket(product) {
  const html = /*html*/ `
    <tr>
      <td>
        <button class="remove">-</button>
          ${product.quantity}
        <button class="add">+</button>
      </td>
      <td>${product.name}</td>
      <td>${product.price},-</td>
      <td>${product.quantity * product.price},-</td>
    </tr>
  `;
  document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
}
