const data = JSON.parse(localStorage.getItem('data'));
console.log(data, "token");


// user nav data

// document.getElementById("name").innerHTML = data.username;
const image = document.getElementById("nav-img")
image.src = data.image;
// console.log("localStorage", data);

// function to check userprofile
function userProfile(){
    redirect: window.location.replace("../contentPage/userProfile.html")
}



// function for logout
function LogOut() {
    localStorage.clear();
    redirect: window.location.replace("../login/login.html")
  }

 
