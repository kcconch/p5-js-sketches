let buttons = [];

function setup() {
  createCanvas(500,500);
  for (let i = 0; i < 40; i++) {
    let b = createButton(i);
    b.position(50, i*30);
    buttons.push(b);
    // b.mousePressed(buttonClicked);
    b.mousePressed(
        function() {
        window.alert("Hey! I am " + i)
        }
    );

  }
}

function buttonClicked() {
  window.alert("Hey!");
}

function draw(){

}
