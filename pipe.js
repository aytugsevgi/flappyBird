function Pipe(pipeimg,pipeReverseimg) {
    this.top= random(40,height-200);
    this.bottom = height - this.top - 160 ;
    this.x = width;
    this.w = 20;
    this.speed = 5;
 

    this.show = function() {
        fill(255);
        console.log(this.top);
        console.log(this.bottom);
        
        image(pipeReverseimg,this.x,0,this.w,this.top);
        
        image(pipeimg,this.x,height-this.bottom,this.w,this.bottom);
        
        
    }
    this.update = function() {
        this.x -= this.speed;
       
        
    }
    this.offscreen = function(){
        if(this.x < -this.w ) {
            return true;
        }
        return false;
    }
    this.hits = function(bird) {
        if (bird.y < this.top || bird.y+30> height - this.bottom){
            if(bird.x+24>this.x && bird.x < this.x + this.w){
                return true;
            }
            
          

        }
    }
}