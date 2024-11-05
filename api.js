const lodeAllProduct = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets')
    const data = await res.json()

    spnner(data.pets)

}

lodeAllProduct()
const spnner = (data) => {
    const spnner = document.getElementById("spnner")
    spnner.classList.remove("hidden")
    setTimeout(() => {
          spnner.classList.add("hidden")
          displayProducts(data)
    }, 2000)

}
const displayProducts = (data) => {
    const productContainer = document.getElementById("productsContainer")
    productContainer.innerHTML ="";

    if(data.length==0){
        
        productContainer.innerHTML =`
        <div class="min-h-screen[300px] w-full flex flex-col gap-5 justify-evenly items-center ml-64">
        <img src="./images/error.webp"/>
        <h1 class="text-center text-xl font-bold">No Information Available<h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
        its layout. The point of using Lorem Ipsum is that it has a.<p>

        </div>
        `;
        return;
    }

    data.map(pets => {
          const {pet_name, breed, image, price,gender ,date_of_birth,petId } = pets
          
          const productCard = document.createElement("div")
          productCard.classList = " flex flex-col gap-1 border rounded-lg border-grey-300 p-6 product-card hover:shadow-md justify-between"
          productCard.innerHTML = `
          <img src="${image}">
                <h1 class=" text-xl md:text-2xl font-bold">${pet_name}</h1>
                 <p class="font-semibold"><i class="fa-regular fa-table-cells-large"></i> Breed:${breed}</p>
                 <p class="font-semibold"><i class="fa-regular fa-box-archive"></i> Birth:${date_of_birth}<p>
                 <div class=" flex flex-wrap gap-3">
                 <p class="font-semibold"><i class="fa-regular fa-dollar-sign"></i> Price:${price}<p>
                 
                 </div>
                 <p class="font-semibold"><i class="fa-solid fa-venus"></i> Gender:${gender}</p>

                 <div class=" border-b-gray-500"></div>

                 <div class=" flex gap-1 justify-between ">
                 <button onclick="likebtn('${image}')" class="btn hover:bg-emerald-600 hover:text-white"><i class="fa-light fa-thumbs-up"></i></button>

                 <button onclick="adopModal()" class=" btn hover:bg-emerald-600 hover:text-white">Adopt</button>

                 <button onclick="petDetails('${petId}')"  class=" btn hover:bg-emerald-600 hover:text-white ">Details</button>
                 </div>


          `

          productContainer.appendChild(productCard)
    })
}



// Selection / Mark as Read BUtton


const likebtn = (image) => {
    console.log(image)
    // markasreadcontainer id te dhukailam img dnamically

    const markAsReadContainer = document.getElementById('markAsReadContainer')
    const div = document.createElement('div')
    div.innerHTML = `
        
        <div>

                <div class="items-center rounded-lg shadow-lg gap-2 border w-full">
                </div> 
                  
                <div class="w-full">
                            <img src="${image}">
                </div>
   
        </div>
    
    `
    markAsReadContainer.appendChild(div)

    
    
}
