
function moveRow1() {
    title = document.querySelector('.row-1-img');
    scrollPosition = window.scrollY;
    offset = 1500;
    adjustedScrollPosition = Math.max(scrollPosition - offset, 0);
    title.style.transform = `translateX(-${adjustedScrollPosition * 1.2}px)`;
};
function moveRow2() {
    title = document.querySelector('.row-2-img');
    scrollPosition = window.scrollY;
    offset = 1500;
    adjustedScrollPosition = Math.max(scrollPosition - offset, 0);
    title.style.transform = `translateX(${adjustedScrollPosition * 1.2}px)`;
};
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,

        },
        992: {
            slidesPerView: 2,

        },
        1200: {
            slidesPerView: 3,


        }
    },

});