// const cloudDisplayOne = $('.cloud1');
// const cloudDisplayTwo = $('.cloud2');
// const cloudDisplayThree = $('.cloud3');
// const cloudDisplayFour = $('.cloud4');
// const cloudDisplayFive = $('.cloud5');
const screenTwo = window.innerWidth + 750;

const cloud1 = anime({
  targets: '.cloud1',
  translateX: screenTwo,
  translateY: 0,
  easing: 'linear',
  duration: 25000,
  loop: true,
  //   delay: anime.stagger(700, { easing: 'easeINQuad' }),
});

const cloud2 = anime({
  targets: '.cloud2',
  translateX: screenTwo,
  translateY: 0,
  easing: 'linear',
  duration: 20000,
  loop: true,
  //   delay: anime.stagger(1200),
});

const cloud3 = anime({
  targets: '.cloud3',
  translateX: screenTwo,
  translateY: 0,
  easing: 'linear',
  duration: 23000,
  loop: true,
  //   delay: anime.stagger(1000),
});

const cloud4 = anime({
  targets: '.cloud4',
  translateX: screenTwo,
  translateY: 0,
  easing: 'linear',
  duration: 27000,
  loop: true,
  //   delay: anime.stagger(100),
});

const cloud5 = anime({
  targets: '.cloud5',
  translateX: screenTwo,
  translateY: 0,
  easing: 'linear',
  duration: 30000,
  loop: true,
  //   delay: anime.stagger(500),
});

cloud1();
cloud2();
cloud3();
cloud4();
cloud5();
