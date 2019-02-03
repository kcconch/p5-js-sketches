let playing = false;
let left;
let middle;
let right;
let button;

let currentVideo;


function setup() {
	createCanvas(0,0);
  // specify multiple formats for different browsers
  left = createVideo(['msnbc.mp4']);
	middle = createVideo(['cspan.mp4']);
	right = createVideo(['fox.mp4']);

	currentVideo = middle;

  button = createButton('play');
  button.mousePressed(toggleVid); // attach button listener
}

// plays or pauses the video depending on current state

function keyPressed() {
    console.log(key);
    if (keyCode == 37) {
			currentVideo.pause();
      currentVideo = left;
			currentVideo.loop();
    } else if (keyCode == 40) {
			currentVideo.pause();
			currentVideo = middle;
			currentVideo.loop();
    } else if (keyCode == 39) {
			currentVideo.pause();
			currentVideo = middle;
			currentVideo.loop();
		}

}

function toggleVid() {
  if (playing) {
    currentVideo.pause();
    button.html('play');
  } else {
    currentVideo.loop();
    button.html('pause');
  }
  playing = !playing;
}
