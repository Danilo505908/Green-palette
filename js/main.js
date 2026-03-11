const swiper = new Swiper('.reviews__slider', {

    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        501: {
            slidesPerView: 2,
            spaceBetween: 22,
        }
    },

    navigation: {
        nextEl: '.reviews__item-prev',
        prevEl: '.reviews__item-next',
    },
    loop: true,
});

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.menu__link');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu--open');
    menuBtn.classList.toggle('menu__btn--active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuList.classList.remove('menu--open');
        menuBtn.classList.remove('menu__btn--active');
    });
});

const accordeonTitle = document.querySelectorAll('.accordeon__title');

accordeonTitle.forEach(item => {
    item.addEventListener("click", () => {

        const parent = item.parentNode;

        if (parent.classList.contains('accordeon__item--active')) {
            parent.classList.remove('accordeon__item--active')
        } else {
            accordeonTitle.forEach(element => {
                element.parentNode.classList.remove('accordeon__item--active')
            })
            parent.classList.add('accordeon__item--active')
        }

    })
});