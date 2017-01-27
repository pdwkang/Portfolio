//////////////////////
////////canvas////////
//////////////////////
var canvas = document.createElement("canvas");
var context = canvas.getContext('2d')
canvas.width = 500;		      
canvas.height = 300;
document.getElementById('canvas').appendChild(canvas);	
var backgroundImage = new Image();
backgroundImage.src = "images/background.png";

var monsters = [];
var leftSideX = Math.random(Math.floor()*150)
var bottomSideY = Math.random(Math.floor()*100 + 380)
var monsterSpeed = 1
function Monster(x, y, src, type){
	this.x = x;
	this.y = y;
	this.icon = new Image();
	this.icon.src = src;
	this.type = type}
Monster.prototype.collision = false;
	//push monsters in array
function moveMonster(){
	for(let i =0; i<monsters.length; i++){
		if((monsters[i].collision)||(monsters[i].x>=500)||(monsters[i].x<=0)
			||(monsters[i].y>=300)||(monsters[i].y<=0)){
			monsters[i].relocate = true;
		}
	}
	if(monsters[0].relocate){
		monsters[0].x = Math.floor(Math.random()*300);
		monsters[0].y =	Math.floor(Math.random()*200) + 100;
		monsters[0].collision = false;
		monsters[0].relocate = false;
	};
	//monster2 = nemo1
	if(monsters[1].relocate){
		monsters[1].x = Math.floor(Math.random()*266);
		monsters[1].y =	Math.floor(Math.random()*200) + 50;
		monsters[1].collision = false;
		monsters[1].relocate = false;
	};
	//monster3 = dory2
	if(monsters[2].relocate){
		monsters[2].x = Math.floor(Math.random()*211);
		monsters[2].y =	Math.floor(Math.random()*200) + 100;
		monsters[2].collision = false;
		monsters[2].relocate = false;
	};
	//monster4 = nemo2
	if(monsters[3].relocate){
		monsters[3].x = Math.floor(Math.random()*230);
		monsters[3].y =	Math.floor(Math.random()*200) + 300;
		monsters[3].collision = false;
		monsters[3].relocate = false;
	};
	//monster5 = dory3
	if(monsters[4].relocate){
		monsters[4].x = Math.floor(Math.random()*300) + 200;
		monsters[4].y =	Math.floor(Math.random()*200);
		monsters[4].collision = false;
		monsters[4].relocate = false;
	};
	//monster6 = nemo3
	if(monsters[5].relocate){
		monsters[5].x = Math.floor(Math.random()*230) + 250;
		monsters[5].y =	Math.floor(Math.random()*200);
		monsters[5].collision = false;
		monsters[5].relocate = false;
	};
	//monster7 = nemo4
	if(monsters[6].relocate){
		monsters[6].x = Math.floor(Math.random()*200) + 300;
		monsters[6].y =	Math.floor(Math.random()*150);
		monsters[6].collision = false;
		monsters[6].relocate = false;
	};
	//monster8 = stripe1
	if(monsters[7].relocate){
		monsters[7].x = Math.floor(Math.random()*250);
		monsters[7].y =	Math.floor(Math.random()*280);
		monsters[7].collision = false;
		monsters[7].relocate = false;
	};
	//monster 9 = puff
	if(monsters[8].relocate){
		monsters[8].x = Math.floor(Math.random()*100 + 400);
		monsters[8].y =	Math.floor(Math.random()*480)
		monsters[8].collision = false;
		monsters[8].relocate = false;
	};
	//monster10 = turtle 
	if(monsters[9].relocate){
		monsters[9].x = Math.floor(Math.random()*700);
		monsters[9].y =	Math.floor(Math.random()*480)
		monsters[9].collision = false;
		monsters[9].relocate = false;
	};
	//monster11 = starfish (bounce off side walls)
	if(monsters[10].collision){
		monsters[10].x = Math.floor(Math.random()*500);
		monsters[10].y = 322;
		monsters[10].collision = false;
		}else{
			if(monsters[10].x >=640){starfishDirectionX = -2};
			if(monsters[10].x <=1){starfishDirectionX = +2};
	};
	if(monsters[11].relocate){
		monsters[11].x = Math.floor(Math.random()*500);
		monsters[11].y = Math.floor(Math.random()*200) + 280;
		monsters[11].collision = false;
		monsters[11].relocate = false;
	};
	if(monsters[12].relocate){
		monsters[12].x = Math.floor(Math.random()*200);
		monsters[12].y = Math.floor(Math.random()*150) + 350;
		monsters[12].collision = false;
		monsters[12].relocate = false;
	};	
	if(monsters[13].relocate){
		monsters[13].x = Math.floor(Math.random()*200);
		monsters[13].y = Math.floor(Math.random()*480)
		monsters[13].collision = false;
		monsters[13].relocate = false;
	};
	if(monsters[14].relocate){
		monsters[14].x = Math.floor(Math.random()*550);
		monsters[14].y = Math.floor(Math.random()*480)
		monsters[14].collision = false;
		monsters[14].relocate = false;
	};
	if(monsters[15].relocate){
		monsters[15].x = Math.floor(Math.random()*300) + 200;
		monsters[15].y =	Math.floor(Math.random()*200);
		monsters[15].collision = false;
		monsters[15].relocate = false;
	};
	if(monsters[16].relocate){
		monsters[16].x = Math.floor(Math.random()*320) + 180;
		monsters[16].y =	Math.floor(Math.random()*100);
		monsters[16].collision = false;
		monsters[16].relocate = false;
	};
	if(monsters[17].relocate){
		monsters[17].x = Math.floor(Math.random()*300) + 200;
		monsters[17].y =	Math.floor(Math.random()*150);
		monsters[17].collision = false;
		monsters[17].relocate = false;
	};
	if(monsters[18].relocate){
		monsters[18].x = Math.floor(Math.random()*315) + 100;
		monsters[18].y = Math.floor(Math.random()*220);
		monsters[18].collision = false;
		monsters[18].relocate = false;
	};
		//monster 19 = puff
	if(monsters[19].relocate){
		monsters[19].x = Math.floor(Math.random()*400);
		monsters[19].y = Math.floor(Math.random()*280)
		monsters[19].collision = false;
		monsters[19].relocate = false;
	};
}

// var hero = new Image();  		hero.src = "images/game-over.png"
// var heroLocation = {x: 310, y: 200}
// hero.id = "heroID";	
// function moveHero(){

	monsters.push(new Monster(leftSideX, bottomSideY, "images/dory1.png", "dory"))//0
	monsters.push(new Monster(leftSideX, bottomSideY, "images/nemo1.png", "nemo"))//1
	monsters.push(new Monster(leftSideX, bottomSideY, "images/dory2.png", "dory"))//2
	monsters.push(new Monster(leftSideX, bottomSideY, "images/nemo2.png", "nemo"))//3
	monsters.push(new Monster(leftSideX, bottomSideY, "images/dory3.png", "dory"))//4
	monsters.push(new Monster(leftSideX, bottomSideY, "images/nemo3.png", "nemo"))//5
	monsters.push(new Monster(leftSideX, bottomSideY, "images/nemo5.png", "nemo"))//6
	monsters.push(new Monster(leftSideX+300, bottomSideY, "images/stripe1.png", "stripe"))//7
	monsters.push(new Monster(leftSideX, bottomSideY, "images/puffer1.png", "puff"))//8
	monsters.push(new Monster(leftSideX, bottomSideY, "images/turtle1.png", "turtle"))//9
	monsters.push(new Monster(leftSideX, bottomSideY, "images/jellyfish1.png", "jelly"))//10
	monsters.push(new Monster(leftSideX, bottomSideY, "images/jellyfish1.png", "jelly"))//11
	monsters.push(new Monster(leftSideX+500, Math.floor(Math.random()*480), "images/stripe1.png", "stripe"))//12
	monsters.push(new Monster(leftSideX+200, Math.floor(Math.random()*480), "images/stripe1.png", "stripe"))//13
	monsters.push(new Monster(leftSideX, bottomSideY-200, "images/stripe1.png", "stripe"))//14
	monsters.push(new Monster(leftSideX, bottomSideY, "images/nemo5.png", "nemo"))//15
	monsters.push(new Monster(leftSideX-100, bottomSideY, "images/nemo5.png", "nemo"))//16
	monsters.push(new Monster(leftSideX-200, bottomSideY, "images/nemo3.png", "nemo"))//17
	monsters.push(new Monster(leftSideX, bottomSideY, "images/nemo3.png", "nemo"))//18
	monsters.push(new Monster(leftSideX, bottomSideY, "images/puffer1.png", "puff"))//19

function updateMonsterSpeed(){
	monsters[0].x += .5*monsterSpeed;	monsters[0].y -= .3*monsterSpeed;
	monsters[1].x += 1.8*monsterSpeed;	monsters[1].y -= .6*monsterSpeed;
	monsters[2].x += monsterSpeed;		monsters[2].y -= monsterSpeed;
	monsters[3].x += 1.3*monsterSpeed;	monsters[3].y -= .3*monsterSpeed;
	monsters[4].x -= .5*monsterSpeed;	monsters[4].y += .4*monsterSpeed;
	monsters[5].x -= .5*monsterSpeed;	monsters[5].y += .7*monsterSpeed;
	monsters[6].x -= 2*monsterSpeed; 	monsters[6].y += .3*monsterSpeed;
	monsters[7].x += 1.5*monsterSpeed; 	monsters[7].y -= .6*monsterSpeed;
	monsters[8].x -= 1*monsterSpeed;	monsters[8].y -= .3*monsterSpeed;
	monsters[9].x -= 1.3*monsterSpeed; 
	monsters[9].y += .2*monsterSpeed;
	monsters[10].x += 1*monsterSpeed;
	monsters[10].y = 422;
	monsters[11].x += .5*monsterSpeed; 	monsters[11].y -= .6*monsterSpeed;
	monsters[12].x += .8*monsterSpeed; 	monsters[12].y -= .6*monsterSpeed;
	monsters[13].x += 1.7*monsterSpeed; monsters[13].y -= .6*monsterSpeed;
	monsters[14].x += .4*monsterSpeed; 	monsters[14].y -= 1.6*monsterSpeed;
	monsters[15].x -= 1.5*monsterSpeed;	monsters[15].y += 1.4*monsterSpeed;
	monsters[16].x -= 2.5*monsterSpeed;	monsters[16].y += .7*monsterSpeed;
	monsters[17].x -= 3.5*monsterSpeed;	monsters[17].y += .9*monsterSpeed;
	monsters[18].x -= .5*monsterSpeed;	monsters[18].y += 1.4*monsterSpeed;
	monsters[19].x -= 1.2*monsterSpeed;	monsters[19].y -= .1*monsterSpeed;
}
function drawMonster(){
	for(var i = 0; i<monsters.length; i++){
		if(monsters[i].type === "nemo"){
			context.drawImage(monsters[i].icon, monsters[i].x, monsters[i].y);}
			// context.drawImage(deadFishArray[i].icon, deadFishArray[i].x, deadFishArray[i].y)}
		if(monsters[i].type === "dory"){
			context.drawImage(monsters[i].icon, monsters[i].x, monsters[i].y);}
			// context.drawImage(deadFishArray[i].icon, deadFishArray[i].x, deadFishArray[i].y)}
		if(monsters[i].type === "stripe"){
			context.drawImage(monsters[i].icon, monsters[i].x, monsters[i].y);}
			// context.drawImage(deadFishArray[i].icon, deadFishArray[i].x, deadFishArray[i].y)};
		if(monsters[i].type === "turtle"){
			context.drawImage(monsters[i].icon, monsters[i].x, monsters[i].y);}
			// context.drawImage(deadFishArray[i].icon, deadFishArray[i].x, deadFishArray[i].y)};
		if(monsters[i].type === "puff"){
			context.drawImage(monsters[i].icon, monsters[i].x, monsters[i].y);}
			// context.drawImage(deadFishArray[i].icon, deadFishArray[i].x, deadFishArray[i].y)};
		if(monsters[i].type === "jelly"){
			context.drawImage(monsters[i].icon, monsters[i].x, monsters[i].y);}
			// context.drawImage(deadFishArray[i].icon, deadFishArray[i].x, deadFishArray[i].y)
	}
}				

function update(){
	moveMonster();
}
function draw(){
	update();
	context.drawImage(backgroundImage, 0, 0);
	drawMonster();
	updateMonsterSpeed();
	requestAnimationFrame(draw);
}
setTimeout(draw, 2000)
