
var grad;
var gradtwo;
var radsq;
var dia;
var winter;
var spring;
var MP;
var wo;
var fgrad;
var cloud;

function preload(){
 night = loadSound('../Sounds/ambient_night.mp3');
 day = loadSound('../Sounds/birds.wav');

};

function setup(){
	createCanvas(windowWidth, windowHeight);
	var canvas = document.getElementById('defaultCanvas');
	paper.setup(canvas);
	grad = paper.project.importSVG(document.getElementById('svg'));
	cloud = paper.project.importSVG(document.getElementById('cloud'));
    
    radsq = pow(windowWidth/2,2)+pow(windowHeight,2);
    dia = sqrt(radsq);

    grad.scale(dia*2);

    grad.position = new paper.Point(windowWidth/2,windowHeight);

    //spring
    spring = paper.project.importSVG(document.getElementById('spring'));

    spring.position = new paper.Point(windowWidth/2,windowHeight/1.3);

    //winter
    winter = paper.project.importSVG(document.getElementById('winter'));

    winter.position = new paper.Point(windowWidth/2,windowHeight/1.3);

};

function draw(){

 MP = map(mouseX, 0,width,0,1);

	grad.rotation += MP;


	fgrad = map(MP,0,1,0,1);

	if(winter.opacity <= .01){
		winter.opacity = fgrad * -1;
	};
	if(winter.opacity <= 1){
		winter.opacity = fgrad;
	};




	paper.view.draw();




};