class Ball  {
    constructor(x,y,a,b) {

        var options = {
            restitution : 1,
            friction : 0.5,
            density : 1
        }
    
            this.body = Bodies.rectangle(x,y,a,b,options)
            this.width = a;
            this.height = b;
            World.add(myWorld, this.body);
    
    }

     display(){
        push();
        translate(this.body.position.x , this.body.position.y);
        
        fill("blue");
        rectMode(CENTER);
        ellipse(0 ,0 , this.width, this.height);
        pop();


     }











}