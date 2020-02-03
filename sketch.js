

var bird;
var pipes = [];
var score;
var gameover;
var x1 = 0;
var x2;
var scrollSpeed = 2;
function preload() {
  img = loadImage('./images/bird.png');
  bgimg = loadImage('./images/background-day.png');
  pipeimg = loadImage('./images/pipe.png');
  pipeReverseimg = loadImage('./images/pipe-reverse.png');
  
}
function setup() {
  createCanvas(400, 600);
  bird = new Bird(img);
  pipes.push(new Pipe(pipeimg,pipeReverseimg));
  score = new Score();
  gameover = new Gameover();
  x2 = width;
}



function draw() {
  image(bgimg, x1, 0, width, height);
  image(bgimg, x2, 0, width, height);
  x1 -= scrollSpeed;
  x2 -= scrollSpeed;
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }

  for (var i = pipes.length-1; i >= 0; i--){
    pipes[i].show();
    pipes[i].update();
    
    
    if(pipes[i].x==40){
      score.score += 1;
    }
    if (pipes[i].offscreen()){
      pipes.splice(i,1);
    }
    if(pipes[i].hits(bird)){
      gameover.show(score.score);
      noLoop();
    }
    
  }



  bird.show();
  bird.update();
  if( frameCount%80 == 0){
    pipes.push(new Pipe(pipeimg,pipeReverseimg));
  }
  
  score.show();
}
function mousePressed() {
  pipes = [];
  bird = new Bird(img);
  score = new Score();
  draw();
  loop();
}


function keyPressed(){  
  if (key == ' ') {
    bird.up();
  }
}