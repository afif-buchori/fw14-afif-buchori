const btnToggle = document.querySelector('.toggle');
const iconToggle = document.getElementById('toggle-nav');
iconToggle.style.display = 'block';
const iconClose = document.getElementById('close');
let positionNavbar = false;
btnToggle.addEventListener('click', function() {
    const navbar = document.querySelector('.navbar ul');
    const account = document.querySelector('.nav .account');
    if(!positionNavbar) {
        navbar.style.right = '0px';
        account.style.right = '0px';
        iconClose.style.display = 'block';
        iconToggle.style.display = 'none';
        positionNavbar =  true;
    } else {
        account.style.right = '-100%';
        navbar.style.right = '-100%';
        positionNavbar =  false;
        iconClose.style.display = 'none';
        iconToggle.style.display = 'block';
    }
});