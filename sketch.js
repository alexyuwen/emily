let canvasWidth;
let canvasHeight;
let centerX, centerY;
let r, s;
let offsets = {'centerX': 0, 'centerY': 1, 'r': 2, 'rotationAngle': 3};
let emily;
let emilyWidth;
let emilyHeight;

function preload() {
  emily = loadImage("media/emily.JPG");
  dancing = loadImage("media/dancing.gif");
}

function setup() {
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  createCanvas(canvasWidth, canvasHeight);

  emilyWidth = (emily.width / emily.height) * canvasHeight;
  emilyHeight = canvasHeight;

  angleMode(DEGREES);
}

function draw() {
  centerX = map(noise(offsets.centerX), 0, 1, 0, canvasWidth / 3);
  centerY = map(noise(offsets.centerY), 0, 1, 0, canvasHeight / 2);
  r = map(noise(offsets.r), 0, 1, 0, 2);
  rotationAngle = map(noise(offsets.rotationAngle), 0, 1, -20, 20);
  
  background(dancing);

  push();
  translate(centerX, centerY);
  rotate(rotationAngle);
  image(emily, centerX, centerY, r * emilyWidth, r * emilyHeight);
  pop();
  
  offsets.centerX += 0.01;
  offsets.centerY += 0.01;
  offsets.r += 0.01;
  offsets.rotationAngle += 0.018;
}

// Dynamic window resizing
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  centerX = canvasWidth / 2;
  centerY = canvasHeight / 2;
}

//
//
// CUSTOM FUNCTIONS
//
//

