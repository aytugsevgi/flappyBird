function Bird(img) {
    this.y = height/2;
    this.x = 64;
    this.gravity = 0.3;
    this.lift = -10;
    this.velocity = 0;
    this.show = function() {
       
        image(img,this.x, this.y, 32, 32);

    }

    this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;
    
        if (this.y >= height-32){
            this.y = height-32;
            this.velocity = 0;
        }
        else if(this.y <= 0){
            this.y = 0;
            this.velocity = 0;
        }
    }
    this.up = function() {
        this.velocity += this.lift;
    }
}