let size = 600;
let clocks = []; //array of clocks

function setup() {
	createCanvas(size, size);

	for (let x = 0; x <= size; x += 20) {
		for (let y = 0; y <= size; y += 20) {
		clocks.push(new Clock(x,y));
		}
	}
}


function draw() {
	background(0);

	let swipe = map(mouseX, 0, size, 0,60);
	print(clocks.length);

	for (var i = 0; i < clocks.length; i++) {
	clocks[i].display((i/30)*swipe);
	// clocks[i].rotation(i);
	//console.log("shown");
	}

}

function Clock (x, y) {
	this.x = x;
	this.y = y;

	this.display = function(change) {
		push();
		translate(this.x, this.y)
		rotate(radians(change));
		stroke(255);
		line(0, 0, 10, 10);
		pop();
	}

	// this.rotation = function() {
	// 	this.x = this.x * noise(0.01*frameCount);
	// }
}
