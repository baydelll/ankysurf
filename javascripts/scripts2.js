


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


const elements = document.querySelectorAll('.shop-item, .shop-text');

let current = 0;
let target = 0;

window.addEventListener('scroll', () => {
    target = window.scrollY;
});

