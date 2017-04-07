var colors = [
	'#2E4966',
	'#3C6585',
	'#67A6E5',
	'#BDDDFF',
	'#D49839',
	'#a6263b',
	'#a407d5',
	'#ada760',
	'#589454',
	'#ac84a1',
	'#af6a54',
	'#968a5d',
	'#276faa',
	'#bbcd2f',
];


var color;
var params = {
	width: 0,
	opacity: 0,
};

var params2 = {

	width: 500,
	height: 0,
}

var params3 = {
	width: 0,
	x2: 0,
}

var params4 = {

	width: 0,
}

var params5 = {

	width: 0,
	height: 0,
}

var params6 = {

	b: 0,
	d: 0,
}

var params7 = {

	width: 0,

}



function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function preload(){
	coq = loadSound('0283.mp3');
	foto = loadSound('0307.mp3');
	rire = loadSound('0489.mp3');
	pan = loadSound('0438.mp3');
}

function setup(){
	createCanvas (windowWidth, windowHeight);
	noStroke();
	color = random( colors );

}

function draw(){
	background( color );
	fill( 'rgb(63, 29, 255)')
	noStroke()
	ellipse( 400, 300, params.width )
	ellipse( 300, 400, params.width )
	ellipse( 500, 400, params.width )
	ellipse( 400, 500, params.width )

	fill('#a3db02')
	rect(150,100, 500, params2.height )


	stroke('#ed1427')
	strokeWeight(params3.width)

	line(0,30,params3.x2,30)
	line(0,80,params3.x2,80)
	line(0,130,params3.x2,130)
	line(0,180,params3.x2,180)
	line(0,230,params3.x2,230)
	line(0,280,params3.x2,280)
	line(0,330,params3.x2,330)
	line(0,380,params3.x2,380)
	line(0,430,params3.x2,430)
	line(0,480,params3.x2,480)


	fill('#027adb')
 	noStroke()

	rect(0,400,params4.width,100)

	rect(0,0,params5.width,params5.height)

	ellipse(windowWidth/2,windowHeight/2,params6.b,params6.d)

	stroke('#1437ed')
	strokeWeight(params7.width)
	line(0,10,params7.width,10)


}
function keyTyped(){
  if (key === 'a') {
		coq.play();
		color = random( colors );
		TweenMax.fromTo( params, .3, {
			x : 3000,
			y : 3000
		},
			{
			width: 100,
			onComplete: reduce,
		});


  }
	if (key === 'z') {
		foto.play();
		color = random( colors );
		TweenMax.fromTo( params2, .3, {
			height : 700,
		},
			{
			height: 0,
			onComplete: reduce,
		});


  }
	if (key === 'e') {
		rire.play();
		color = random( colors );
		TweenMax.fromTo( params3, .3, {
			x2: 3000,
			width: 10,
		},
			{
			x2: 0,
			width: 0,
			onComplete: reduce,
		});


  }

	if (key === 'r') {
		color = random( colors );
		pan.play();
		TweenMax.fromTo( params4, .3, {
			width: 300,
		},
			{
				width: 0,
			onComplete: reduce,
		});


  }

	if (key === 't') {
		color = random( colors );
		rire.play();
		TweenMax.fromTo( params5, .3, {
			width: 10000,
			height: 10000,
		},
			{
				width: 0,
				height: 0,
			onComplete: reduce,
		});


  }

	if (key === 'y') {
		color = random( colors );
		coq.play();
		TweenMax.fromTo( params6, .6, {
			b: 10000,
			d: 10000,
		},
			{
				b: 0,
				d: 0,
			onComplete: reduce,
		});


  }

	if (key === 'u') {
		color = random( colors );
		TweenMax.fromTo( params7, .6, {
			width: windowWidth-10,
		},
			{
				width: 0,
			onComplete: reduce,
		});


  }







	function reduce(){
		TweenMax.to( params, .3, {
			width: 0,
			width: 0
		})
	}
}
