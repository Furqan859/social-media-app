const data = JSON.parse(localStorage.getItem('data'))
console.log(data, "token");

// user nav data

// document.getElementById("name").innerHTML = data.username;
const image = document.getElementById("nav-img")
image.src = data.image;
// console.log("localStorage", data);

// function to check userprofile
function userProfile(){
    redirect: window.location.replace("../contentPage/userprofile.html")

}

const totalCount = document.getElementById("cart-data");
var count = 0;

const handleIncrement = () => {
    count++;
    totalCount.innerHTML = count;
  };


// function for logout
function LogOut() {
    localStorage.clear();
    redirect: window.location.replace("../login/login.html")
  }

  function pagination() {
    redirect: window.location.replace("../AddToCart/AddToCart.html")
  }
