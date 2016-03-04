// basic template sketch showing how to use the Turtle class
var myTurtle;
var myTurtleTwo;
var myTurtleThree;
var myTurtle4;


function setup() {
	createCanvas(640, 640);
	noFill();
	stroke((mouseY) * 0.3, 225, (mouseY) * 0.3, 5);
	strokeWeight(3);
	background(30, 40, 255);
	//noLoop();

	myTurtle = new Turtle();
	myTurtleTwo = new Turtle();
	myTurtleThree = new Turtle();
	myTurtle4 = new Turtle();
}



function draw() {
	// move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.moveBackward(62);
	//add
	myTurtle.turnLeft(90);
	myTurtle.moveForward(100);
	myTurtle.penDown();


	// eye
	for (var k = 0; k < 30; k++) {
		myTurtle.turnLeft(170); // start
		myTurtle.moveForward(mouseY);

	}
}
