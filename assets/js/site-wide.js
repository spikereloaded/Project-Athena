const arrow = document.getElementById("scroll-arrow");

//checks to see if the scroll arrow is visible in the viewport currently
//if the scroll arrow moves out of the viewport, it will hide it
//ensures that the scroll arrow is not visible when scrolling up and down
let observer = new IntersectionObserver(function (entries, observer) {
  let onScreen = entries[0]["isIntersecting"];
  if (!onScreen && arrow.hidden == false) {
    console.log("arrow hiddden");
    arrow.hidden = true;
  }
});

observer.observe(arrow);

//checks the scroll position on the Y. axis to see if the viewport is 
//a set distance from the top (e.g. 0 = very top, 50 = 50 px from the top). 
// If it is, and the scroll arrow is hidden, make the scroll arrow visible again.
window.addEventListener("scroll", () => {
  if (window.scrollY < 50 && arrow.hidden == true) {
    console.log("arrow visible");
    arrow.hidden = false;
  }
});

// function to scroll viewport to a specific panel
function scrollToPanel(panelId){
    let panelElement = document.getElementById(panelId)
    let panelLocation = panelElement.getBoundingClientRect();
    console.log(panelLocation.y);
    window.scrollBy({top:panelLocation.top, behavior: "smooth"} );
}
