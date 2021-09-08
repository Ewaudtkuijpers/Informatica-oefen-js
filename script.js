var x, y, v;

function setup() {
  createCanvas(500, 500);

  x = 0;
  y = 200;
  v = 3;
}

function draw() {
  background(225);

  ellipse(x,y,50,50);
  x = x + v;
  y = y + v;

  if(x <= 0 || x > 500){
    v = v * -1;
  }
  if(y > 500 || y <= 0){
    v = v *-1;
  }
}