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

const coursesModal =
document.getElementById("coursesModal");

const coursesButtons =
document.querySelectorAll(".courses-open-modal");

const coursesClose =
document.querySelector(".courses-close");

coursesButtons.forEach(button => {

    button.addEventListener("click", () => {

        coursesModal.classList.add("active");

    });

});

coursesClose.addEventListener("click", () => {

    coursesModal.classList.remove("active");

});

window.addEventListener("click", (event) => {

    if(event.target === coursesModal){

        coursesModal.classList.remove("active");

    }

});

const coursesCards =
document.querySelectorAll(".courses-card");

const coursesObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "courses-visible"
            );

        }

    });

},{
    threshold:0.2
});

coursesCards.forEach(card => {

    coursesObserver.observe(card);

});