/* eslint-disable no-plusplus */
/* eslint-disable no-inner-declarations */
/* eslint-disable prettier/prettier */
const life = 100;

const progressBar = document.createElement('div');
progressBar.id = 'myBar';
progressBar.innerHTML = '10%';
progressBar.style.color = 'red';
document.body.prepend(progressBar);

function decay() {
    if (life === 100) {
        const elem = document.getElementById('myBar');
        let width = 99;
        const id = setInterval(frame, 100000);
        function frame() {
            if (width >= 100 || width <= 0) {
                clearInterval(id);
                alert('You killed me!')
            } else {
                width--;
                elem.style.width = `${width}%`;
                elem.innerHTML = `${width}%`;
            }
        }
    }
}



decay();



// function health() {
//     let i = 20;
//     ++i;
//     const elem = document.getElementById('myBar');
//     elem.style.width = i;
//     elem.innerHTML = i;
//     console.log(i);

// };
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





// feedMeButton.addEventListener('click', health());
// playButton.addEventListener('click', health(life));
// musicButton.addEventListener('click', health(life));
