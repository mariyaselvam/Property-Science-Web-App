document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".landingPage2-Visualization-Tab-Text");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove active class from all tabs
            tabs.forEach(item => item.classList.remove("active"));
            // Add active class to the clicked tab
            this.classList.add("active");
        });
    });
});
