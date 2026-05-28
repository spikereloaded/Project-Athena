
const arrow = document.getElementById("scroll-arrow");
const kennedyText = document.getElementById("kennedy-reference-content");
const videoControls = document.getElementById("video-controls");
const toggleButton = document.getElementById("toggle-button");
const panelVideo = document.getElementById("kennedy-video");
const volumeUp = document.getElementById("volume-up");
const volumeDown = document.getElementById("volume-down");
const skipForward = document.getElementById("skip-forward");


// toggles the play state of the video playing in the background of panel 3
function toggleVideo() {

    const faIcon = document.querySelector("#toggle-button[data-fa-i2svg]") ;

  if (panelVideo.paused) {
    panelVideo.volume = 0;
    kennedyText.style.visibility = "hidden";
    videoControls.style.display = "flex";
    faIcon.classList.remove("fa-play");
    faIcon.classList.add("fa-stop");
    panelVideo.play();
    panelVideo.muted = false;
  } else {
    panelVideo.pause();
    videoControls.style.display = "none";
    kennedyText.style.visibility = "visible";
    faIcon.classList.remove("fa-stop");
    faIcon.classList.add("fa-play");
  }
}

volumeUp.addEventListener("click", function() {
  let newVolume = panelVideo.volume + 0.2;
  if (newVolume <= 1){
    panelVideo.volume = panelVideo.volume + 0.2;
    console.log("volume:", newVolume);
  }
  else{
    console.log("Max volume hit");
  }
  
})
volumeDown.addEventListener("click", function() {
  let newVolume = panelVideo.volume - 0.2;
  if (newVolume >= 0 ){
    panelVideo.volume = panelVideo.volume - 0.2;
    console.log("volume", newVolume);
  } else {
    console.log("Min volume hit");
  }
 
})
skipForward.addEventListener("click", function() {
  panelVideo.currentTime = panelVideo.currentTime + 10;
  console.log("current time", panelVideo.currentTime);
})
//https://www.w3schools.com/howto/howto_js_countdown.asp
// // Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2028 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function () {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("countdown-text").innerHTML = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ";


//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("countdown-text").innerHTML = "EXPIRED";
//   }
// }, 1000);


