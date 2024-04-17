let angle = 0;
let hueOffset = 0;

function setup() {
  createCanvas(1980, 1080);
  colorMode(HSB, 360, 100, 100);
  background(255);
  noFill();
}

function draw() {
  background(0);
  translate(width / 2, height); // Center the pattern vertically

  // Update hue offset based on frame count for color shifting
  hueOffset = frameCount / 2;

  stroke(hueOffset % 360, 100, 100); // Set stroke color based on hue offset
  branch(220);
  angle += 0.005; // Decreased angle increment for slower rotation
}

function branch(len) {
  if (len > 2) {
    strokeWeight(len / 20);
    line(0, 0, 0, -len);
    translate(0, -len);
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
