// Function to load HTML components dynamically
function loadComponent(selector, file) {
  const element = document.querySelector(selector);
  if (!element) {
      // Remove console warning to avoid cluttering the console
      return; 
  }

  fetch(file)
      .then((response) => response.text())
      .then((data) => {
          element.innerHTML = data;
      })
      .catch((error) => console.error(`Error loading ${file}:`, error));
}

// Load components on page load
document.addEventListener("DOMContentLoaded", () => {
  const components = [
      ["#header", "assets/components/header.html"],
      ["#nav", "assets/components/nav.html"],
      ["#home-banner-sec", "assets/components/Home/Banner.html"],
      ["#HomeGridSec", "assets/components/Home/HomeGridSec.html"],
      ["#HouseHuntSec", "assets/components/Home/HouseHunt.html"],
      ["#DesktopValuationSec", "assets/components/Home/DesktopValuationSec.html"],
      ["#InvestibleScoreReportSec", "assets/components/Home/InvestibleScoreReportSec.html"],
      ["#SpeakToAnExpert", "assets/components/Home/SpeakToAnExpert.html"],
      ["#UniquescalesofEvaluation", "assets/components/Home/Unique-scales-Evaluation.html"],
      ["#WhychooseUs", "assets/components/Home/Why-choose-us-sec.html"],
      ["#IndiaOldestLargestRepository", "assets/components/Home/India-Oldest-largest-repository.html"],
      ["#HomeTabSystem", "assets/components/Home/Home-Tab-system.html"],
      ["#Whatourclientsays", "assets/components/Home/What-our-client-says-sec.html"],
      ["#HomeUseCasesSec", "assets/components/Home/home-Use-Cases-sec.html"],
      ["#HomeGetTouchwithUs", "assets/components/Home/HomeGetTouchwithUs.html"],
      ["#footer", "assets/components/footer.html"],
      ["#OnboardingbreadcrumbSec", "assets/components/Landing-page-Onboarding/breadcrumb.html"],
  ];

  components.forEach(([selector, file]) => loadComponent(selector, file));
});
