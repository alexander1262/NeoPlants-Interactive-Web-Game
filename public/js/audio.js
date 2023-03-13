const music = document.getElementById('music');
const musicToggle = document.getElementById('music-toggle');
const volumeRange = document.getElementById('volume-slider');

function toggleMusic() {
  if (music.paused) {
    music.play();
    music.loop = true;
    musicToggle.innerTest = 'Stop Music';
  } else {
    music.pause();
    musicToggle.innerText = 'Start Music';
  }
}

musicToggle.addEventListener('click', toggleMusic);

volumeRange.addEventListener('input', () => {
  music.volume = volumeRange.value;
});
