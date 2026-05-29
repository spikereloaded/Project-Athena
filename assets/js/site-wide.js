//grabs the navigation menu element for use in multiple functions
const navigationMenu = document.getElementById("navigation");

//gathers all elements with the class "scroll-arrow"  
const scrollArrows = document.querySelectorAll(".scroll-arrow");

// function to scroll viewport to a specific panel.
function scrollToPanel(panelId) {
  let panelElement = document.getElementById(panelId);
  if(panelElement) panelElement.scrollIntoView({ block: "start", behavior: "smooth" });
}

//toggles the visibility of the nav menu in mobile view when the burger menu icon is clicked.
function toggleNav() {
  navigationMenu.classList.toggle("nav-open");
}

//closing the nav menu automatically when user has it open but clicks/presses outside of nav
function checkNavMenu() {
  navigationMenu.classList.remove("nav-open");
}

//listens for click events on the main content element. triggers nav menu to close if open and user clicks outside of it.
document.getElementById("main-content-container").addEventListener("click", checkNavMenu);

//listens for clicks on burger menu icon. toggles nav menu open and closed.
document.getElementById("mobile-nav-toggle").addEventListener("click", toggleNav);

//adds click event listeners to them. when clicked, 
// scrolls the viewport to the next panel as specified in the data-next-panel attribute of the arrow element.
scrollArrows.forEach(arrow => {
  arrow.addEventListener("click", () => {
    const nextPanelId = arrow.getAttribute("data-next-panel");
    scrollToPanel(nextPanelId);
  });
});


