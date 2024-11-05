// createload categories

const loadCategories =() =>{
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
  .then((res) => res.json())
  .then((data) => displayCategories(data.categories))
  .catch((error) => console.log(error));
};


// loadcategoryvideos

const loadCategoryVideos =(categoryName)=>{
  // alert(categoryName);

  fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
  .then((res) => res.json())
  .then((data) =>displayProducts(data.data))
  .catch((error) => console.log(error));
}




// createdisplaycategories button display 

const displayCategories = (categories) => {

    const categoryContainer =document.getElementById("categories");

  categories.forEach((item) => {
    
    // Distructuring Category object
    const {id, category, category_icon} =item

    // create button
    const buttonContainer =document.createElement("div");
    buttonContainer.innerHTML=
    `<button onclick="loadCategoryVideos('${item.category}')" class="btn">

    <div id="btn-${id}" class=" category-btn border  px-10 py-3 flex items-center justify-center rounded-lg bg-emerald-600 hover:text-white">
            
                    <div class="image w-12 h-12 ">
                        <img src="${category_icon}" alt="" class="w-full">
                    </div>
                    <h2 class="font-bold text-lg text-black" >${category}</h2>
                    
                </div>
    </button>
     
    `
   
    // addbutton to category container
    categoryContainer.append(buttonContainer);

  });
}


//  Scroll section With Button Click----------------------

document.getElementById("goto-adopt").addEventListener("click", function(event) {
  event.preventDefault(); 
  document.getElementById("content").scrollIntoView({
    behavior: "smooth" 
  });
});


//  Display Pet Details by PopUP Modal--------------------


const petDetails = async(petId) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
  const data = await response.json()
  console.log(data.petData)


  // Distructuring Object
  const {image,pet_name,breed,gender,date_of_birth, price,vaccinated_status, pet_details} = data.petData

  // get modal container
  const modalContainer = document.getElementById('modal-container')

  // create inner html
  modalContainer.innerHTML = `
      <dialog id="my_modal_5" class="modal modal-middle ">
          <div class="modal-box">
              <figure>
                  <img src="${image}" alt="cat" class="w-full h-32 rounded-lg" />
              </figure>
  
              <h2 class="text-xl font-bold text-emerald-600 mb-2 mt-4"> ${pet_name} </h2>
  
              <div class=" flex flex-col md:flex-row md:gap-7 mb-3">
                  <div class="">
                      <p class="text-sm md:text-md font-semibold text-gray-500"><i class="fa-solid fa-table-cells-large mr-2"></i> Breed: ${breed ?`${breed}`: 'Not Available'}</p>
                      <p class="text-sm md:text-md font-semibold text-gray-500"><i class="fa-solid fa-mercury mr-2"></i> Gender: ${gender ?`${gender}`: 'Not Available'}</p>

                      <p class="text-sm md:text-md font-semibold text-gray-500"><i class="fa-solid fa-mercury mr-2"></i> Vaccinated Status: ${vaccinated_status ?`${vaccinated_status}`: 'Not Available' }</p>
                  </div>
  
                  <div class="">
                      <p class="text-sm md:text-md font-semibold text-gray-500"> <i class="fa-regular fa-calendar mr-2"></i> Birth: ${date_of_birth ? `${date_of_birth}`: 'Not Available'}</p>
                      <p class="text-sm md:text-md font-semibold text-gray-500"><i class="fa-solid fa-hand-holding-dollar mr-2"></i> Price : ${price ? `${price} $`: 'Not Available'} </p>
                  </div>
              </div>
  
              <hr>
  
              <h2 class="text-lg font-semibold text-emerald-600  mt-2"> Details Informations </h2>
              <p class="py-2">${pet_details}</p>
  
              <div class="modal-action">
                  <form method="dialog" class="mx-auto">
                      <!-- if there is a button in form, it will close the modal -->
                      <button class=" btn w-full sm:w-96  bg-emerald-600 text-white">Cancel</button>
                  </form>
              </div>
          </div>
      </dialog>
  
  `
  // call modal function 
  my_modal_5.showModal()

}



loadCategories()
displayCategories()
loadCategoryVideos()