// Selected element 
const list_planet = document.querySelectorAll('.list-planet ul li');
const img_planet=document.querySelector(".img_planet");
const name_planet = document.querySelector(".name-planet");
const detail_planet = document.querySelector(".detail-planet");
const distance_planet = document.querySelector(".kilo");
const travel_planet = document.querySelector(".days");

// Fetch the JSON data from the correct path and handle it
try {
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    // Use the "destinations" array from the JSON data
    initializePlanets(data.destinations);
  })
  }catch(error ){
  console.error('Error loading JSON data:', error);
   }


function initializePlanets(destinations) {
  list_planet.forEach((planet, index) => {
    planet.addEventListener("click", () => {
            list_planet.forEach(p => p.classList.remove("selected"));

            planet.classList.add("selected");
    
            show_planet(destinations[index]);
    });
  });
}


// Function to display planet details
function show_planet(planet) {
  img_planet.src = planet.png
  name_planet.textContent = planet.images.name;        // Set planet name
  detail_planet.textContent = planet.description;   // Set planet details (description in your case)
  distance_planet.textContent = planet.distance;  // Set planet distance
  travel_planet.textContent = planet.travel;  // Set planet travel time

  console.log(planet.images.png);  // Check if the correct path is being logged
img_planet.src = planet.images.png;  // Set the image source
}
