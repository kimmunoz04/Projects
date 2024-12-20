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
