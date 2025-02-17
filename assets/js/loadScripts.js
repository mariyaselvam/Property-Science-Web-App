function loadScripts(scripts, callback) {
    let loadedScripts = 0;

    scripts.forEach((script) => {
        let scriptTag = document.createElement("script");
        scriptTag.src = script;
        scriptTag.defer = true;

        scriptTag.onload = () => {
            loadedScripts++;
            if (loadedScripts === scripts.length && typeof callback === "function") {
                callback(); // Initialize Swiper after all scripts load
            }
        };

        document.body.appendChild(scriptTag);
    });
}

// List of JS files to load
const scriptsToLoad = [
    "assets/js/script.js",
    "assets/js/bootstrap.js",
    "assets/js/components.js",
    "assets/js/swiper.js"
];

// Load scripts and then initialize Swiper
document.addEventListener("DOMContentLoaded", () => {
    loadScripts(scriptsToLoad, initSwipers);
});

// Initialize Swipers after scripts are loaded
function initSwipers() {
    console.log("Initializing Swiper...");
    
    // Ensure Swiper is available
    if (typeof Swiper === "undefined") {
        console.error("Swiper not loaded!");
        return;
    }

    if (document.querySelector("#swiper1")) {
        new Swiper("#swiper1", {
            scrollbar: {
                el: ".swiper-scrollbar",
            },
        });
    } else {
        console.warn("Swiper1 container not found.");
    }

    if (document.querySelector("#swiper2")) {
        new Swiper("#swiper2", {
            slidesPerView: 4,
            breakpoints: {
                280: { slidesPerView: 1 },
                480: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1224: { slidesPerView: 3 },
            },
            spaceBetween: 30,
            scrollbar: {
                el: ".swiper-scrollbar",
            },
        });
    } else {
        console.warn("Swiper2 container not found.");
    }
}
