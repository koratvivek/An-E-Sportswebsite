function goToTop(btn) {
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
