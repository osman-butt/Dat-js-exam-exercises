"use strict";

window.addEventListener("load", initApp);

const basket = [];

async function initApp() {
  console.log("initApp is working!");
  const products = await getProducts();
  displayProducts(products);
}

async function getProducts() {
  const response = await fetch("products.json");
  const products = await response.json();
  return products;
}

function displayProducts(products) {
  products.forEach(displayProduct);
}

function displayProduct(product) {
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
    .addEventListener("click", () => addToBasket(product));
}

function addToBasket(product) {
  console.log("Added to basket");
  let item = structuredClone(product);
  const index = basket.findIndex(item => item.name === product.name);
  if (index > -1) {
    basket[index].quantity += 1;
  } else {
    item.quantity = 1;
    basket.push(item);
  }
  updateBasket();
}

function updateBasket() {
  document.querySelector("tbody").textContent = "";
  basket.forEach(showBasket);
  document.querySelector("#total-in-basket").textContent = basket.reduce(
    (acc, item) => item.quantity + acc,
    0
  );
  document.querySelector("#total-products").textContent = basket.length;
  document.querySelector("#total-price").textContent = basket.reduce(
    (acc, item) => item.quantity * item.price + acc,
    0
  );
  document.querySelector("#total-weight").textContent = basket.reduce(
    (acc, item) => item.weight * item.quantity + acc,
    0
  );
}
function showBasket(item) {
  const html = /*html*/ `
        <tr>
          <td>
            <button class="remove">-</button>
              ${item.quantity}
            <button class="add">+</button>
          </td>
          <td>${item.name}</td>
          <td>${item.price},-</td>
          <td>${item.quantity * item.price},-</td>
        </tr>
      `;
  document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
  document
    .querySelector("tbody tr:last-child td .remove")
    .addEventListener("click", () => removeItem(item));
  document
    .querySelector("tbody tr:last-child td .add")
    .addEventListener("click", () => addToBasket(item));
}

function removeItem(item) {
  console.log("removeItem");
  const index = basket.findIndex(row => row.name === item.name);
  basket[index].quantity > 1
    ? (basket[index].quantity -= 1)
    : basket.splice(index, 1);
  updateBasket();
}
