"use strict";

window.addEventListener("load", initApp);

let songs = [];

async function initApp() {
  console.log("initApp is working!");
  await getSongs();
  showSongs();
}

async function getSongs() {
  const res = await fetch("playlist.json");
  songs = await res.json();
  return songs;
}

function showSongs() {
  document.querySelector("#songlist").textContent = "";
  songs.forEach(showSong);
}

function showSong(song) {
  const html = /*html*/ `
        <li>${song.artist}: ${song.title} (${song.duration}) <button>Up vote</button></li>
    `;
  document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
  document
    .querySelector("#songlist li:last-child button")
    .addEventListener("click", () => upvoteClicked(song));
}

function upvoteClicked(song) {
  console.log("upvoteClicked");
  const index = songs.findIndex(item => item.title === song.title);
  const indexNew = index - 1;
  if (index > 0) {
    songs.splice(indexNew, 2, song, songs[indexNew]);
    showSongs();
  }
}
