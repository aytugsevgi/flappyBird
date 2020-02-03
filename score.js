function Score(){
    this.x = 20;
    this.y = 40;
    this.score = 0;

    this.show = function(){
        fill(0);
        textSize(34);
        text(this.score,this.x,this.y);

    }
}