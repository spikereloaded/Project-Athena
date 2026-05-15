// toggles the play state of the video playing in the background of panel 3
function toggleVideo() {
    let panelVideo = document.getElementById("kennedy-video");

    if (panelVideo.paused) {
        panelVideo.play()
    } else {
        panelVideo.pause();
    }
}