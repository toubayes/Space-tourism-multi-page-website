// Selected element 
const list_crew = document.querySelectorAll('.panigation-crew ul li button');
const img_crew=document.querySelector(".img_crew");
const name_crew = document.querySelector(".name-crew");
const detail_crew = document.querySelector(".description-crew");
const title_crew = document.querySelector(".title-crew");

// Fetch the JSON data from the correct path and handle it
try {
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    // Use the "destinations" array from the JSON data
    initializecrews(data.crew);
  })
  }catch(error ){
  console.error('Error loading JSON data:', error);
   }


function initializecrews(destinations) {
  list_crew.forEach((crew, index) => {
    crew.addEventListener("click", () => {
    
            show_crew(destinations[index]);
    });
  });
}


// Function to display crew details
function show_crew(crew) {
  img_crew.src = crew.images.png
  name_crew.textContent = crew.name;        // Set crew name
  detail_crew.textContent = crew.bio;   // Set crew details (description in your case)
  title_crew.textContent = crew.role;  // Set crew distance


  console.log(crew.images.png);  // Check if the correct path is being logged
img_crew.src = crew.images.png;  // Set the image source
}
