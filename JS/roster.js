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

function teamBGMI(toggleSwitch) {
    const item1 = document.querySelector('#bgmi-roster');
    const item2 = document.querySelector('#bgmi-staff');
    toggleSwitch.addEventListener('change', function () {
        if (this.checked) {
            item1.style.display = 'none';
            item2.style.display = 'block';
        } if (!this.checked) {
            item1.style.display = 'block';
            item2.style.display = 'none';
        }
    });
}
function teamNEWSTATE(toggleSwitch) {
    const item1 = document.querySelector('#newstate-roster');
    const item2 = document.querySelector('#newstate-staff');
    toggleSwitch.addEventListener('change', function () {
        if (this.checked) {
            item1.style.display = 'none';
            item2.style.display = 'block';
        } if (!this.checked) {
            item1.style.display = 'block';
            item2.style.display = 'none';
        }
    });
}
function teamFIFA(toggleSwitch) {
    const item1 = document.querySelector('#fifa-roster');
    const item2 = document.querySelector('#fifa-staff');
    toggleSwitch.addEventListener('change', function () {
        if (this.checked) {
            item1.style.display = 'none';
            item2.style.display = 'block';
        } if (!this.checked) {
            item1.style.display = 'block';
            item2.style.display = 'none';
        }
    });
}
function teamCOD(toggleSwitch) {
    const item1 = document.querySelector('#cod-roster');
    const item2 = document.querySelector('#cod-staff');
    toggleSwitch.addEventListener('change', function () {
        if (this.checked) {
            item1.style.display = 'none';
            item2.style.display = 'block';
        } if (!this.checked) {
            item1.style.display = 'block';
            item2.style.display = 'none';
        }
    });
}
function teamBGMIG(toggleSwitch) {
    const item1 = document.querySelector('#bgmi-girls-roster');
    const item2 = document.querySelector('#bgmi-girls-staff');
    toggleSwitch.addEventListener('change', function () {
        if (this.checked) {
            item1.style.display = 'none';
            item2.style.display = 'block';
        } if (!this.checked) {
            item1.style.display = 'block';
            item2.style.display = 'none';
        }
    });
}
const slide = document.getElementById('slide');
const newImg = document.getElementById('newimg');
