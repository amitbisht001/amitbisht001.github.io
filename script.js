let navbar = document.querySelector('nav');
let navbarToggle = document.querySelector('.nav-toggle');
let icon = document.querySelector('.nav-toggle i');

navbarToggle.addEventListener('click', function() {

    if (navbar.style.display === "block") {
        navbar.style.display = "none";
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        navbar.style.display = "block";
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});