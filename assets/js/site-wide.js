const burger = document.getElementById("mobile-nav-toggle");
const navigationMenu = document.getElementById("navigation");

//listens for click events on the main content element 
const mainContent = document.getElementById("main-content-container");
mainContent.addEventListener("click",checkNavMenu);


let screenWidth = screen.width;


// function to scroll viewport to a specific panel
function scrollToPanel(panelId){
    let panelElement = document.getElementById(panelId)
    let panelLocation = panelElement.getBoundingClientRect();
    console.log(panelLocation.y);
    window.scrollBy({top:panelLocation.top, behavior: "smooth"} );
}


function toggleNav(){
  if(navigationMenu.style.display == "none"){
    navigationMenu.style.display = "block";
  } else {
    navigationMenu.style.display = "none";
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY >50 && navigationMenu.style.display == "block") {
    console.log("shut menu");
    navigationMenu.style.display = "none";
  }
});

//closign the nav menu automatically when user has it open but clicks/presses outside of nav
function checkNavMenu(){
  if(navigationMenu.style.display == "block"){
    navigationMenu.style.display = "none";
  }
}