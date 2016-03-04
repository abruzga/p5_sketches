// assults your eyes

var testImage;


function preload() {
	testImage = loadImage("hol.jpg");
	//noLoop();
}

function setup() {
	// create a place to draw
	createCanvas(800, 480);
	// load up the pixel[] array so we can read colors out of it later
	gSlider = createSlider(0, 255, 0);
	gSlider.position(20, 50);
	bSlider = createSlider(0, 255, 255);
	bSlider.position(20, 80);
}

function draw() {
	var g = gSlider.value();
	var b = bSlider.value();
	// clear the background
	background(0, 0, 0);

	// set drawing styles
	stroke(255, 0, 0);
	fill(255, 255, 255);



	stroke(0, 200, 100, 80);

	testImage.loadPixels();
	// loop over every x,y pixel coordinate in the image
	for (x = 0; x < 800; x++) {
		console.log(x);
		for (y = 0; y < 480; y++) {
			var redIn = testImage.pixels[(y * 800 + x) * 4 + 0];
			var greenIn = testImage.pixels[(y * 800 + x) * 4 + 1];
			var blueIn = testImage.pixels[(y * 800 + x) * 4 + 2];

			var redOut, blueOut, greenOut;

			//////////////////

			redOut = redIn;
			blueOut = blueIn = b * 0.7;
			greenOut = greenIn = g * 0.7;

			testImage.pixels[(y * 800 + x) * 4 + 0] = redIn;
			testImage.pixels[(y * 800 + x) * 4 + 1] = greenIn;
			testImage.pixels[(y * 800 + x) * 4 + 2] = blueIn;
		}
	}

	testImage.updatePixels();

	image(testImage, 0, 0, 800, 480);


}

function clamp(v, low, high) {
	if (v < low) return low;
	if (v > high) return high;
	return v;

	//	v = max(v, low);
	//	v = min(v, high);
	//	return v;
}


// download the image
// function mouseReleased() {
// 	console.log("save");
// 	save();
// }
