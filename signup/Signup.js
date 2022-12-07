
// form handling

async function handleFormSubmit(event) {
    event.preventDefault();
    const Email = document.getElementById('email');
    const firstName = document.getElementById('firstName');
    const userName = document.getElementById('username');
    const gender = document.getElementById('gender');
    const avatar = document.getElementById('avatar');
    const lastName = document.getElementById('lastName');
    const UserName = document.getElementById('UserName');
    const password = document.getElementById('password');


    const collectData = async () => {
        console.log(Email,firstName,userName,gender,avatar,lastName,UserName,password);
        let result = await fetch("",{
            method: "POST",
            body: JSON.stringify({Email,firstName,userName,gender,avatar,lastName,UserName,password}),
            headers: {'Content-Type': 'application/json'}
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem('users', JSON.stringify(result)); 

    }
    

   

}

let form = document.querySelector('.form');
form.addEventListener('submit', handleFormSubmit);




















