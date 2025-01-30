// Function to load external components (Navbar & Footer)
function loadComponent(id, file) {
  fetch(file)
    .then((response) => response.text()) // Convert response to text
    .then((data) => {
      document.getElementById(id).innerHTML = data; // Insert HTML into div
    })
    .catch((error) => console.error(`Error loading ${file}:`, error));
}

// Load Navbar and Footer on page load
window.onload = function () {
  loadComponent("navbar", "/components/navbar.html");
  //   loadComponent("footer_link", "/components/footer_link.html");
};
