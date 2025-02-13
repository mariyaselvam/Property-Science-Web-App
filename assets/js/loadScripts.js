function loadScripts(scripts) {
    scripts.forEach((script) => {
        let scriptTag = document.createElement("script");
        scriptTag.src = script;
        scriptTag.defer = true; // Ensures scripts don't block rendering
        document.body.appendChild(scriptTag);
    });
}

// List of JS files to load
const scriptsToLoad = [
    "assets/js/bootstrap.js",
    "assets/js/script.js",
    "assets/js/components.js"
];

// Load scripts after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    loadScripts(scriptsToLoad);
});
