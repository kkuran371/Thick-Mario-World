var canvas = document.querySelector('canvas');	canvas.width = 1000;	canvas.height = 300;
var c = canvas.getContext('2d');
var Sky = new Image(); Sky.src = "sky.png";
var Grass = new Image(); Grass.src = "Grass.png";
var Dirt = new Image(); Dirt.src = "Dirt.png";
var enemy = new Image();	enemy.src = "enemy.png";
var player = new Image();	player.src = "Player.png";  
var playerL = new Image();	playerL.src = "PlayerL.png"; 
var Fireball = new Image(); Fireball.src = "Fireball.png";
var Bullet = new Image(); Bullet.src = "bullet.png";
var Door = new Image(); Door.src = "Door.png";
var keyA = 0;
var keyD = 0;
var col1 = 1; 
var col2 = 1;
var collision = 1;
var MR = 1;
var ML = 0;
var J = 0;
var x = 100;	
var y = 260;
var width = 20;
var height = 20;
var fire = 0;
var bx = x + 0;
var by = y + 0;
var FR = 0;
var FL = 0;
var FX = EX + 0;
var FA = 0;
var EX = 560;
var EY = 235;
var GoUp = 1;
var GoDown =0;
var enemyDeath = 0;
var playerDeath = 0;


function animate() {
	requestAnimationFrame(animate);
	
	c.clearRect(0, 0, window.innerWidth, window.innerHeight);	
	
	c.drawImage(Sky, 0, 0, 1000, 300);

	c.drawImage(Door, 970, 246, 26, 34);	
	
	
 if(playerDeath < 1) {
	 
	if(ML > 0) {
	c.drawImage(playerL, x, y);
	FL = 1;
	} else { 
	FL = 0;
	}
	
	if(MR > 0 || J > 0) {
	c.drawImage(player, x, y);
	FR = 1;
	} else {
		FR = 0;	
	}
	
	if(MR < 1 && ML < 1) {
		c.drawImage(player, x, y);	
		FR = 1;
	}
 }
	
	c.drawImage(Grass, 0, 280, 20, 20);
	c.drawImage(Grass, 20, 280, 20, 20);
	c.drawImage(Grass, 40, 280, 20, 20);
	c.drawImage(Grass, 60, 280, 20, 20);
	c.drawImage(Grass, 80, 280, 20, 20);
	c.drawImage(Grass, 100, 280, 20, 20);
	c.drawImage(Grass, 120, 280, 20, 20);
	c.drawImage(Grass, 140, 280, 20, 20);
	c.drawImage(Grass, 160, 280, 20, 20);
	c.drawImage(Grass, 180, 280, 20, 20);
	c.drawImage(Grass, 200, 280, 20, 20);
	c.drawImage(Grass, 220, 280, 20, 20);
	c.drawImage(Grass, 240, 280, 20, 20);
	c.drawImage(Grass, 260, 280, 20, 20);
	c.drawImage(Grass, 280, 280, 20, 20);
	c.drawImage(Grass, 300, 280, 20, 20);
	c.drawImage(Grass, 320, 280, 20, 20);
	c.drawImage(Grass, 340, 280, 20, 20);
	c.drawImage(Grass, 360, 280, 20, 20);
	c.drawImage(Grass, 380, 280, 20, 20);
	c.drawImage(Grass, 400, 280, 20, 20);
	c.drawImage(Grass, 420, 280, 20, 20);
	c.drawImage(Grass, 440, 280, 20, 20);
	
	c.drawImage(Grass, 760, 280, 20, 20);
	c.drawImage(Grass, 780, 280, 20, 20);
	c.drawImage(Grass, 800, 280, 20, 20);
	c.drawImage(Grass, 820, 280, 20, 20);
	c.drawImage(Grass, 840, 280, 20, 20);				//////////////////////////////////////////
	c.drawImage(Grass, 860, 280, 20, 20);			  ////////Next Time Use Easy Way////////////
	c.drawImage(Grass, 880, 280, 20, 20);	 		 //////////////////////////////////////////
	c.drawImage(Grass, 900, 280, 20, 20);
	c.drawImage(Grass, 920, 280, 20, 20);
	c.drawImage(Grass, 940, 280, 20, 20);
	c.drawImage(Grass, 960, 280, 20, 20);
	c.drawImage(Grass, 980, 280, 20, 20);
	c.drawImage(Grass, 460, 260, 20, 20);
	c.drawImage(Grass, 480, 260, 20, 20);
	c.drawImage(Grass, 500, 260, 20, 20);
	c.drawImage(Grass, 520, 260, 20, 20);
	c.drawImage(Grass, 540, 260, 20, 20);
	c.drawImage(Grass, 560, 260, 20, 20);
	c.drawImage(Grass, 580, 260, 20, 20);
	c.drawImage(Grass, 600, 260, 20, 20);
	c.drawImage(Grass, 620, 260, 20, 20);
	c.drawImage(Grass, 640, 260, 20, 20);
	c.drawImage(Grass, 660, 260, 20, 20);
	c.drawImage(Grass, 680, 260, 20, 20);
	c.drawImage(Grass, 700, 260, 20, 20);
	c.drawImage(Grass, 720, 260, 20, 20);
	c.drawImage(Grass, 740, 260, 20, 20);
	
	c.drawImage(Dirt, 460, 280, 20, 20);
	c.drawImage(Dirt, 480, 280, 20, 20);
	c.drawImage(Dirt, 500, 280, 20, 20);
	c.drawImage(Dirt, 520, 280, 20, 20);
	c.drawImage(Dirt, 540, 280, 20, 20);
	c.drawImage(Dirt, 560, 280, 20, 20);
	c.drawImage(Dirt, 580, 280, 20, 20);
	c.drawImage(Dirt, 600, 280, 20, 20);
	c.drawImage(Dirt, 620, 280, 20, 20);
	c.drawImage(Dirt, 640, 280, 20, 20);
	c.drawImage(Dirt, 660, 280, 20, 20);
	c.drawImage(Dirt, 680, 280, 20, 20);
	c.drawImage(Dirt, 700, 280, 20, 20);
	c.drawImage(Dirt, 720, 280, 20, 20);
	c.drawImage(Dirt, 740, 280, 20, 20);
	
	
		if(enemyDeath < 1) {
	c.drawImage(enemy, EX, EY);
		}
			
	if(fire > 0) {
		c.drawImage(Bullet, bx, y, 10, 5);	
	}
		
	if(enemyDeath < 1 && FA > 0) {
		
		c.drawImage(Fireball, FX, 240)	
		
	} else {
		FX = EX;
	}
	
}	
animate();	

	function update() {
	requestAnimationFrame(update);
		
	if(playerDeath == 1) {
		alert('You Died Refresh To Retry')	
	}
		
		
 if(x > 965 && y > 240) {
	alert('Congratulations You Win'); 
 }
		
 if(FA > 0 && FX > x - 5 && FX < x + 5 && y < 260 && y > 220 && enemyDeath < 1) {
	playerDeath = 1; 
 }

 if(FA > 0) {
	FX -= 5; 
 }
 
 if(x > 755 && x < 765 && y > 240) {
	 col2 = 0;
 } else {
	col2 = 1; 
 }	
		
		
 if(x > 435 && x < 755 && y > 240) {
	col1 = 0;
	 console.log('col act')
 } else { 
	col1 = 1; 
 }
		
	if(fire < 1) {
		bx = x + 0;	
	}
		
	if(fire > 0 && FR > 0) {
		bx += 5;	
	}
		
	if(fire > 0 && FL > 0) {
		bx -= 5;	
	}
	
	if(bx > EX - 5 && bx < EX + 5 && y > 220 && y < 260 && fire > 0) {
		enemyDeath = 1;
	}
		
	if(FA > 0) {
		setTimeout(function() {
			FA = 0;
		}, 1000);
	}
		
	if(FA < 1) {
		setTimeout(function() {
			FA	= 1;
		}, 1000);
	}
		
	if(GoUp > 0) {
		EX += 1;
	}
		
	if(GoDown > 0) {
		EX -= 1;	
	}
		
	if(EX > 699) {
		GoDown = 1;
		GoUp = 0;
	} else if(EX < 481) {
		GoDown = 0;	
		GoUp = 1;
	}
		
	}
update();
	
	function gravity() {
		requestAnimationFrame(gravity);
			
	if(keyA > 0 && x < 445 && y < 260 && x > 435 || x > 755 && x < 765 && y < 260 && keyD > 0) {
		setTimeout(function(){
			y = 260;	
		}, 250);
	}
	}
gravity();
function move(e){
	
 if(e.keyCode == 65) {
	 ML = 1;
	 MR = 0;
	 
	 if(col2 > 0) {
	x -= 5; 
	keyA = 1; }
 } else {
	keyA = 0;
 }
	
 if(e.keyCode == 68) {
	 
	 if(col1 > 0) {
	x += 5; 
	keyD = 1;
	MR = 1
	ML = 0;
	 } 
	 }else {
		keyD = 0;
	 }
	
 if(e.keyCode == 87){
	 J = 1
	 
	 if(x < 445 || x > 755) {
	 y -= 20 
		 setTimeout(function() {
			 
		 if( x < 445 || x > 755) {
			 y += 20;
		 } }, 1000);}
	   else if( x > 340 || x < 760) {
		 	y -= 20;
		  setTimeout(function() {
			  
		 if( x > 440 && x < 755) {
			 y += 20;
		 } }, 1000);}
	 } else {
		J = 0; 
	 }
	
	if(e.keyCode == 74) {
		fire = 1;
		setTimeout(function(){
			fire = 0;
		}, 1000);
	}
}
document.onkeydown = move;
