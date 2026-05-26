
const arrow = document.getElementById("scroll-arrow");

// toggles the play state of the video playing in the background of panel 3
function toggleVideo() {
    let panelVideo = document.getElementById("kennedy-video");
    let toggleButton = document.getElementById("toggle-button");

    if (panelVideo.paused) {
        panelVideo.volume = 0.5;
        panelVideo.play()
        panelVideo.muted = false;
        
        toggleButton.innerText = "Pause";
    } else {
        panelVideo.pause();
        toggleButton.innerText = "Play";
    }
}

//https://www.w3schools.com/howto/howto_js_countdown.asp
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2028 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown-text").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-text").innerHTML = "EXPIRED";
  }
}, 1000);


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