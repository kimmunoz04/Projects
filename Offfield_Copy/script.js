// Mobile menu toggle
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Make sure this matches the CSS class used for the menu toggle
});

// Function to show the selected section
function showSection(sectionId) {
  // Hide all content sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
  
  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }
}
let map, geocoder;

function initMap() {
  //initialiize the map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.7749, lng: -122.4194 }, 
    zoom:8,//default center
  });

  geocoder = new google.maps.Geocoder();
}

function findStores() {
  const address = document.getElementById("locationInput").value;
  if (!address) {
    alert("Please enter a location.");
    return;
  }
  //geocode the address
  geocoder.geocode({ address }), (results, status) => {
    if (status === "OK") {
      const location = results[0].geometry.location;

      //center the map
      map.setCenter(location);
      map.setZoom(12);

      //add a marker for the searched location
      new google.maps.Marker({
        map: map,
        position: location,
      });

      //example add nearby stores
      const stores = [
        {name: "Store 1", lat: 37.7849, lng: -122.4094},
        {name: "Store 2", lat: 37.7649, lng: -122.4294},
      ];

      stores.forEach((store) => {
        const marker = new google.maps.Marker({
          position: { lat: store.lat, lng: store.lng},
          map: map,
          title: store.name,
        });
      })
    }
  }
}
