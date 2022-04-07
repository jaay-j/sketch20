var cats;
let mySound;

function preload() {
cats = loadFont('assets/CatsAlphabet.otf');
  soundFormats('mp3');
  mySound = loadSound('assets/catmeowhungry_zapsplat');
}

function setup() {
  // let cnv = createCanvas(1000, 1000);
  createCanvas(1000, 1000);
  // cnv.mousePressed(canvasPressed);
  background(199, 255, 247);

  // textFont(cats);
  // text('TAP here to play', 200, 400);
}

function draw() {
    push();
    stroke(252, 186, 3);
    fill(0);
    textSize(50);
    textFont(cats)
    text('TAP TO NEOW', 240, 300);
    pop();

    push();
    translate(width / 2, height / 2);
    rotate(PI / 2.0);
    stroke(252, 186, 3);
    fill(0);
    textSize(50);
    textFont(cats)
    text('TAP TO NEOW', -200, -210);
    pop();

    push();
    translate(width / 2, height / 2);
    rotate(PI / 2.0);
    stroke(252, 186, 3);
    fill(0);
    textSize(50);
    textFont(cats)
    text('TAP TO NEOW', -200, 300);
    pop();

    push();
    fill(201, 106, 50);
    textSize(15);
    text('Raise your volume please!', 400, 230);
    pop();
}

function mousePressed() {
  // is equivalent to `userStartAudio()`
  mySound.play();
}


function keyPressed(){
    if (key == 's'){
        saveCanvas("sketch-20", "png");
    }
}