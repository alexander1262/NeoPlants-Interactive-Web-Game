const sunDisplay = document.querySelector('.sun');

const sun = function () {
  anime({
    targets: '.sun',
    translateX: 4560,
    translateY: 1000,
    easing: 'easeInOutSine',
    duration: 41600,
  });
};
const moon = function () {
  anime({
    targets: '.moon',
    translateX: 4560,
    translateY: 1000,
    easing: 'easeInOutSine',
    duration: 41600,
  });
};

let seconds = 116;

// setInterval(sun, seconds)

// Create a timer
const movement = function () {
  const timer = setInterval(() => {
    seconds -= 1;
    console.log(seconds);
    if (seconds === 114) {      
      sun();
    }
    if (seconds === 58) {
      moon();
    }
    if (seconds === 10) {         
      anime({
        targets: '.sun',        
        translateX: -560,
      });
    }
    
    if (seconds === 0) {
      anime({
        targets: '.moon',        
        translateX: -560,
      });
      clearInterval(timer);
      seconds = 116;
      movement();
    }
  }, 1000);
};

movement();
