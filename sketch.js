var isDrawing = false;
var isSmall = false;
var y = 0;

function setup()
{
  createCanvas(640, 640);
  background(0);
}

function draw()
{
  if((isDrawing == true) && (isSmall == false))
  {
    rectMode(CENTER);
    fill(255);
    rect(pmouseX, y, 200, 200);
    y++;
  }
  if((isDrawing == true) && (isSmall == true))
  {
    rectMode(CENTER);
    fill(255);
    rect(pmouseX, y, 150, 150);
    y++;
  }
  if (y > 740)
  {
    background(0);
    y = 0;
  }
}

function mousePressed()
{
  isDrawing = true;
}

function mouseReleased()
{
  isDrawing = false;
}

function keyPressed()
{
  isSmall = true;
}

function keyReleased()
{
  isSmall = false;
}