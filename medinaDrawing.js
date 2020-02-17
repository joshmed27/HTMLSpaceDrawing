/*Keyboard Events JavaScript Document
Final Project
Josh Medina
January 2k16
*/

var canvas = document.getElementById("ship");
var ctx = canvas.getContext("2d");

//add keyboard event listener
window.addEventListener("keydown",moveSomething,false);

//Height and Width of Oval
var h = 50;
var w = 120;

//Height and Width of Canvas
var canWidth = canvas.width;
var canHeight = canvas.height;
//top left coordinates for the first rectangle
var x = 100;
var y = 400;

//draw Craft at x, y coordinates
var drawShip = function(x, y) {
	
 //Tail of SpaceCraft
 ctx.beginPath();
  ctx.clearRect(0, 0, 1300, 900);
 ctx.moveTo(x + 30, y);
 ctx.lineTo(x - 70, y - 50);
 ctx.lineTo(x - 70, y + 50);
 ctx.fillStyle = "white";
 ctx.fill();
 
//Body of Spacecraft
ctx.beginPath();
  ctx.moveTo(x, y - h/2); // A1
  ctx.bezierCurveTo(
    x + w/2, y - h/2,
    x + w/2, y + h/2,
    x, y + h/2); // A2

  ctx.bezierCurveTo(
    x - w/2, y + h/2,
    x - w/2, y - h/2,
    x, y - h/2); // A1
 
  ctx.fillStyle = "grey";
  ctx.fill();
  ctx.closePath();

//Cockpit of SpaceCraft	
 ctx.beginPath();
 ctx.arc(x + 15, y - 10, 10, 0, Math.PI * 2, false);
 ctx.fillStyle = "white";
 ctx.fill();

}

//Find arrow direction and move the object
function moveSomething(e) {
	switch(e.keyCode) {
	  case 38:
		y = y - 100;//up key pressed
		break;
	  case 40:
		y = y + 100;//down key pressed
		break;
	}
	drawShip(x,y);
}
drawShip(x,y);
