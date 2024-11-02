// Mobile menu toggle
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show-menu');
});

// Product hover effect could go here (if more interaction is needed)
function showSection(sectionId) {
  //hide all content sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
// show the selected section
const selectedSection = document.getElementById(sectionId);
if (selectedSection) {
  selectedSection.style.display = 'block';
}
}
