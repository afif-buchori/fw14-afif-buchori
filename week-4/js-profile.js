const userEmail = document.getElementById('email').value;
const userPhone = document.getElementById('phone').value;
const userAddress = document.getElementById('address').innerHTML;
const userName = document.getElementById('name').value;
const userFisrtName = document.getElementById('first-name').value;
const userLastName = document.getElementById('last-name').value;
const userBrthDay = document.getElementById('date').value;
const userGender = document.querySelector('input[name="gender"]:checked').value;

const dataUser = {
    firstName: userFisrtName,
    lastName: userLastName,
    userName: userName,
    gender: userGender,
    address: userAddress,
    email: userEmail,
    phone: userPhone,
    brthDay: userBrthDay,
};
console.log(dataUser);
