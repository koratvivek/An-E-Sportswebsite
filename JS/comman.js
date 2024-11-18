setTimeout(function () {
    document.querySelector('#load').style.animation = 'grow 2s ease';
    document.querySelector('#load').addEventListener('animationend', function () {
        document.querySelector('#load').style.display = 'none';
        document.querySelector('.load-container').style.backgroundColor = 'transparent'
        document.querySelector('.load-container').style.display = 'none'
    });
}, 3000);
function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function btnVisible() {
    myBtn = document.getElementById("mybtn")
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}