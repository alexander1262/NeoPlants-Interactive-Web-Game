// Select all elements needed to start and start music

const music = document.getElementById('music');
const musicToggle = document.getElementById('music-toggle');
const volumeRange = document.getElementById('volume-slider');

// Function starts and stops the music

function toggleMusic() {
  if (music.paused) {
    music.play();
    music.loop = true;
    musicToggle.innerText = 'Pause Music';
  } else {
    music.pause();
    musicToggle.innerText = 'Start Music';
  }
}

musicToggle.addEventListener('click', toggleMusic);

// Adds volume control for the user

volumeRange.addEventListener('input', () => {
  music.volume = volumeRange.value;
});

// Selects elements needed to go to the next track or go back

const audio = document.getElementById('music');
const sources = document.querySelectorAll('.play-list');
const skip = document.getElementById('skip');
const back = document.getElementById('back');
let currentSource = 0;

// Skips the track

function skipTrack() {
  currentSource = (currentSource + 1) % sources.length;
  audio.src = sources[currentSource].src;
  audio.play();
}

// Goes back to the next track

function backTrack() {
  currentSource = (currentSource - 1) % sources.length;
  audio.src = sources[currentSource].src;
  audio.play();
}

skip.addEventListener('click', skipTrack);
back.addEventListener('click', backTrack);
