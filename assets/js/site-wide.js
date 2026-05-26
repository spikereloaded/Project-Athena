const burger = document.getElementById("mobile-nav-toggle");
const navigationMenu = document.getElementById("navigation");
let screenWidth = screen.width;


// function to scroll viewport to a specific panel
function scrollToPanel(panelId){
    let panelElement = document.getElementById(panelId)
    let panelLocation = panelElement.getBoundingClientRect();
    console.log(panelLocation.y);
    window.scrollBy({top:panelLocation.top, behavior: "smooth"} );
}

// //function to toggle visiblity of mobile first navigation menu
// function toggleNav(){
//   if(navigationMenu.classList.contains("hidden")){
//     navigationMenu.classList.remove("hidden");
//     navigationMenu.classList.add("visible-block");
//   }else{
//     navigationMenu.classList.remove("visible-block");
//     navigationMenu.classList.add("hidden");
//   }
// }

function toggleNav(){
  if(navigationMenu.style.display == "none"){
    navigationMenu.style.display = "block";
  } else {
    navigationMenu.style.display = "none";
  }
}