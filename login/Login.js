
// form handling

async function handleFormSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    const getData = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username.value,
            password: password.value,
            // username: 'kminchelle',
            // password: '0lelplR'

        })
    })

    const data = await getData.json();

    console.log(data);
    await localStorage.setItem('getData', JSON.stringify(data));

}

let form = document.querySelector('.form');
form.addEventListener('submit', handleFormSubmit);




















