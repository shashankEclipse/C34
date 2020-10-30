class Ground {
    constructor(x,y,a,b) {

        var option = {
            isStatic : true
        }
    
            this.body = Bodies.rectangle(x,y,a,b,option)
            this.width = a;
            this.height = b;
            World.add(myWorld, this.body);
    
    }

     display(){
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x , this.body.position.y , this.width, this.height);


     }











}