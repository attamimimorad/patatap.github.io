var colors = [
	'#2E4966',
	'#3C6585',
	'#67A6E5',
	'#BDDDFF',
	'#D49839',
];

var color;
var params = {
	width: 0,
	x: 100,
};

function setup(){
	createCanvas (windowWidth, windowHeight);
	noStroke();
	color = random( colors );
}

function draw(){
	background('#294562');
	fill( color )
	rect( params.x, height/2-50, params.width, 200);


}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}


function mousePressed() {

	color = random( colors );
	TweenMax.fromTo( params, .5, {
		x : 100,
		width : 0
	},
		{
		width: width-200,
		onComplete: reduce
	});


}

function reduce(){
	TweenMax.to( params, .5, {
		x : width - 100,
		width: 0
	})
}
