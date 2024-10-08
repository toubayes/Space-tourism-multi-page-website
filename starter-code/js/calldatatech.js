// Selected element 
const list_technology = document.querySelectorAll('.buttons ul li button');
const img_technology=document.querySelector(".technologie_img");
const name_technology = document.querySelector(".name_technologie");
const detail_technology = document.querySelector(".description_technologies");

// Fetch the JSON data from the correct path and handle it
try {
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    // Use the "destinations" array from the JSON data
    initializetechnologys(data.technology);
  })
  }catch(error ){
  console.error('Error loading JSON data:', error);
   }


function initializetechnologys(technoloy) {
  list_technology.forEach((technology, index) => {
    technology.addEventListener("click", () => {
    
            show_technology(technoloy[index]);
    });
  });
}


// Function to display technology details
function show_technology(technology) {
  img_technology.src = technology.images.landscape;
  name_technology.textContent = technology.name;        // Set technology name
  detail_technology.textContent = technology.description;   


  console.log(technology.images.landscape);  // Check if the correct path is being logged
img_technology.src = technology.images.landscape;  // Set the image source
}
