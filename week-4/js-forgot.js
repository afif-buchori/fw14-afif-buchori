const btnForgot = document.getElementById('submit-forgot');
btnForgot.addEventListener('click', function() {
    const inputEmail = document.getElementById('email').value;
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail)){
        alert('Format Email Salah');
    } else {
        console.log('Email :', inputEmail);
    }
});