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
        console.log(data.charScore);
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
    el.style.width = ++i;
    el.innerHTML = ++i;
    console.log(i);
    el.dataset.life = i;
};

const feedMeButton = document.getElementById('feedMe');
const playButton = document.getElementById('play');
const musicButton = document.getElementById('dance');
const sleepButton = document.getElementById('sleep');

feedMeButton.addEventListener('click', () => health());
playButton.addEventListener('click', () => health());
musicButton.addEventListener('click', () => health());
sleepButton.addEventListener('click', () => health());
