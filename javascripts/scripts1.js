const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
});
const squares = document.querySelectorAll('.square');
const hero = document.querySelector('.hero');

const objects = [];

squares.forEach(square => {

    const obj = {
        el: square,

        x: Math.random() * window.innerWidth * 0.6,
        y: Math.random() * window.innerHeight * 0.6,

    vx: (Math.random() * 2 + 1.5) * (Math.random() > 0.5 ? 1 : -1),
    vy: (Math.random() * 2 + 1.5) * (Math.random() > 0.5 ? 1 : -1),

        size: square.offsetWidth
    };

    objects.push(obj);
});



const slides = document.querySelectorAll('.slide');

let current = 0;
const step = 14; // расстояние между центрами в vw

function updateCarousel() {

    const total = slides.length;

    slides.forEach((slide, index) => {

        let offset = index - current;

        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;

        let scale = 0.7;
        let opacity = 0.4;
        let z = 1;

        if (offset === 0) {
            scale = 1.15;
            opacity = 1;
            z = 5;
        }
        else if (Math.abs(offset) === 1) {
            scale = 0.9;
            opacity = 0.8;
            z = 4;
        }
        else if (Math.abs(offset) === 2) {
            scale = 0.75;
            opacity = 0.6;
            z = 3;
        }

        slide.style.transform =
            `translate(-50%, -50%) translateX(${offset * step}vw) scale(${scale})`;

        slide.style.opacity = opacity;
        slide.style.zIndex = z;

                if (offset === 0) {
            scale = 1.15;
        }
        else if (Math.abs(offset) === 1) {
            scale = 0.9;
        }
        else if (Math.abs(offset) === 2) {
            scale = 0.75;
        }
        slides.forEach((slide, index) => {

    let offset = index - current;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    // показываем только 5 элементов
    if (Math.abs(offset) > 2) {
        slide.style.opacity = 0;
        slide.style.pointerEvents = 'none';
        return;
    }

    let scale;
    let z;

    if (offset === 0) {
        scale = 1.15;
        z = 5;
    }
    else if (Math.abs(offset) === 1) {
        scale = 0.9;
        z = 4;
    }
    else {
        scale = 0.75;
        z = 3;
    }

    slide.style.opacity = 1;
    slide.style.zIndex = z;

    slide.style.transform =
        `translate(-50%, -50%) translateX(${offset * step}vw) scale(${scale})`;
});
    });
}

function nextSlide() {
    current = (current + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    updateCarousel();
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

updateCarousel();

setInterval(nextSlide, 3000);







const images = [
  "images/gas.svg",
  "images/voln.svg",
  "images/lovi.svg"
];

const img = document.querySelector('.brand-image');
const section = document.querySelector('.brand-image-wrapper');

let currentIndex = 0;
let intervalId = null;
let started = false;

// бесконечная смена изображений
function startImageLoop() {
  intervalId = setInterval(() => {
    img.classList.add('fade-out');

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      img.src = images[currentIndex];
      img.classList.remove('fade-out');
    }, 300);

  }, 1500);
}

// запуск при появлении секции
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !started) {
      started = true;

      setTimeout(() => {
        img.classList.add('move-down');
        startImageLoop();
      }, 2000);
    }
  });
}, {
  threshold: 0.5
});

observer.observe(section);