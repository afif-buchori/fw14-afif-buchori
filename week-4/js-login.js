function validationEmail(email) {
    const cek = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return cek.test(email);
}

let valueEmail = '';
let valuePass = '';

const inputEmail = document.getElementById('email');
const noteEmail = document.querySelector('.label-email');
noteEmail.style.display = 'flex';
const infoEmail = document.createElement('p');
infoEmail.style.margin = 'auto 10px 0 auto';
infoEmail.style.fontSize = '12px';
inputEmail.addEventListener('input', function() {
    noteEmail.appendChild(infoEmail);
    if(inputEmail.value == '') {
        infoEmail.style.color = 'black';
        infoEmail.innerHTML = '*input kosong';
        valueEmail = '';
    } 
    else if(validationEmail(inputEmail.value)) {
        infoEmail.style.color = 'green';
        infoEmail.innerHTML = '*OK';
        valueEmail = inputEmail.value;
    } else {
        infoEmail.style.color = 'red';
        infoEmail.innerHTML = '*Bukan Email';
        valueEmail = inputEmail.value;
    }
});

const inputPass = document.getElementById('password');
const notePass = document.querySelector('.label-pass');
notePass.style.display = 'flex';
const infoPass = document.createElement('p');
infoPass.style.margin = 'auto 10px 0 auto';
infoPass.style.fontSize = '12px';
inputPass.addEventListener('input', function() {
    notePass.appendChild(infoPass);
    if(inputPass.value == '') {
        infoPass.style.color = 'black';
        infoPass.innerHTML = '*input kosong';
        valuePass = '';
    } 
    else if(inputPass.value.length < 4) {
        infoPass.style.color = 'red';
        infoPass.innerHTML = '*Harus Lebih dari 4 Karakter';
        valuePass = inputPass.value;
    } else {
        infoPass.style.color = 'green';
        infoPass.innerHTML = '*OK';
        valuePass = inputPass.value;
    }
});

const btnLogin = document.getElementById('submit-login');
btnLogin.addEventListener('click', function() {
    if(valueEmail == '' || valuePass == '') {
        errPopup.style.display = 'flex';
        errMessage.innerText = 'Input tidak boleh kosong.';
    }
    else if(!validationEmail(inputEmail.value)) {
        errPopup.style.display = 'flex';
        errMessage.innerText = 'format Email salah...';
    }
    else if(valuePass.length < 4) {
        errPopup.style.display = 'flex';
        errMessage.innerText = 'Password Kurang...';
    }
    else {
        errPopup.style.display = 'none';
        console.log('Email :',valueEmail);
        console.log('Password :',valuePass);
    }
});

const content = document.querySelector('form');
content.style.position = 'relative';

const errPopup = document.createElement('div');
errPopup.style.position = 'absolute';
errPopup.style.display = 'none';
errPopup.style.alignItems = 'center';
errPopup.style.flexDirection = 'column';
errPopup.style.top = '-75px';
errPopup.style.width = '100%';
errPopup.style.height = '70px';
errPopup.style.backgroundColor = 'salmon';
errPopup.style.borderRadius = '1rem';
errPopup.style.boxShadow = '2px 2px 16px rgba(196, 196, 196, 0.77)';

const btnClose = document.createElement('h5');
btnClose.innerText = 'X';
btnClose.style.position = 'absolute';
btnClose.style.right = '10px';
btnClose.style.top = '5px';
btnClose.style.cursor = 'pointer';
btnClose.style
btnClose.addEventListener('click', function() {
    errPopup.style.display = 'none';
});

const errTitle = document.createElement('h6');
errTitle.innerText = 'Error !';
errTitle.style.margin = '8px 0';

const errMessage = document.createElement('h5');

content.appendChild(errPopup);
errPopup.appendChild(btnClose);
errPopup.appendChild(errTitle);
errPopup.appendChild(errMessage);

