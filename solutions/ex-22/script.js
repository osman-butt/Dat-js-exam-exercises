"use strict";

window.addEventListener("load", initApp);

let playlist = [];

async function initApp() {
  console.log("initApp is working!");
  await getPlaylist();
  showSongs();
}

async function getPlaylist() {
  const res = await fetch("playlist.json");
  playlist = await res.json();
}

function showSongs() {
  console.log(playlist);
  document.querySelector("#songlist").textContent = "";
  playlist.forEach(showSong);
}

function showSong(song) {
  const html = /*html*/ `
        <li>${song.artist} - ${song.title}  (${song.duration}) <button class="remove">Remove</button></li>
    `;
  document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
  document
    .querySelector("#songlist li:last-child .remove")
    .addEventListener("click", () => removeSong(song));
}

function removeSong(song) {
  const index = playlist.findIndex(obj => obj.title === song.title);
  playlist.splice(index, 1);
  showSongs();
}
