let menu__open = document.querySelector('.menu__open');
let menu__close = document.querySelector('.menu__close');

let menu = document.querySelector('.header__nav');

menu__open.addEventListener('click', function() {
    menu.classList.toggle('open');
    menu__close.classList.toggle('active');
});

menu__close.addEventListener('click', function() {
    menu.classList.toggle('open');
    menu__close.classList.toggle('active');
});

let menu__item = document.querySelectorAll('.menu__item');
let submenu = document.querySelectorAll('.menu__dropdown');

menu__item.forEach(function(item, i) {
    item.addEventListener('click', function() {
        submenu[i].classList.toggle('active');
        menu__item[i].classList.toggle('active');
    });
});