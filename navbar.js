// js hamburger menu
const navbarNav = document.querySelector('.navbar-nav-link');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


var typed = new Typed('.text', {

    strings: ["backend dev", "pelajar"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})