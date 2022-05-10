
noseX= 0;
noseY= 0;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	j= loadSound("jump.wav");
	k= loadSound("kick.wav");
	d= loadSound("mariodie.wav");
	g12= loadSound("gameover.wav");
}

function setup() {

	canvas= createCanvas(1200,366);
	canvas.parent("canvas");

	video= createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	instializeInSetup(mario);

	poseNet= ml5.poseNet(video,modeloaded);
	poseNet.on('pose',g_r);
	
}
  
function modeloaded(){
	console.log("bla.....bla...."); 
}
  
function g_r(results){
	if(results.length > 0){
	  console.log(results);
	  noseX= results[0].pose.nose.x;
	  noseY= results[0].pose.nose.y;
	   }
  }

function draw() {
	game()
}






