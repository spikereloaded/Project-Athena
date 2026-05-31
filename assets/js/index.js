
const kennedyText = document.getElementById("kennedy-reference-content");
const videoControls = document.getElementById("video-controls");
const panelVideo = document.getElementById("kennedy-video");
const videoOverlay = document.getElementById("controls-feedback-overlay");
const skipText = document.querySelector("#overlay-skip-text");


// toggles the play state of the video playing in the background of panel 3
function toggleVideo() {


  if (panelVideo.paused) {
    panelVideo.volume = 0.2;
    kennedyText.classList.remove("slide-in");
    kennedyText.classList.toggle("slide-out");
    videoControls.classList.toggle("hidden");
    document.getElementById("play-icon").classList.toggle("hidden-element");
    document.getElementById("stop-icon").classList.toggle("hidden-element");
    //add in feedback class to show button was pressed
    document.getElementById("video-playback-toggle-button").classList.toggle("pressed-control");
    panelVideo.muted = false;
    panelVideo.play();

    scrollToPanel("kennedy-box");
  } else {
    panelVideo.pause();
    videoControls.classList.toggle("hidden");
    kennedyText.classList.toggle("slide-out");
    kennedyText.classList.toggle("slide-in");

    document.getElementById("play-icon").classList.toggle("hidden-element");
    document.getElementById("stop-icon").classList.toggle("hidden-element");
    //remove feedback class to show button was pressed
    document.getElementById("video-playback-toggle-button").classList.toggle("pressed-control");
  }
}

function skipForward() {
  if (videoOverlay.classList.contains("overlay-animation")) {
    videoOverlay.classList.remove("overlay-animation");
  }
  if (skipText.classList.contains("visible-element")) {
    skipText.classList.remove("visible-element");
  }
  
  panelVideo.currentTime += 10;
  skipText.classList.toggle("visible-element");
  void videoOverlay.offsetWidth;
  videoOverlay.classList.add("overlay-animation");

}

function resetOverlayAnimation() {
  // alert("animation finished");
  skipText.classList.toggle("visible-element");
  videoOverlay.classList.remove("overlay-animation");

}
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

//sets event listeners on video control elements. 
// increases volume by 20% each time it's clicked, up to a max of 100%
document.getElementById("volume-up").addEventListener("click", function () {
  let newVolume = panelVideo.volume + 0.2;
  if (newVolume <= 1) {
    panelVideo.volume = panelVideo.volume + 0.2;
    console.log("volume:", newVolume);
  }
  else {
    console.log("Max volume hit");
  }

})

//decreases volume by 20% each time it's clicked, down to a min of 0%
document.getElementById("volume-down").addEventListener("click", function () {
  let newVolume = panelVideo.volume - 0.2;
  if (newVolume >= 0) {
    panelVideo.volume = panelVideo.volume - 0.2;
    console.log("volume", newVolume);


  } else {
    console.log("Min volume hit");
  }
});

//add in eventlistener that detects click on panelVideo and triggers toggleVideo function

panelVideo.addEventListener("click", () => {
  if (panelVideo.paused === false) {
    toggleVideo();
  }
});



//skips forward 10 seconds in the video when clicked.
document.getElementById("skip-forward").addEventListener("click", skipForward);
//toggles the play state of the video when the play/pause button is clicked.
document.getElementById("video-playback-toggle-button").addEventListener("click", toggleVideo);

videoOverlay.addEventListener("animationend", resetOverlayAnimation)