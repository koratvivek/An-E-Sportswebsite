function moveRosters_t1() {
    title = document.querySelector('.t1');
    scrollPosition = window.scrollY;
    offset = 1500;
    adjustedScrollPosition = Math.max(scrollPosition - offset, 0);
    title.style.transform = `translateX(-${adjustedScrollPosition * 1.2}px)`;
};
function moveRosters_t2() {
    title1 = document.querySelector('.t2');
    scrollPosition1 = window.scrollY;
    offset1 = 1500;
    adjustedScrollPosition1 = Math.max(scrollPosition1 - offset1, 0);
    title1.style.transform = `translateX(-${adjustedScrollPosition1 * 1.2}px)`;
};

function moveBrands_b1() {
    title = document.querySelector('.b1');
    scrollPosition = window.scrollY;
    offset = 3100;
    adjustedScrollPosition = Math.max(scrollPosition - offset, 0);
    title.style.transform = `translateX(-${adjustedScrollPosition * 1.2}px)`;
};
function moveBrands_b2() {
    title1 = document.querySelector('.b2');
    scrollPosition1 = window.scrollY;
    offset1 = 3100;
    adjustedScrollPosition1 = Math.max(scrollPosition1 - offset1, 0);
    title1.style.transform = `translateX(-${adjustedScrollPosition1 * 1.2}px)`;
};
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        scale: 1,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: {
        loop: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    },
});
window.addEventListener("scroll", function () {
    let panel2Img = document.querySelector('.panel-2-img');
    let panel2Text = document.querySelector('.panel-2-text');
    let roster = this.document.querySelector('.rosters')
    let creators = this.document.querySelector('.creators-txt')
    let mySwiper = this.document.querySelector('.mySwiper')
    let brands = this.document.querySelector('#Brands')

    let scrollPosition = window.scrollY

    let typewriterExecuted = false;

    if (scrollPosition > 300 && !typewriterExecuted) {
        panel2Img.style.animation = 'slideFromLeft 1s ease forwards';
        panel2Text.style.animation = 'slideFromRight 1s ease forwards';
        typeWriter();
    }
    if (scrollPosition > 1400) {
        roster.style.animation = 'slideFromRight 1s ease forwards';
    }
    if (scrollPosition > 2200) {
        creators.style.animation = 'slideFromLeft 1s ease forwards';
        mySwiper.style.animation = 'slideFromRight 1s ease forwards';
    }
    if (scrollPosition > 3000) {
        brands.style.animation = 'slideFromRight 1s ease forwards';
    }
});

var i = 0;
var txt = "Welcome to Godlike Esports Pvt Ltd, India's largest Esports organization with a strong presence in five popular games. Our legacy in competitive gaming shines through with our BGMI team's participation in major national and international tournaments, our unbeaten CODM team's representation on the global stage, and our dominant FIFA team at the Asia level.";
var speed = 1000;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("about").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        typewriterExecuted = true;
    }
}
