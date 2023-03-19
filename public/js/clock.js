/* eslint-disable prefer-template */
// create a function to create the clock element
function clock() {
  // collect values from the clock handlebars
  const hours = document.getElementById('hour');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');
  const amPm = document.getElementById('ampm');

  // assign hour, minutes, seconds, and am/pm
  let hourClock = new Date().getHours();
  let minuteClock = new Date().getMinutes();
  let secondClock = new Date().getSeconds();
  let am = 'AM';
  // If hour is bigger than 12, set to pm and rest 12 to get pm hours
  if (hourClock > 12) {
    hourClock -= 12;
    am = 'PM';
  }

  if (hourClock >= 12) {
    am = 'PM';
  }

  // add a cero before hour if hour is less than 10
  hourClock = hourClock < 10 ? '0' + hourClock : hourClock;
  minuteClock = minuteClock < 10 ? '0' + minuteClock : minuteClock;
  secondClock = secondClock < 10 ? '0' + secondClock : secondClock;

  // assign innerHTML to hour, minutes, seconds, am/pm
  hours.innerHTML = hourClock;
  minutes.innerHTML = minuteClock;
  seconds.innerHTML = secondClock;
  amPm.innerHTML = am;
}

// set an interval to call the function clock every second
const interval = setInterval(clock, 1000);
