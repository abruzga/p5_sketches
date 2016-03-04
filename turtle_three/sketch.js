// basic template sketch showing how to use the Turtle class
var myTurtle;
var myTurtleTwo;
var myTurtleThree;
var myTurtle4;

function setup() {
	createCanvas(640, 640);
	noFill();
	stroke(255, 255, 255, 40);
	strokeWeight(3);
	background(30, 40, 255);
	noLoop();

	myTurtle = new Turtle();
	myTurtleTwo = new Turtle();
	myTurtleThree = new Turtle();
	myTurtle4 = new Turtle();
}



function draw() {
	// move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.moveBackward(200);
	//add
	myTurtle.turnLeft(90);
	myTurtle.moveForward(100);
	myTurtle.penDown();


	// eye
	for (var k = 0; k < 30; k++) {
		myTurtle.turnLeft(270); // start
		myTurtle.moveForward(100);
		myTurtle.turnRight(30); // antakis prasideda
		myTurtle.moveForward(30);
		for (var y = 0; y < 4; y++) {
			myTurtle.turnRight(40);
			myTurtle.moveForward(30);
		}
		myTurtle.turnRight(10);
		myTurtle.moveForward(40);

		myTurtle.turnRight(40);
		myTurtle.moveForward(20);
		myTurtle.turnRight(50);
		myTurtle.moveForward(20);
		myTurtle.turnRight(50);
		myTurtle.moveForward(20);
		myTurtle.turnRight(20);
		myTurtle.moveForward(40);
		myTurtle.turnRight(20);
		myTurtle.moveForward(50);
	}


	//second
	push();
	myTurtleTwo.penUp();
	myTurtleTwo.moveBackward(200);
	myTurtleTwo.turnLeft(90);
	myTurtleTwo.moveForward(100);
	myTurtleTwo.penDown();
	stroke(255, 60, 40, 40);
	strokeWeight(3);


	for (var m = 0; m < 50; m++) {
		myTurtleTwo.turnLeft(270); // start
		myTurtleTwo.moveForward(150);
		myTurtleTwo.turnRight(30); // antakis prasideda
		myTurtleTwo.moveForward(30);
		for (var j = 0; j < 4; j++) {
			myTurtleTwo.turnRight(40);
			myTurtleTwo.moveForward(30);
		}
		myTurtleTwo.turnRight(10);
		myTurtleTwo.moveForward(40);
		myTurtleTwo.turnRight(40);
		myTurtleTwo.moveForward(20);
		myTurtleTwo.turnRight(50);
		myTurtleTwo.moveForward(20);
		myTurtleTwo.turnRight(50);
		myTurtleTwo.moveForward(20);
		myTurtleTwo.turnRight(20);
		myTurtleTwo.moveForward(40);
		myTurtleTwo.turnRight(20);
		myTurtleTwo.moveForward(50);
	}
	pop();

	//third
	push();
	myTurtleThree.penUp();
	myTurtleThree.moveBackward(200);
	myTurtleThree.turnLeft(90);
	myTurtleThree.moveForward(100);
	myTurtleThree.penDown();
	stroke(30, 250, 40, 40);
	strokeWeight(3);


	for (var t = 0; t < 40; t++) {
		myTurtleThree.turnLeft(270); // start
		myTurtleThree.moveForward(250);
		myTurtleThree.turnRight(30); // antakis prasideda
		myTurtleThree.moveForward(30);
		for (var h = 0; h < 4; h++) {
			myTurtleThree.turnRight(40);
			myTurtleThree.moveForward(30);
		}
		myTurtleThree.turnRight(10);
		myTurtleThree.moveForward(40);
		myTurtleThree.turnRight(40);
		myTurtleThree.moveForward(20);
		myTurtleThree.turnRight(50);
		myTurtleThree.moveForward(20);
		myTurtleThree.turnRight(50);
		myTurtleThree.moveForward(20);
		myTurtleThree.turnRight(20);
		myTurtleThree.moveForward(40);
		myTurtleThree.turnRight(20);
		myTurtleThree.moveForward(50);
	}
	pop();

	//4
	push();
	myTurtle4.penUp();
	myTurtle4.moveBackward(200);
	myTurtle4.turnLeft(90);
	myTurtle4.moveForward(100);
	myTurtle4.penDown();
	stroke(255, 255, 255, 40);
	strokeWeight(3);

	for (var s = 0; s < 40; s++) {
		myTurtle4.turnLeft(270); // start
		myTurtle4.moveForward(350);
		myTurtle4.turnRight(30); // antakis prasideda
		myTurtle4.moveForward(30);
		for (var v = 0; v < 4; v++) {
			myTurtle4.turnRight(40);
			myTurtle4.moveForward(30);
		}
		myTurtle4.turnRight(10);
		myTurtle4.moveForward(40);
		myTurtle4.turnRight(40);
		myTurtle4.moveForward(20);
		myTurtle4.turnRight(50);
		myTurtle4.moveForward(200);
		myTurtle4.turnRight(50);
		myTurtle4.moveForward(20);
		myTurtle4.turnRight(20);
		myTurtle4.moveForward(40);
		myTurtle4.turnRight(20);
		myTurtle4.moveForward(100);
	}
	pop();
}
