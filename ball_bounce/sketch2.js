let something = [];
let anotherthing = [1,3,5,7];

let b = [];

function setup() {
    createCanvas(750,750);
    // background(0);

    for (let i = 0; i < 10; i++) {
      let ball = new Ball(random(0,width),random(0,width),random(-1,1),random(-1,1),random(10,30));
      b.push(ball);
    }

    for (let i = 0; i < anotherthing.length; i++) {
      print(anotherthing[i]);
    }

    let r = floor(random(0, anotherthing.length));
    print(r + ' = ' + anotherthing[r]);
}

function draw() {
  // put drawing code here
  // ellipse(50,50,50,50);

  for (let i = 0; i < b.length; i++) {
    b[i].move();
    b[i].display();
    strokeWeight(i);
  }
}
