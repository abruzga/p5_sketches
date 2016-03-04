// assults your eyes

var testImage;

function preload() {
	testImage = loadImage("streethead.jpg");
	//noLoop();
}

function setup() {
	// create a place to draw
	createCanvas(800, 600);

	// load up the pixel[] array so we can read colors out of it later

}


function draw() {
	// clear the background
	background(0, 0, 0);
	// set drawing styles
	fill(255, 255, 255);
	stroke(0, 200, 100, 80);

	testImage.loadPixels();
	// loop over every x,y pixel coordinate in the image
	for (x = 0; x < 800; x++) {
		console.log(x);
		for (y = 0; y < 600; y++) {
			var redIn = testImage.pixels[(y * 800 + x) * 4 + 0];
			var greenIn = testImage.pixels[(y * 800 + x) * 4 + 1];
			var blueIn = testImage.pixels[(y * 800 + x) * 4 + 2];

			var redOut, blueOut, greenOut;

			var x2 = x + floor(random((-2), 2));
			var y2 = y + floor(random(2));

			// make sure we don't go outside the image
			x2 = clamp(x2, 0, 800);
			y2 = clamp(y2, 0, 600);

			// use the color from the random position
			redOut = testImage.pixels[(y2 * 800 + x2 + 10) * 4 + 0];
			greenOut = testImage.pixels[((y2 + 20) * 800 + x2) * 4];
			blueOut = testImage.pixels[(y2 * 800 + x2) * 4 + 2];
			//
			//
			testImage.pixels[(y * 800 + x) * 4 + 0] = redOut;
			testImage.pixels[(y * 800 + x) * 4 + 1] = greenOut;
			testImage.pixels[(y * 800 + x) * 4 + 2] = blueOut;
		}
	}
	testImage.updatePixels();

	image(testImage, 0, 0, 800, 600);


}

function clamp(v, low, high) {
	if (v < low) return low;
	if (v > high) return high;
	return v;

}
