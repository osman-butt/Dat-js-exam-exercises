"use strict";

window.addEventListener("load", initApp);

let products = [];
const basket = [];

async function initApp() {
  console.log("initApp is working!");
  await getProducts();
}

async function getProducts() {
  const res = await fetch("products.json");
  products = await res.json();
  return products;
}

function addToBasket(product) {
  if (basket.filter(item => item.name === product.name).length > 0) {
    const index = basket.findIndex(item => item.name === product.name);
    basket[index].quantity += 1;
  } else {
    product.quantity = 1;
    basket.push(product);
  }
}

function removeFromBasket(product) {
  if (basket.filter(item => item.name === product.name).length > 0) {
    const index = basket.findIndex(item => item.name === product.name);
    basket[index].quantity > 1
      ? (basket[index].quantity -= 1)
      : basket.splice(index, 1);
  }
}
