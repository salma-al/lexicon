// Slider

var splide = new Splide('.splide', {
  perPage: 3,
  perMove: 1,
  gap: '1.8em',
  drag: true,
  waitForTransition: true,
  wheel: true,
  pagination: true,
  arrows: false,
  releaseWheel: true,
  padding: '1em',

  breakpoints: {
    991: {
      perPage: 2,
      gap: '.7rem',
    },
    767: {
      perPage: 1,
      gap: '.7rem',
    },
  },
});

splide.mount();

// -----------------------
// Mouse event animation

// Select all cards
var cards = document.querySelectorAll('.card');

// Iterate over each card
cards.forEach(function (card) {
  var image = card.querySelector('img');

  card.addEventListener('mousemove', function (e) {
    var rect = card.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    var centerX = rect.width / 2;
    var centerY = rect.height / 2;

    var moveX = (x - centerX) / centerX;
    var moveY = (y - centerY) / centerY;

    image.style.transform =
      'translate(' + moveX * 10 + 'px, ' + moveY * 10 + 'px)';
  });

  card.addEventListener('mouseleave', function () {
    image.style.transform = 'translate(0, 0)';
  });
});
