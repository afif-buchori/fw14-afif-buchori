const inputEmail = document.getElementById('email');

const noteEmail = document.querySelector('form .input');
noteEmail.style.position = 'relative';
noteEmail.style.display = 'flex';

const infoEmail = document.createElement('p');
infoEmail.style.position = 'absolute';
infoEmail.style.top = '6px';
infoEmail.style.left = '16px';
infoEmail.style.fontSize = '16px';

inputEmail.addEventListener('input', function() {
    noteEmail.appendChild(infoEmail);
    if(inputEmail.value == '') {
        infoEmail.style.color = 'black';
        infoEmail.innerHTML = '*input kosong';
        btnForgot.disabled = true;
        btnForgot.style.cursor = 'default';
    } 
    else if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.value)) {
        infoEmail.style.color = 'green';
        infoEmail.innerHTML = '*OK';
        btnForgot.disabled = false;
        btnForgot.style.cursor = 'pointer';
    } else {
        infoEmail.style.color = 'red';
        infoEmail.innerHTML = '*Bukan Email';
        btnForgot.disabled = true;
        btnForgot.style.cursor = 'default';
    }
});

const btnForgot = document.getElementById('submit-forgot');
btnForgot.disabled = true;
btnForgot.style.cursor = 'default';
btnForgot.addEventListener('click', function() {
    console.log('Email :', inputEmail.value);
});