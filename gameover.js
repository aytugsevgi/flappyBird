function Gameover(){
    this.y = height/2;
    this.x = 80;

    this.show = function(score) {
        fill(0);

        textSize(40);
        text("GAME OVER!",this.x,this.y);
    
        textSize(20);
        text("Click screen for try again..",this.x+10,this.y+40);

        textSize(30);
        text("Score:"+score,this.x+66,this.y-60);
        
    }
}