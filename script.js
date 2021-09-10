var ball;

function setup() {
  createCanvas(500, 500);
  x = 0;
  y = 200;
  vx = 4;
  vy = 4; 
  a = 100;
  b = 300;
  ca = 8;
  cb = 6;
}

function draw() {
  background(225);
 fill(200,50,0)
  ellipse(x,y,50,50);
  fill(0,100,0)
  ellipse(a,b,80,80);
  x = x + vx;
  y = y + vy;
  a = a + ca;
  b = b + cb;

  if(x <= 0 || x > 500){
    vx = vx * -1;
  }
  if(y > 500 || y <= 0){
    vy = vy *-1;
  }
  if(a <= 0 || a > 500){
    ca = ca * -1;
  }
  if(b > 500 || b <= 0){
    cb = cb *-1;
  }
}