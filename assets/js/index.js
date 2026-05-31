
const kennedyText = document.getElementById("kennedy-reference-content");
const kennedyBox = document.getElementById("kennedy-box");
const videoControls = document.getElementById("video-controls");
const panelVideo = document.getElementById("kennedy-video");
const videoOverlay = document.getElementById("controls-feedback-overlay");
const volumePlus = document.getElementById("volume-plus");
const volumeMinus = document.getElementById("volume-minus");
const skipText = document.getElementById("skip-text");

const skipLength = 10;
const overlayContents = [volumePlus, volumeMinus, skipText];

let videoState;
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: .2,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting && videoState == true) {
      console.log(videoState);
      toggleVideo()
    } 
  })

}, observerOptions);

observer.observe(kennedyBox);

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
    //optional scroll to code. scrolls the viewport to have the video panel fill the screen when play is pressed.
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

function showOverlayText(elementToToggle) {
  elementToToggle.classList.add("visible-element");
}

function resetOverlayAnimation() {
  overlayContents.forEach(element => {
    if (element.classList.contains("visible-element")) {
      element.classList.remove("visible-element");
    }
  });
  videoOverlay.classList.remove("overlay-animation");
  void videoOverlay.offsetWidth;
}

//remove the class that triggers the animation to start on the overlay.
//this mainly accounts for the button being pressed again, during the animation playing. 
function checkOverlayNotActive() {
  if (videoOverlay.classList.contains("overlay-animation")) {
    resetOverlayAnimation();
  }
}

//triggers the animation to start playing on the overlay
function activateOverlay() {
  videoOverlay.classList.add("overlay-animation");

}

// function to manage the video skips as well as resetting and triggering of 
//video overlay panel to give feedback when video control buttons are pressed. 
function skipForward() {
  checkOverlayNotActive();
  showOverlayText(skipText);
  panelVideo.currentTime += skipLength;
  skipText.innerText = "+" + skipLength + "s";
  //add in code to make specific function related text (time skipped forward) visible and other content hidden.
  activateOverlay();
}

function increaseVolume() {
  checkOverlayNotActive();
  let newVolume = panelVideo.volume + 0.2;
  if (newVolume <= 1) {
    panelVideo.volume = panelVideo.volume + 0.2;
    //console.log("volume:", newVolume);
    volumePlus.innerText = "+20%";
    showOverlayText(volumePlus);
    activateOverlay();
  } else {
    volumePlus.innerText = "Max volume";
    showOverlayText(volumePlus);
    activateOverlay();
  }
}

function decreaseVolume() {
  checkOverlayNotActive();
  let newVolume = panelVideo.volume - 0.2;
  if (newVolume >= 0) {
    panelVideo.volume = panelVideo.volume - 0.2;
    // console.log("volume:", newVolume);
    volumeMinus.innerText = "-20%";
    showOverlayText(volumeMinus);
    activateOverlay();
  } else {
    volumeMinus.innerText = "Min volume";
    showOverlayText(volumeMinus);
    activateOverlay();
  }
}
//sets event listeners on video control elements. 
// increases volume by 20% each time it's clicked, up to a max of 100%
document.getElementById("volume-up").addEventListener("click", increaseVolume);

//decreases volume by 20% each time it's clicked, down to a min of 0%
document.getElementById("volume-down").addEventListener("click", decreaseVolume);

//add in eventlistener that detects click on panelVideo and triggers toggleVideo function
panelVideo.addEventListener("click", () => {
  if (panelVideo.paused === false) {
    toggleVideo();
  }
});

//skips forward skipLength seconds in the video when clicked.
document.getElementById("skip-forward").addEventListener("click", skipForward);
//toggles the play state of the video when the play/pause button is clicked.
document.getElementById("video-playback-toggle-button").addEventListener("click", toggleVideo);

videoOverlay.addEventListener("animationend", resetOverlayAnimation)

panelVideo.addEventListener("playing", () => {
  videoState = true;
  console.log("video is playing");
});
panelVideo.addEventListener("pause", () => {
  videoState = false;
  console.log("video is paused");
});


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

