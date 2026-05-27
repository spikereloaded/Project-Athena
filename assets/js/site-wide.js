const burger = document.getElementById("mobile-nav-toggle");
const navigationMenu = document.getElementById("navigation");

//listens for click events on the main content element 
const mainContent = document.getElementById("main-content-container");
mainContent.addEventListener("click",checkNavMenu);


let screenWidth = screen.width;


// function to scroll viewport to a specific panel.
function scrollToPanel(panelId){
    let panelElement = document.getElementById(panelId)
    panelElement.scrollIntoView({block: "start", behavior: "smooth"} );
}


function toggleNav(){
  if(navigationMenu.style.display == "none"){
    navigationMenu.style.display = "block";
  } else {
    navigationMenu.style.display = "none";
  }
}



//closing the nav menu automatically when user has it open but clicks/presses outside of nav
function checkNavMenu(){
  if(navigationMenu.style.display == "block"){
    navigationMenu.style.display = "none";
  }
}