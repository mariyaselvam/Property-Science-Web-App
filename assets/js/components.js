// Function to load HTML components dynamically
function loadComponent(selector, file) {
    fetch(file)
      .then((response) => response.text())
      .then((data) => {
        document.querySelector(selector).innerHTML = data;
      })
      .catch((error) => console.error(`Error loading ${file}:`, error));
  }
  
  // Load components on page load
  document.addEventListener("DOMContentLoaded", () => {
    loadComponent("#header", "assets/components/header.html");
    // loadComponent("#footer", "assets/components/footer.html");
    loadComponent("#nav", "assets/components/nav.html");
    loadComponent("#home-banner-sec", "assets/components/Home/Banner.html");
    loadComponent("#HomeGridSec", "assets/components/Home/HomeGridSec.html");
    loadComponent("#HouseHuntSec", "assets/components/Home/HouseHunt.html");
    loadComponent("#DesktopValuationSec", "assets/components/Home/DesktopValuationSec.html");
  });

  
  