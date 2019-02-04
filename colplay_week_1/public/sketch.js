let socket;
let iCol;
let img;

let vol;
let mic;
let color = 0;

let latitude, longitude;


var locationData;
function preload(){
		socket = io.connect('https://localhost:3000');
		socket.on('mouse', newDrawing);

    locationData =  getCurrentPosition();

		img = loadImage('map.png');

		mic = new p5.AudioIn();

		mic.start();

}

function setup() {
	colorMode(HSB);
	frameRate(120);

	createCanvas(windowWidth, windowHeight);
	background(255);


	print(locationData.latitude);
  print(locationData.longitude);

	latitude = map(locationData.latitude, -180, 180, height, 0);
	longitude = map(locationData.longitude, -180, 180, 0, width);



}

function draw() {




	// noLoop();
	// image(img, 0, 0, width, height);

	// if (mouseIsPressed) {
	//
	// }
}

function newDrawing(data) {
	// image(img, 0, 0, width, height);
	//other drawing

 	let tsid = data.sid;
	iCol = tsid.charCodeAt(tsid.length-1);
	let tCol = iCol % 2;

	let size = dist(data.long,data.lat,data.x,data.y)/4;

	stroke(tCol*100+100,255,255);
	fill(tCol*100+100,data.c,data.c);

	ellipse(data.x, data.y, size, size);
	line(data.long,data.lat,data.x,data.y);
}

function mouseDragged() {
	vol = mic.getLevel();


	color = map(vol, 0, 0.5, 0, 255);
	print(color);



	// console.log('Sending:' + mouseX + ',' + mouseY);

	// console.log(socket.id + '___' + iCol);

	let data = {
		x: mouseX,
		y: mouseY,
		px: pmouseX,
		py: pmouseY,
		lat: latitude,
		long: longitude,
		c: color,
		sid: socket.id
	}

	socket.emit('mouse', data);

	let size = dist(longitude,latitude,mouseX,mouseY)/4;

	// self drawing
	fill(0);
	stroke(0);
	ellipse(mouseX, mouseY, size, size);
	line(longitude,latitude,mouseX,mouseY);

}
