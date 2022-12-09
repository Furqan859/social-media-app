const data = JSON.parse(localStorage.getItem('data'))
console.log(data, "userProfile");

// user nav data
const image = document.getElementById("user-img");
image.src = data.image;
const userImage = document.getElementById("userImg");
userImage.src = data.image;
const firstName = document.getElementById('firstName').innerHTML = data.firstName;
const lastName = document.getElementById('lastName').innerHTML = data.lastName;
const email = document.getElementById('email').innerHTML = data.email;
const userName = document.getElementById('userName').innerHTML = data.username;
const gender = document.getElementById('gender').innerHTML = data.gender;

function navigate() {
    redirect: window.location.replace("./content.html")
}

// function for logout
function LogOut() {
    localStorage.clear();
    redirect: window.location.replace("../login/login.html")
}

