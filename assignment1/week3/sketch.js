//original code https://editor.p5js.org/slow_izzm/sketches/535SiO_aC

let images = [];
let imgPaths = ['img/img1.png','img/img2.png','img/img4.png','img/img3.png','img/img5.png','img/img6.png','img/img7.png','img/img8.png','img/img9.png', 'img/img10.png'];
let currentIndex = 0;
let previous, next;

function preload() {
  for (let i = 0; i < imgPaths.length; i++) {
    images[i] = loadImage(imgPaths[i]);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupButtons(); 
}

function draw() {
  background(220); 
  image(images[currentIndex], 0, 0, width, height); 
}

function setupButtons() {
  previous = createButton('Prev');
  previous.position(width * 0.5 - 100, height - 50); // Keep button visible
  previous.mouseClicked(() => {
    if (currentIndex > 0) currentIndex--;
  });

  next = createButton('Next');
  next.position(width * 0.5 + 100, height - 50);
  next.mouseClicked(() => {
    if (currentIndex < images.length - 1) currentIndex++; 
  });
}
