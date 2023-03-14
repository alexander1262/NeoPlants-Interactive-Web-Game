/* eslint-disable no-plusplus */
/* eslint-disable no-inner-declarations */
/* eslint-disable prettier/prettier */


const progressBar = document.createElement('div');
progressBar.id = 'myBar';
progressBar.innerHTML = '10%';
progressBar.style.color = 'red';
document.body.prepend(progressBar);

const bar = document.getElementById('myBar');
bar.dataset.life = 100;

function decay() {

    const elem = document.getElementById('myBar');
    let width = elem.dataset.life;
    // function frame() {
    // if (width > 0) { --width }
    console.log(width);
    --width;
    elem.style.width = `${width}%`;
    elem.dataset.life = width;
    elem.innerHTML = `${width}%`;
};




setInterval(decay, 10000);




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





feedMeButton.addEventListener('click', () => health());
playButton.addEventListener('click', () => health());
musicButton.addEventListener('click', () => health());
sleepButton.addEventListener('click', () => health());
