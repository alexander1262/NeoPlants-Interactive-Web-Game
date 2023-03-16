/* eslint-disable no-plusplus */
/* eslint-disable no-inner-declarations */
/* eslint-disable prettier/prettier */
function getScore() {
    const score = document.getElementById('character');
    const healthBar = score.dataset.id;
    console.log(healthBar);
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
    })
        .then((data) => {
            console.log(data);
        });



};
getScore();

const progressBar = document.createElement('div');
progressBar.id = 'myBar';
progressBar.innerHTML = '10%';
progressBar.style.color = 'red';
document.body.prepend(progressBar);

const bar = document.getElementById('myBar');
bar.dataset.life = 100;

const id = setInterval(decay, 10000);

function decay() {

    const elem = document.getElementById('myBar');
    let width = elem.dataset.life;
    console.log(width);
    --width;
    elem.style.width = `${width}%`;
    elem.dataset.life = width;
    elem.innerHTML = `${width}%`;
    if (width === 0) {
        clearInterval(id);
        alert('You killed me!')
    }
};









function health() {

    const el = document.getElementById('myBar');
    let i = el.dataset.life;
    if (i <= 100) {
    el.style.width = ++i;
    el.innerHTML = ++i;
    console.log(i);
    el.dataset.life = i;
    }
};

const feedMeButton = document.getElementById('feedMe');
const playButton = document.getElementById('play');
const musicButton = document.getElementById('dance');
const sleepButton = document.getElementById('sleep');
// const playButtonsDiv = document.createElement('div.buttonWrapper');

// const feedMeButton = document.createElement('button');
// feedMeButton.id = 'feedMe';
// feedMeButton.innerHTML = 'Feed Me Seymour!';
// // document.body.appendChild(feedMeButton);

// const playButton = document.createElement('button');
// playButton.id = 'play';
// playButton.innerHTML = 'Can We Play!';
// // document.body.appendChild(playButton);

// const musicButton = document.createElement('button');
// musicButton.id = 'dance';
// musicButton.innerHTML = 'Dont stop rockin!';
// // document.body.appendChild(musicButton);

// const sleepButton = document.createElement('button');
// sleepButton.id = 'sleep';
// sleepButton.innerHTML = "I'm tired!";
// sleepButton.style.background = 'white';
// document.body.appendChild(sleepButton);

function dance() {
    document.getElementById('character').src = '/images/music.webp';
}

function feed() {
    document.getElementById('character').src = '/images/cook.webp'
}

function play() {
    document.getElementById('character').src = '/images/mail.webp'
}

function sleep() {
    document.getElementById('character').src = '/images/what.webp'
}

feedMeButton.addEventListener('click', () => health());
feedMeButton.addEventListener('click', () => feed());
playButton.addEventListener('click', () => health());
playButton.addEventListener('click', () => play());
musicButton.addEventListener('click', () => health());
musicButton.addEventListener('click', () => dance());
sleepButton.addEventListener('click', () => health());
sleepButton.addEventListener('click', () => sleep());
