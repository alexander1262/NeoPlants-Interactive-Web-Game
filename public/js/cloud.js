const screenTwo = window.innerWidth + 750;

const cloud1 = anime({
  targets: '.cloud1',
  translateX: screenTwo,
  translateY: 0,
  easing: 'linear',
  duration: 25000,
  loop: true,
  delay: 700,
});

const cloud2 = anime({
  targets: '.cloud2',
  translateX: screenTwo,
  translateY: 0,
  easing: 'linear',
  duration: 20000,
  loop: true,
  delay: 1000,
});

const cloud3 = anime({
  targets: '.cloud3',
  translateX: screenTwo,
  translateY: 0,
  easing: 'linear',
  duration: 23000,
  loop: true,
  delay: 5000,
});

const cloud4 = anime({
  targets: '.cloud4',
  translateX: screenTwo,
  translateY: 0,
  easing: 'linear',
  duration: 27000,
  loop: true,
  delay: 7000,
});

const cloud5 = anime({
  targets: '.cloud5',
  translateX: screenTwo,
  translateY: 0,
  easing: 'linear',
  duration: 30000,
  loop: true,
  delay: 3000,
});

cloud1();
cloud2();
cloud3();
cloud4();
cloud5();
