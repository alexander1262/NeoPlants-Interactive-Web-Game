// anime({
//   targets: '.motion-path-demo',
//   translateX: 250,
//   easing: 'easeInOutSine'
// });

let path = anime.path('#path');

anime({
  targets: '.el',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 216000,
  loop: false
});