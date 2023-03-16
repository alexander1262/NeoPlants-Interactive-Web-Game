const sunDisplay = document.querySelector('.sun');

const sun = function () {
  anime({
    targets: '.sun',
    translateX: 4560,
    translateY: 800,
    easing: 'easeInOutSine',
    duration: 41600,
  });
};
const moon = function () {
  anime({
    targets: '.moon',
    translateX: 4560,
    translateY: 800,
    easing: 'easeInOutSine',
    duration: 41600,
  });
};

let seconds = 90;

// setInterval(sun, seconds)

// Create a timer
const movement = function () {
  const timer = setInterval(() => {
    seconds -= 1;
    console.log(seconds);
    if (seconds === 88) {
      sunDisplay.style.visibility = 'hidden';
      sun();
    }
    if (seconds === 48) {
      document.body.style.backgroundImage =
        'url(../images/newnightskytest.png)';
      moon();
    }
    if (seconds === 10) {
      anime({
        targets: '.sun',
        translateX: -150,
      });
    }

    if (seconds === 0) {
      document.body.style.backgroundImage = 'url(../images/newdayskytest.png)';
      anime({
        targets: '.moon',
        translateX: -150,
      });

      clearInterval(timer);
      seconds = 90;
      movement();
    }
  }, 1000);
};

movement();
