const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var myEngine , myWorld;

function setup(){
createCanvas(1000,800);

myEngine = Engine.create()
myWorld = myEngine.world;


    ground = new Ground(500,600,1000,20);

    box1 = new Box(500,250,50,50);
    box2 = new Box(500,250,50,50);
    box3 = new Box(500,250,50,50);
    box4 = new Box(500,250,50,50);
    box5 = new Box(500,250,50,50);
    box6 = new Box(500,250,50,50);
    box7 = new Box(500,250,50,50);

    box8 = new Box(450,250,50,50);
    box9 = new Box(450,250,50,50);
    box10 = new Box(450,250,50,50);
    box11= new Box(450,250,50,50);
    box12 = new Box(450,250,50,50);
    box13 = new Box(450,250,50,50);
    box14 = new Box(450,250,50,50);

    ball = new Ball(200,250,100,100);
    rope = new Rope(ball.body,{ x:300, y:250});
}

function draw() {
    background("black");
    Engine.update(myEngine);
        ground.display();
        box1.display();
        box2.display();
        box3.display();
        box4.display();
        box5.display();
        box6.display();
        box7.display();
        box8.display();
        box9.display();
        box10.display();
        box11.display();
        box12.display();
        box13.display();
        box14.display();

        ball.display();
        rope.display();
}

