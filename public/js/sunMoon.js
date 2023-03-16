const sunDisplay = $('.sun');
const moonDisplay = $('.moon');
const screen = window.innerWidth + 50;

let seconds = 360;

// Create a timer
const movement = function () {
  const timer = setInterval(() => {
    seconds -= 1;
    console.log(seconds);
    if (seconds === 88) {
      sunDisplay.style.visibility = 'hidden';
      sun();
    }
    if (seconds === 178) {
      sunDisplay.addClass('erase');
      anime({
        targets: '.sun',
        translateX: -150,
      });
      document.body.style.backgroundImage =
        'url(../images/newnightskytest.png)';
      moon();
    }

    if (seconds === 0) {
      document.body.style.backgroundImage = 'url(../images/newdayskytest.png)';
      moonDisplay.addClass('erase');
      anime({
        targets: '.moon',
        translateX: -150,
      });

      clearInterval(timer);
      seconds = 360;

      movement();
    }
  }, 1000);
};

const sun = function () {
  anime({
    targets: '.sun',
    translateX: screen,
    translateY: 100,
    easing: 'easeInOutSine',
    duration: 50000,
  });
};
const moon = function () {
  anime({
    targets: '.moon',
    translateX: screen,
    translateY: 100,
    easing: 'easeInOutSine',
    duration: 50000,
  });
};

movement();
