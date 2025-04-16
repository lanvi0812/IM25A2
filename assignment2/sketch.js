//https://www.youtube.com/watch?v=4IyeLc6J1Uo&t=51s original tutorial that I used to learn about ASCII logic


let vid;
let asciiChar = " .*lanvi@";
let colors;
let currentColorIndex = 0;
let lastChangeTime = 0;
let changeInterval = 3000;

let weeks = [
  {text: "week 4",
    x: 100,
    y: 200,
    url: "./week 4/index.html",
  },

  {text: "week 5",
    x: 100,
    y: 300,
    url: "./week 5/index.html",
  },

  {text: "week 6",
    x: 100,
    y: 400,
    url: "./week 6/index.html",
  },

  {text: "<-back",
    x: 100,
    y: 500,
    url: "../index.html",
  },


];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // textAlign(LEFT, TOP);
  vid = createCapture(VIDEO);
  vid.size(windowWidth, windowHeight);
  vid.hide();      // Hide the HTML video element

  colors = [
    color(255, 0, 0),   // Red
    color(0, 255, 0),   // Green
    color(0, 0, 255),   // Blue
    color(255, 165, 0)  // Orange
  ];

  textSize(64);
  for (let link of weeks) {
    link.w = textWidth(link.text);
    link.h = textAscent() + textDescent();
  }
}



function draw() {
  background(255);

  if (millis() - lastChangeTime > changeInterval) {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    lastChangeTime = millis();
  }
  
  vid.loadPixels();  // Load the current frame's pixels
  
  let pixelsSize = 6;  // Control the resolution of the ASCII art
  
  for (let y = 0; y < vid.height; y += pixelsSize) {     
    for (let x = 0; x < vid.width; x += pixelsSize) {
      let index = (y * vid.width + x) * 4;
      let r = vid.pixels[index + 0];
      let g = vid.pixels[index + 1];
      let b = vid.pixels[index + 2];
      let brightness = (r + g + b) / 3;
      
   
      let tIndex = floor(map(brightness, 0, 255, asciiChar.length - 1, 0));
      let char = asciiChar.charAt(tIndex);
      
      
      textSize(8);
      fill(colors[currentColorIndex]);  
      noStroke();  
      textAlign(CENTER, CENTER); 
      text(char, x + pixelsSize / 2, y + pixelsSize / 2);
    }
  }

  textSize(64);
  textAlign(LEFT, TOP);
  let hovering = false;

  for (let link of weeks) {

    let isHovering = (
      mouseX >= link.x &&
      mouseX <= link.x + link.w &&
      mouseY >= link.y &&
      mouseY <= link.y + link.h
    );
  
    if (isHovering) {
      fill(100, 100, 255); // hover color
      hovering = true;
    } else {
      fill(colors[currentColorIndex]);
    }
  
    text(link.text, link.x, link.y);
  }
  
  // Set cursor once
  if (hovering) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

function mousePressed() {
  for (let link of weeks) {
    if (
      mouseX >= link.x &&
      mouseX <= link.x + link.w &&
      mouseY >= link.y &&
      mouseY <= link.y + link.h
    ) {
      window.location.href = link.url;
    }
  }
}

