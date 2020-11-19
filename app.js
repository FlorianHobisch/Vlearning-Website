// smooth scrolling
const links = document.querySelectorAll('.main-head nav ul li a');
const home = document.getElementById('logo');
const btn = document.querySelector('.btn-animation');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;
  const cards = document.querySelector('.cards');
  if (href === '#benefits') {
    cards.classList.add('animation');
  } else {
    cards.classList.remove('animation');
  }

  scroll({
    top: offsetTop,
    behavior: 'smooth',
  });
}

home.addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

btn.addEventListener('click', function test(e) {
  const downBtn = document.querySelector('.btn-animation a');
  e.preventDefault();
  const href = downBtn.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth',
  });
});

// animation on the home site
const textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime
  .timeline({ loop: true })
  .add({
    targets: '.ml1 .letter',
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: 'easeOutExpo',
    duration: 500,
    delay: (el, i) => 70 * (i + 1),
  })
  .add({
    targets: '.ml1 .line',
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: 'easeOutExpo',
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i),
  })
  .add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 1000,
  });
