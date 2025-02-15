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
    loadComponent("#nav", "assets/components/nav.html");
    loadComponent("#home-banner-sec", "assets/components/Home/Banner.html");
    loadComponent("#HomeGridSec", "assets/components/Home/HomeGridSec.html");
    loadComponent("#HouseHuntSec", "assets/components/Home/HouseHunt.html");
    loadComponent("#DesktopValuationSec", "assets/components/Home/DesktopValuationSec.html");
    loadComponent("#InvestibleScoreReportSec", "assets/components/Home/InvestibleScoreReportSec.html");
    loadComponent("#SpeakToAnExpert", "assets/components/Home/SpeakToAnExpert.html");
    loadComponent("#UniquescalesofEvaluation", "assets/components/Home/Unique-scales-Evaluation.html");
    loadComponent("#WhychooseUs", "assets/components/Home/Why-choose-us-sec.html");
    loadComponent("#IndiaOldestLargestRepository", "assets/components/Home/India-Oldest-largest-repository.html");
    loadComponent("#HomeTabSystem", "assets/components/Home/Home-Tab-system.html");
    loadComponent("#Whatourclientsays", "assets/components/Home/What-our-client-says-sec.html");
    loadComponent("#HomeUseCasesSec", "assets/components/Home/home-Use-Cases-sec.html");
    loadComponent("#HomeGetTouchwithUs", "assets/components/Home/HomeGetTouchwithUs.html");
    loadComponent("#footer", "assets/components/footer.html");
  });

  
  