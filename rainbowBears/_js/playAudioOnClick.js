// JavaScript Document
var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};
/*
<audio id="myAudio" src="http://www.sousound.com/music/healing/healing_01.mp3" preload="auto">
</audio>
<a onClick="togglePlay()">Click here to hear.</a>
*/