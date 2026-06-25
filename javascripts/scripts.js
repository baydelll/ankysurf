console.log("JS работает");

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

function animateSquares() {

    const rect = hero.getBoundingClientRect();

    objects.forEach(obj => {

        obj.x += obj.vx;
        obj.y += obj.vy;

        if (obj.x <= 0 || obj.x >= rect.width - obj.size) {

            obj.vx *= -1;

            obj.el.style.width =
                (1 + Math.random() * 3) + 'vw';

            obj.el.style.height =
                obj.el.style.width;

            obj.size = obj.el.offsetWidth;
        }

        if (obj.y <= 0 || obj.y >= rect.height - obj.size) {

            obj.vy *= -1;

            obj.el.style.width =
                (1 + Math.random() * 3) + 'vw';

            obj.el.style.height =
                obj.el.style.width;

            obj.size = obj.el.offsetWidth;
        }

        obj.el.style.transform =
            `translate(${obj.x}px, ${obj.y}px)`;
    });

    requestAnimationFrame(animateSquares);
}

animateSquares();

const logoImages = [

    'images/voln.svg',
    'images/lovi.svg',


];

const brandImage =
document.getElementById('brandImage');

let currentLogo = 0;

setInterval(() => {

    brandImage.style.opacity = 0;

    setTimeout(() => {

        currentLogo++;

        if(currentLogo >= logoImages.length){
            currentLogo = 0;
        }

        brandImage.src =
            logoImages[currentLogo];

        brandImage.style.opacity = 1;

    }, 400);

}, 4000);

const slides = document.querySelectorAll('.slide');

let current = 0;
const step = 14; // расстояние между центрами в vw

