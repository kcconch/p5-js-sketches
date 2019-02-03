let socket;
let iCol;

function setup() {
	colorMode(HSB);
	frameRate(120);

	createCanvas(windowWidth, windowHeight);
	background(255);

	socket = io.connect('http://localhost:3000');
	socket.on('mouse', newDrawing);
}

function newDrawing(data) {
	//other drawing

 	let tsid = data.sid;
	iCol = tsid.charCodeAt(tsid.length-1);
	let tCol = iCol % 2;

	stroke(tCol*100+100,255,255);
	fill(tCol*100+100,255,255);

	ellipse(data.x, data.y, 10, 10);
	line(data.x,data.y,data.px,data.py);
}

function mouseDragged() {
	// console.log('Sending:' + mouseX + ',' + mouseY);

	console.log(socket.id + '___' + iCol);

	let data = {
		x: mouseX,
		y: mouseY,
		px: pmouseX,
		py: pmouseY,
		sid: socket.id
	}

	socket.emit('mouse', data);

	//self drawing
	fill(0);
	stroke(0);
	ellipse(mouseX, mouseY, 10, 10);
	line(pmouseX,pmouseY,mouseX,mouseY);

}

function draw() {

	// if (mouseIsPressed) {
	//
	// }
}
