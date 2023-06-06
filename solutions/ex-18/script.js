"use strict";

window.addEventListener("load", initApp);

const basket = [];
let products = [];

async function initApp() {
  console.log("initApp is working!");
  await getProducts();
  showProducts();
}

async function getProducts() {
  const res = await fetch("products.json");
  products = await res.json();
  return products;
}

function showProducts() {
  products.forEach(showProduct);
}

function showProduct(product) {
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
  // Check if product exists in basket
  const item = structuredClone(product);
  item.quantity = 1;
  const index = basket.findIndex(row => row.name === product.name);
  if (index > -1) {
    basket[index].quantity += 1;
  } else {
    basket.push(item);
  }
  showBasket();
}

function showBasket() {
  document.querySelector("tbody").textContent = "";
  basket.forEach(showCart);
  console.log(basket);
  showBasketTotals();
}

function showCart(item) {
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
    .addEventListener("click", () => removeFromBasket(item));
  document
    .querySelector("tbody tr:last-child td .add")
    .addEventListener("click", () => addToBasket(item));
}

function removeFromBasket(item) {
  const index = basket.findIndex(row => row.name === item.name);
  basket[index].quantity > 1
    ? (basket[index].quantity -= 1)
    : basket.splice(index, 1);
  showBasket();
}

function showBasketTotals() {
  document.querySelector("#total-in-basket").textContent = basket.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  document.querySelector("#total-products").textContent = basket.length;
  document.querySelector("#total-price").textContent = basket.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const totalWeight = basket.reduce(
    (acc, item) => acc + item.quantity * item.weight,
    0
  );
  document.querySelector("#total-weight").textContent = totalWeight;
  totalWeight > 2000
    ? document.querySelector(".warning").classList.add("show")
    : document.querySelector(".warning").classList.remove("show");
}
