const music = document.getElementById('music');
const musicToggle = document.getElementById('music-toggle');
const volumeRange = document.getElementById('volume-slider');

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

volumeRange.addEventListener('input', () => {
  music.volume = volumeRange.value;
});

const audio = document.getElementById('music');
const sources = document.querySelectorAll('.play-list');
const skip = document.getElementById('skip');
const back = document.getElementById('back');
let currentSource = 0;

function skipTrack() {
  currentSource = (currentSource + 1) % sources.length;
  audio.src = sources[currentSource].src;
  audio.play();
}

function backTrack() {
  currentSource = (currentSource - 1) % sources.length;
  audio.src = sources[currentSource].src;
  audio.play();
}

skip.addEventListener('click', skipTrack);
back.addEventListener('click', backTrack);
