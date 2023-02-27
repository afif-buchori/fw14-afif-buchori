const btnToggle = document.querySelector('.toggle');
const iconToggle = document.getElementById('toggle-nav');
iconToggle.style.display = 'block';
const iconClose = document.getElementById('close');
let positionNavbar = false;
btnToggle.addEventListener('click', function() {
    const navbar = document.querySelector('.navbar ul');
    navbar.style.paddingLeft = '4rem';
    navbar.style.alignItems = 'start';
    const account = document.querySelector('.nav .account');
    const menu = document.querySelector('.menu');
    if(positionNavbar == false) {
        menu.style.right = '0';
        navbar.style.right = '0px';
        account.style.right = '0px';
        iconClose.style.display = 'block';
        iconToggle.style.display = 'none';
        positionNavbar =  true;
    } else {
        menu.style.right = '-100%';
        account.style.right = '-100%';
        navbar.style.right = '-100%';
        positionNavbar =  false;
        iconClose.style.display = 'none';
        iconToggle.style.display = 'block';
    }
});