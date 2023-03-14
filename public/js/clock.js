/* eslint-disable prefer-template */
function clock() {
  const hours = document.getElementById('hour');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');
  const amPm = document.getElementById('ampm');

  let hourClock = new Date().getHours();
  let minuteClock = new Date().getMinutes();
  let secondClock = new Date().getSeconds();
  let am = 'AM';
  if (hourClock > 12) {
    hourClock -= 12;
    am = 'PM';
  }
  hourClock = hourClock < 10 ? '0' + hourClock : hourClock;
  minuteClock = minuteClock < 10 ? '0' + minuteClock : minuteClock;
  secondClock = secondClock < 10 ? '0' + secondClock : secondClock;

  hours.innerHTML = hourClock;
  minutes.innerHTML = minuteClock;
  seconds.innerHTML = secondClock;
  amPm.innerHTML = am;
}

const interval = setInterval(clock, 1000);
