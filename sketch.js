var myImg;

function preload() {
  myImg = loadImage("assets/bird.jpg")
}

function backgroundImage(img) {
  var x = 0;
  var y = 0;
  var w = width;
  var h = height;
  
  var offsetX = 0.5;
  var offsetY = 0.5;
  
  var iw = img.width,
      ih = img.height,
      r = Math.min(w/iw, h/ih),
      nw = iw*r,
      nh = ih*r,
      cx, cy, cw, ch, ar = 1;
      
  if (nw<w) ar = w/nw;
  if (Math.abs(ar - 1) < 1e-14 && nh<h) ar = h/nh;
  nw *= ar;
  nh *= ar;
  
  
  cw = iw / (nw/w);
  ch = ih / (nh/h);
  
  cx = (iw-cw) * offsetX;
  cy = (ih-ch) * offsetY;
  
  
  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cw > iw) cw = iw;
  if (ch > ih) ch = ih;
  
  
  image(img, cx, cy, cw, ch, x, y, w, h);
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  pixelDensity(1);
  
}


function draw() {
  
 // myImg.filter("gray");
  //myImg.filter("invert");
  
    myImg.loadPixels();
   for (var y = 0; y < myImg.height; y++){
     for (var x = 0; x < myImg.width; x++){
       var loc = (x+y*myImg.width)*4;
       myImg.pixels[loc]= random(255);
     }
   }
     myImg.updatePixels();
     
  backgroundImage(myImg);
  

  
  //translate(0, -1*(height/10));
  textFont('Anton');
  fill(255,210,0);
  textSize(height/10);
  textAlign(CENTER);
  text(hour(),width/4,height/24*hour());
  text(minute(),width/2,height/60*minute());
  text(second(),width/4*3,height/60*second());
  
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}