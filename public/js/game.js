/* eslint-disable no-plusplus */
/* eslint-disable no-inner-declarations */
/* eslint-disable prettier/prettier */
const progressBar = document.createElement('div');
progressBar.id = 'myBar';
progressBar.style.color = 'red';
document.body.prepend(progressBar);

async function getScore() {
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
    }).then((data) => {
        console.log(data);
        const charId = document.getElementById('feedMe');
        charId.dataset.id = data.user_id;
        const bar = document.getElementById('myBar');
        bar.dataset.life = data.charScore;
        bar.innerHTML = data.charScore;
    })
};

getScore();




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
        console.log('You have saved!');
    } else {
        console.log('save unsuccessful');
    }




};

const charButton = document.getElementById('character');
charButton.addEventListener('click', () => save());
