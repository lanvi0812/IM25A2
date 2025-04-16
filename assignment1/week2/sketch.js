//source code: https://editor.p5js.org/NicolasTilly/sketches/mH-TgZcFa 

let images = []; // Array to store multiple images
let imgPaths = ['img/moodboard1.jpg', 'img/moodboard2.jpg', 'img/moodboard3.jpg','img/moodboard4.jpg', 'img/moodboard5.jpg', 'img/moodboard6.jpg','img/moodboard7.jpg', 'img/moodboard8.jpg', 'img/moodboard9.jpg','img/moodboard10.jpg', 'img/moodboard11.jpg', 'img/moodboard12.jpg','img/moodboard13.jpg', 'img/moodboard14.jpg', 'img/moodboard15.jpg','img/moodboard16.png', 'img/moodboard17.jpg', 'img/moodboard18.jpg','img/moodboard19.jpg', 'img/moodboard20.jpg', 'img/moodboard21.jpg','img/moodboard22.jpg', 'img/moodboard23.jpg', 'img/moodboard24.jpg','img/moodboard25.jpg']; 
function preload() {
  for (let i = 0; i < imgPaths.length; i++) {
    images.push({
      img: loadImage(imgPaths[i]),
      x: 900, //initial positions 
      y: 575,
      w: 150,
      h: 175,
      dragging: false, 
      offsetX: 0, //make sure mouse and image are in the same position 
      offsetY: 0
    });
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  for (let i = 0; i < images.length; i++) {
    let imgObj = images[i];

 //update image position relative to mouse position when being dragged
    if (imgObj.dragging) {    
      imgObj.x = mouseX + imgObj.offsetX;
      imgObj.y = mouseY + imgObj.offsetY;
    }

    image(imgObj.img, imgObj.x, imgObj.y, imgObj.w, imgObj.h); 
  }
}

function mousePressed() { //used ChatGPT help to set up this logic
  for (let i = images.length - 1; i >= 0; i--) { // Check from topmost image
    let imgObj = images[i];

    if (mouseX > imgObj.x && mouseX < imgObj.x + imgObj.w && mouseY > imgObj.y && mouseY < imgObj.y + imgObj.h) { //check if mouse is within the image boundary
      imgObj.dragging = true;
      imgObj.offsetX = imgObj.x - mouseX;
      imgObj.offsetY = imgObj.y - mouseY;
      break; // Stop checking once the topmost image is found
    }
  }
}

function mouseReleased() {
  for (let i = 0; i < images.length; i++) {
    images[i].dragging = false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function popup() {

    let button = select('button'); 
    button.mousePressed(toggleHidden); 
  }
  
  function toggleHidden() {
    let element = select('#popUp');

    if (element.hasClass('hidden')) {
      element.removeClass('hidden');  // If hidden, remove the 'hidden' class to show it
    } else {
      element.addClass('hidden');     // If not hidden, add the 'hidden' class to hide it
    }
  }