const cardProduct = document.querySelector('.card-product');
const cardOptions = document.querySelector('.card-option');

// const orderList = [];
const total = 15;

const content = document.querySelector('.product-order-list');
for(let x = 1; x <= total; x++) {
    const card = document.createElement('div');
    card.className = 'card-product';
    card.style.display = 'flex';
    card.innerHTML = document.querySelector('.card-product').innerHTML;
    content.appendChild(card);

    const options = document.createElement('div');
    options.className = 'card-option';
    card.appendChild(options);

    const deliveryStatus = document.querySelector('.delivery');
    if(x < 2) {
        deliveryStatus.textContent = 'Delivered';
    } else {
        deliveryStatus.textContent = 'Delivered to Table 4';
    }

    const btnDelete = document.createElement('div');
    btnDelete.innerHTML = document.querySelector('.card-option div').innerHTML;
    options.appendChild(btnDelete);

    const btnCancel = document.createElement('button');
    btnCancel.innerHTML = 'x';
    options.appendChild(btnCancel);


    // function showOption() {
    //     options.style.display = 'flex';
    //     card.style.backgroundColor = '#ffffff60';
    //     console.log('card open option');
        
    //     card.removeEventListener('click', showOption);
    // }
    // function closeOption() {
    //     options.style.display = 'none';
    //     card.style.backgroundColor = '#ffffff';
    //     console.log('close');
    //     setTimeout( function() {
    //         card.addEventListener('click', showOption)
    //     },50);
    // }
    // card.addEventListener('click', showOption);
    // btnCancel.addEventListener('click', closeOption);

    card.addEventListener('click', function() {
        options.style.display = 'flex';
        card.style.backgroundColor = '#ffffff80';
        console.log(`card ${x} open option`);
    });
    btnCancel.addEventListener('click', function(event) {
        event.stopPropagation();
        options.style.display = 'none';
        card.style.backgroundColor = '#ffffff';
        console.log('close',x);
    });
    
    btnDelete.addEventListener('click', function(event) {
        event.stopPropagation();
        content.removeChild(card);
        console.log('Delete Card',x);
    });
}