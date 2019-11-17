let canvas;
let canvasWidth = 300;
let canvasHeight = 300;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 70);
  noCursor(); // no show cursor
}

function draw() {
  background(240,220,210,10);
  fill(random(0,255),random(0,255),random(0,255));
  rect(random(0,250),random(0,250),75,75);
 loop();
}
