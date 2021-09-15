class Ball{
  constructor(x, y, w, h, vx, vy){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
  }
  drawBall(){
  ellipse(this.x,this.y,this.w,this.h);
  this.x = this.x + this.vx;
  this.y = this.y + this.vy;

  if(this.x <= 0 || this.x > 500){
    this.vx = this.vx * -1;
  }
  if(this.y > 500 || this.y <= 0){
    this.vy = this.vy *-1;
  }
}


function setup(){
  createCanvas(500, 500);
  background(205);
}


function draw(){
 ball1 = new Ball(0,200,20,20,5,5);
}