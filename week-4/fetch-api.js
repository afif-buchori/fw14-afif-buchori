fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((data) => {
        data.forEach(user => {
            console.log(user);
        });
    })
    .catch(() => console.log('Data Not Found'));


const cardContainer = document.querySelector('.container');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if(!response.ok) {
            throw new Error('Server tidak ditemukan');
        }
        return response.json();
    })
    .then((data) => {
        data.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'card-user';
            userCard.innerHTML = `
                <p>${user.id}</p>
                <ul>
                    <li>Name : ${user.name}</li>
                    <li>Username : ${user.username}</li>
                    <li>Email : ${user.email}</li>
                    <li>Address : 
                        <ul>
                            <li>Street : ${user.address.street}</li>
                            <li>Suite : ${user.address.suite}</li>
                            <li>City : ${user.address.city}</li>
                            <li>Zipcode : ${user.address.zipcode}</li>
                            <li>Geo : ${user.address.geo.lat}, ${user.address.geo.lng}</li>
                        </ul>
                    </li>
                    <li>Phone : ${user.phone}</li>
                    <li>Website : ${user.website}</li>
                    <li>Company : 
                        <ul>
                            <li>Name : ${user.company.name}</li>
                            <li>CatchPhrase : ${user.company.catchPhrase}</li>
                            <li>BS : ${user.company.bs}</li>
                        </ul>
                    </li>
                </ul>
            `;
            cardContainer.appendChild(userCard);
        });
    })
    .catch((error) => {
        cardContainer.style = 'display: flex';
        cardContainer.innerHTML = `<h1>Data Not Found... ${error.message}</h1>`;
    })
;