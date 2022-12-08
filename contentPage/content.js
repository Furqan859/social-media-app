
async function handleFormSubmit() {
  try{
    const getData = await fetch('https://dummyjson.com/products', {
        body: JSON.stringify({
            
          
        })
    })

    const data = await getData.json();

    console.log(data);
    console.log(data.token,"token");
    await localStorage.setItem('getData', JSON.stringify(data));


  }
  catch(e) {
    console.log(e.message);
  }

  
  
  
  // finally{
  //   window.location = "../contentPage/Content.html";
  //   return true;
  // }

}






















