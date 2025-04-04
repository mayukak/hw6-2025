var video;

window.addEventListener("load", function() {
	console.log("Window loaded successfully");

	// Get the video element
	var video = document.getElementById("player1");
	
	//Turn off autoplay and looping
	video.autoplay = false;
	video.loop = false;
	video.load();

	//Play button
	document.getElementById("play").addEventListener("click", function () {
        video.play();
        document.getElementById("volume").innerText = `${video.volume * 100}%`;
        console.log("Play button clicked");
    });

    // Pause button
    document.getElementById("pause").addEventListener("click", function () {
        video.pause();
        console.log("Pause button clicked");
    });

    // Slow down button
    document.getElementById("slower").addEventListener("click", function () {
        video.playbackRate *= 0.9; 
        console.log("Video slowed down to: " + video.playbackRate.toFixed(5));
    });

    // Speed up button
    document.getElementById("faster").addEventListener("click", function () {
        video.playbackRate /= 0.9; 
        console.log("Video sped up to: " + video.playbackRate.toFixed(2));
    });

    // Skip ahead button
    document.getElementById("skip").addEventListener("click", function () {
        if (video.currentTime + 10 >= video.duration) {
            video.currentTime = 0; 
            console.log("Skipped to beginning");
        } else {
            video.currentTime += 10;
            console.log("Skipped ahead to: " + video.currentTime.toFixed(2));
        }
    });

    // Mute button
    document.getElementById("mute").addEventListener("click", function () {
        video.muted = !video.muted;
        this.innerText = video.muted ? "Unmute" : "Mute";
        console.log(video.muted ? "Video muted" : "Video unmuted");
    });

    // Volume slider
    document.getElementById("slider").addEventListener("input", function () {
        video.volume = this.value / 100; 
        document.getElementById("volume").innerText = `${this.value}%`;
        console.log("Volume changed to: " + video.volume);
    });

    // Vintage old school button
    document.getElementById("vintage").addEventListener("click", function () {
        video.classList.add("oldSchool"); 
        console.log("Old School style applied");
    });

    // Original style button
    document.getElementById("orig").addEventListener("click", function () {
        video.classList.remove("oldSchool"); 
        console.log("Original style restored");
    });
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

