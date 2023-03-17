// Get sun and moon elements --JQuery--
const sunDisplay = $('.sun');
const moonDisplay = $('.moon');
// get the screen width
const screen = window.innerWidth + 50;

// set duration of sun and moon cycle in seconds
let seconds = 360;

// Function to call the cycle
const movement = function () {
  // Create a timer to manager sun a moon
  const timer = setInterval(() => {
    // reduce seconds by 1
    seconds -= 1;

    // start the sun movement when seconds is equal to 358
    // set the opacity of sun and moon element to 1
    // call sun function
    if (seconds === 358) {
      sunDisplay.fadeTo('slow', 1);
      moonDisplay.fadeTo('slow', 1);
      sun();
    }

    // when seconds is equal to 180
    // set the opacity of sun to cero to erase it from the screen
    if (seconds === 180) {
      sunDisplay.fadeTo('slow', 0);
    }

    // when seconds is equal to 178, get the sun back where it started
    if (seconds === 178) {
      anime({
        targets: '.sun',
        translateX: -150,
      });
      // change the background to night
      document.body.style.backgroundImage =
        'url(../images/newnightskytest.png)';
      // start the moon movement
      moon();
    }

    // when seconds is equal to 2
    // set the opacity of moon to cero to erase it from the screen
    if (seconds === 2) {
      moonDisplay.fadeTo('slow', 0);
    }

    // when seconds is equal to 0
    if (seconds === 0) {
      // change the background to day
      document.body.style.backgroundImage = 'url(../images/newdayskytest.png)';
      // get the moon back where it started
      anime({
        targets: '.moon',
        translateX: -150,
      });
      // Clear the interval
      clearInterval(timer);
      // set seconds
      seconds = 360;
      // Call the function to repeat the cycle
      movement();
    }
  }, 1000);
};

// Animejs function to move the sun
const sun = function () {
  anime({
    targets: '.sun',
    translateX: screen,
    translateY: 100,
    easing: 'easeInOutSine',
    duration: 50000,
  });
};

// Animejs function to move the moon
const moon = function () {
  anime({
    targets: '.moon',
    translateX: screen,
    translateY: 100,
    easing: 'easeInOutSine',
    duration: 50000,
  });
};

// start the animation
movement();
