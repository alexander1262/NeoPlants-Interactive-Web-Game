/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable no-inner-declarations */
/* eslint-disable prettier/prettier */
// this creates the bar and styles it
const progressBar = document.createElement('div');
progressBar.id = 'myBar';
progressBar.style.color = 'red';
document.body.prepend(progressBar);
// this function does a fetch call to grab the user saved score
async function getScore() {
  const score = document.getElementById('character');
  const healthBar = score.dataset.id;

  fetch(`/api/character/${healthBar}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    throw new Error('Something went wrong');
  }).then((data) => {

    const charId = document.getElementById('feedMe');
    charId.dataset.id = data.user_id;
    const bar = document.getElementById('myBar');
    bar.dataset.life = data.charScore;
    bar.innerHTML = data.charScore;
  })
};

getScore();



// this function decays the plants health when page loads
const id = setInterval(decay, 10000);

function decay() {

  const elem = document.getElementById('myBar');
  let width = elem.dataset.life;
  --width;
  elem.style.width = `${width}%`;
  elem.dataset.life = width;
  elem.innerHTML = `${width}%`;
  if (width === 0) {
    clearInterval(id);
    alert('You killed me!')
  }
};

// this function increments the health bar when its called
function health() {

  const el = document.getElementById('myBar');
  let i = el.dataset.life;
  if (i <= 100) {
    el.style.width = ++i;
    el.innerHTML = ++i;
    el.dataset.life = i;
  } else if (i >= 101) {
    i = 0;
    el.style.width = i;
    el.innerHTML = i;
    el.dataset.life = i;
    clearInterval(id)
    alert('You Killed me Game OVER!')
  }
};
// these buttons are created here using the id of the element
const feedMeButton = document.getElementById('feedMe');
const playButton = document.getElementById('play');
const musicButton = document.getElementById('dance');
const sleepButton = document.getElementById('sleep');
// this function switches out the picture when the user clicks the appropriate function
function dance() {
  document.getElementById('character').src = '/images/music.webp';
  animateDance();
}
// this function switches out the picture when the user clicks the appropriate function
function feed() {
  document.getElementById('character').src = '/images/cook.webp'
  animateFeed();
}
// this function switches out the picture when the user clicks the appropriate function
function play() {
  document.getElementById('character').src = '/images/mail.webp'
  animatePlay();
}
// this function switches out the picture when the user clicks the appropriate function
function sleep() {
  document.getElementById('character').src = '/images/what.webp'
  animateTired();
}
// animates the plan when the feed button is clicked
const animateFeed = function () {
  // Create a timeline with default parameters
  const tl = anime.timeline({
    easing: 'linear',
    duration: 1000
  });

  // Add children
  tl
    .add({
      targets: '.image2',
      scale: ['0.8', '1.4'],
    })
    .add({
      targets: '.image2',
      scale: ['0.8', '1.4'],
    })
    .add({
      targets: '.image2',
      scale: ['0.8', '1.4'],
    })
    .add({
      targets: '.image2',
      scale: 1,
    });
}
// when the user clicks this button the plant plays
const animatePlay = function () {
  // Create a timeline with default parameters
  const tl = anime.timeline({
    easing: 'linear',
    duration: 10
  });

  // Add children
  tl
    .add({
      targets: '.image2',
      translateY: 10,
    })
    .add({
      targets: '.image2',
      translateX: 8,
    })
    .add({
      targets: '.image2',
      translateY: 15,
    })
    .add({
      targets: '.image2',
      translateX: 16,
    })
    .add({
      targets: '.image2',
      translateY: 20,
    })
}
// when the user clicks the animate button the plant dances
const animateDance = function () {
  // Create a timeline with default parameters
  const tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
  });

  // Add children
  tl
    .add({
      targets: '.image2',
      rotate: 250,
    })
    .add({
      targets: '.image2',
      rotate: 0,
    })
    .add({
      targets: '.image2',
      rotate: -16,
    })
    .add({
      targets: '.image2',
      rotate: 0,
    });

}
// the user clicks the button it animates the plant
const animateTired = function () {
  // Create a timeline with default parameters
  const tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
  });

  // Add children
  tl
    .add({
      targets: '.image2',
      opacity: '0.8',
    })
    .add({
      targets: '.image2',
      opacity: '0.6',
    })
    .add({
      targets: '.image2',
      opacity: '0.4',
    })
    .add({
      targets: '.image2',
      opacity: '0.2',
    })
    .add({
      targets: '.image2',
      opacity: '0',
    })
    .add({
      targets: '.image2',
      opacity: '0',
    })
    .add({
      targets: '.image2',
      opacity: '1',
    });
}

// event listeners for when the user click these buttons to run the functions associated with them
feedMeButton.addEventListener('click', () => health());
feedMeButton.addEventListener('click', () => feed());
playButton.addEventListener('click', () => health());
playButton.addEventListener('click', () => play());
musicButton.addEventListener('click', () => health());
musicButton.addEventListener('click', () => dance());
sleepButton.addEventListener('click', () => health());
sleepButton.addEventListener('click', () => sleep());
sleepButton.addEventListener('click', () => sleep());
// save function to save the users health bar when the user clicks the plant
async function save() {
  const saveMe = document.getElementById('feedMe');
  const saveChar = saveMe.dataset.id;
  const bar = document.getElementById('myBar');
  const barLife = bar.dataset.life;
  const barScore = {
    user_id: saveChar,
    charScore: barLife,
  };

  const sav = await fetch(`/api/character/${saveChar}`, {
    body: JSON.stringify(barScore),
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
  })
  if (sav.ok) {
    window.location.reload();
    console.log('You have saved!');
  } else {
    console.log('save unsuccessful');
  }




};
// create button and listener to call character function
const charButton = document.getElementById('character');
charButton.addEventListener('click', () => save());
