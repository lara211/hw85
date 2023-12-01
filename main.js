canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

greenCarWidth=75;
greenCarHeight=100;

//Dê altura e largura específicas para a imagem do carro

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
greenCarX=5;
greenCarY=225;

function add() {
	bkImgTag=new Image()
    bkImgTag.onload=uploadBackgroud;
    bkImgTag.src=backgroudImg

    carImgTag=new Image()
    carImgTag.onload=uploadGreenCar;
    carImgTag.src= greencarImage
}

function uploadBackground() {
	ctx.drawImage(bkImgTag,0,0,canvas.width,canvas.height)

}

function uploadGreenCar() {
	ctx.drawImage(carImgTag,greenCarX,greenCarY,greenCarHeight,greenCarWidth)

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
    if (greenCarY>=0){
        greenCarY=greenCarY-10
        console.log("Quando a seta para cima X= "+ greenCarX+" Y: "+greenCarY)
        uploadBackgroud();
        uploadGreenCar();
	}    
}
function down(){
    if (greenCarY<=500){
        greenCarY=greenCarY+10
        console.log("Quando a seta para cima X= "+ greenCarX+" Y: "+greenCarY)
        uploadBackgroud();
        uploadGreenCar();
        
    }
}
function left(){
    if (greenCarX>=0){
		greenCarX=greenCarX-10
        console.log("Quando a seta para cima X= "+ greenCarX+" Y: "+greenCarY)
        uploadBackgroud();
        uploadGreenCar();
      
    }
}
function right(){
    if (greenCarX<=500){
        roverX=roverX+10
        console.log("Quando a seta para cima X= "+ greenCarX+" Y: "+greenCarY)
        uploadBackgroud();
        uploadGreenCar();
       
    }
}