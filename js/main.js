const swiper = new Swiper('.reviews__slider', {

    slidesPerView: 2,
    spaceBetween: 22,
    
    navigation: {
    nextEl: '.reviews__item-prev',
    prevEl: '.reviews__item-next',
    },
    loop: true,
});