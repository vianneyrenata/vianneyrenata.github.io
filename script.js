// Import at the top
import { constructText } from "./text.js";

// Initialize Typed.js
var typed = new Typed('#typed-text', {
    strings: ['an academic researcher.', 'a community builder.', 'a tinkerer/maker.'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 1500,
    startDelay: 500
});

// Tab functionality
function renderText(texttype) {
    // Get the result from constructText
    const result = constructText(texttype);
    
    // Element where text will be displayed
    const projectText = document.getElementById("project-text");
    
    // Check if result is a Promise
    if (result instanceof Promise) {
        projectText.innerHTML = "Loading...";
        
        // Handle the Promise
        result.then(html => {
            projectText.innerHTML = html;
        });
    } else {
        projectText.innerHTML = result;
    }
}

// Get tab elements
const tabAcad = document.getElementById("tab-acad");
const tabService = document.getElementById("tab-service");
const tabPersonal = document.getElementById("tab-personal");

// Add event listeners
tabAcad.addEventListener("click", function() {
    renderText("academia");
});

tabPersonal.addEventListener("click", function() {
    renderText("personal");
});

tabService.addEventListener("click", function() {
    renderText("service");
});
