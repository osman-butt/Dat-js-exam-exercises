"use strict";

window.addEventListener("load", initApp);

const songs = [];

function initApp() {
  console.log("initApp is working!");
  document
    .querySelector("#add-song-form")
    .addEventListener("submit", submitClicked);
  document
    .querySelector("#sort-songs-form")
    .addEventListener("change", sortSongs);
}

function submitClicked(event) {
  event.preventDefault();
  console.log("submitClicked");
  const form = event.target;

  const name = form.name.value;
  const title = form.title.value;
  const duration = form.duration.value;

  addSong(name, title, duration);
  sortSongs();
  displaySongs();
}

function addSong(name, title, duration) {
  const newSong = { name, title, duration };
  songs.push(newSong);
}

function displaySongs() {
  document.querySelector("#songlist").textContent = "";
  songs.forEach(displaySong);
}

function displaySong(song) {
  const html = /*html*/ `
        <li>${song.name}: ${song.title} (${song.duration})</li>
    `;
  document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
}

function sortSongs() {
  console.log("sort");
  if (document.querySelector("#sort-artist").checked) {
    songs.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    songs.sort((a, b) => a.title.localeCompare(b.title));
  }
  displaySongs();
}
