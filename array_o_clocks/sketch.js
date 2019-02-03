let rad = 800;
let clocks = []; //array of clocks
let arm1;
let arm2;
let arm3;
let arm4;
let arm0 = 0;

const MODE1 = 49;
const MODE2 = 50;
const MODE3 = 51;
const MODE4 = 52;

let color;

function setup() {
	createCanvas(1280, 720);
  rectMode(CENTER);

	for (let x = 0; x <= rad; x += 25) {
		for (let y = 0; y <= rad; y += 25) {
		clocks.push(new Clock(x,y));
		}
	}
}


function draw() {
	background(0);

  if (mouseIsPressed) {
    background(255);
    color = 225;
  } else {
    color = 255;
  }


	// print(clocks.length);

	for (var i = 0; i < clocks.length; i++) {
	clocks[i].display(i, mouseX, mouseY);
	// clocks[i].rotation(i);
	//console.log("shown");
	}


}

class Clock {
  constructor(x, y) {
	this.x = x;
	this.y = y;
  }

	display(change, x, y) {
  	// arm1 = map(mouseX, 0, rad, 0,150);
  	// arm2 = sqrt(mouseX * mouseY);

    arm4 = dist(x, y, this.x, this.y);
    arm1 = (change) / (arm4);
    arm2 = (change/60) * map(sqrt(x*y), 0, rad, 0,150);
    arm3 = dist(x,y,rad/2,rad/2);

    modeSwitch();

    push();
		translate(this.x, this.y)
		// rotate(radians(arm1));
    // rotate(radians(arm4));
    rotate(radians(arm4));
    // strokeWeight(arm4/100);
		stroke(color);
    noFill();
		line(0, 0, 10, 10);
    // ellipse(arm0/20-5,arm0/20-5,arm0/20,arm0/20);


		pop();

	}

	// this.rotation = function() {
	// 	this.x = this.x * noise(0.01*frameCount);
	// }
}

function modeSwitch() {
  if (keyCode == MODE1) {
    arm0 = arm1;
  }
  else if (keyCode == MODE2) {
    arm0 = arm2;
  }
  else if (keyCode == MODE3) {
    arm0 = arm4;
  }
  else if (keyCode == MODE4) {
    arm0 = arm3;
  }
}
