const data = JSON.parse(localStorage.getItem('data'))
console.log(data, "token");


// user nav data

// document.getElementById("name").innerHTML = data.username;
const image = document.getElementById("nav-img")
image.src = data.image;
// console.log("localStorage", data);

// function to check userprofile
function userProfile(){
    redirect: window.location.replace("./userProfile.html")

}


// function for logout
function LogOut() {
    localStorage.clear();
    redirect: window.location.replace("../login/login.html")
  }

  function pagination() {
    redirect: window.location.replace("../AddToCart/AddToCart.html")
  }

  function detailPage(){
    redirect: window.location.replace("../AddToCart/DetailPage.html")
  }

  function myFunction() {
 const search = document.getElementById("search");
 search.value = data.product.title
 return data.product  
}

const totalCount = document.getElementById("cart-data");
var count = 0; 

const handleIncrement =(product) => {
    console.log();
     count++;
     totalCount.innerHTML = count;
    
 
   };

//    search bar


// product function
async function productData() {
    const product = await fetch("https://dummyjson.com/products");
    const data = await product.json();
    console.log(data, "new data");
    const myContent = document.getElementById("card");
    myContent.innerHTML = myContent;
    const showHtml = data.products.map((product,index) => {
        return `<div class="row justify-content-center" id=${index}>
        <div class="mb-5 justify-content-around">
            <div  class="card" style="border-radius:15px;" >
                <div onclick="detailPage()" class="bg-image hover-overlay ripple ripple-surface ripple-surface-light data-mdb-ripple-color-light">
                    <img src=${product.images[0]}
                        style="border-top-left-radius: 15px; border-top-right-radius: 15px; height: 250px; max-width: auto" class="img-fluid"
                        alt="Laptop" />
                    <a href="#!">
                        <div class="mask"></div>
                    </a>
                </div>
                <div class="card-body pb-0">
                    <div class="d-flex justify-content-between">
                        <div>
                            <p><a href="#!" class="text-dark">${product.title}</a></p>
                            <p class="small text-muted">${product.category}</p>
                        </div>
                        <div>
                            <div class="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p class="small text-muted">${product.rating}</p>
                        </div>
                    </div>
                </div>
                <hr class="my-0" />
                <div class="card-body pb-0">
                    <div class="d-flex justify-content-between">
                        <p><a href="#!" class="text-dark">Rs.${product.price}</a></p>
                        <p class="text-dark">#### 8787</p>
                    </div>
                    <p class="small text-muted">VISA Platinum</p>
                </div>
                <hr class="my-0" />
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                    <a class="text-dark fw-bold" onclick="handleIncrement(${product})">Add To Cart</a>
                    <button type="button" class="btn btn-primary" onclick="pagination()">Buy now</button>
                </div>
        </div>
                
                </div>
            </div>
        </div>
    </div>`
    
   

     })
    myContent.innerHTML = showHtml;

}

productData();





