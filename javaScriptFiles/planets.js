/*Final pro JavaScript Document
Final Project
Josh Medina
January 2k16
*/

//NOTE: I reused my stars code for the planets as they're the same thing pretty much

var canvas = document.getElementById("planets");
var ctx2 = canvas.getContext("2d");

//Make a new planet every 10000ms
var spawnRateB = 10000;

//The speed of the planets
var speedB = 2;

//Create a time gap in the planets
var lastSpawnB = -1;

//The array to hold the planets
var objectsB = [];

//See time start
var startTimeB = Date.now();

//Animate function
animateB();


    //Random planet size
    var ranPlan = Math.floor((Math.random() * 100) + 30);

function spawnRandomObjectB() {

    //Gets a random type for the planet
    var tB;

  //Making different colors
    if (Math.random() < 0.50) {
        tB = "red";
    } else {
        tB = "green";
    }

    //Creating a new planet called object
    var objectB = {
        //Set a "type"
        type: tB,
        //Set x to start at 1300
        x: 1300,
        //Making the y's random
        y: Math.random() * (planets.width - 30) + 15,

    }
    //Add the new planet to the object array
    objectsB.push(objectB);
}

function animateB() {

    //See the time past
    var timeB = Date.now();

    //Checking if it needs to spawn a new planet
    if (timeB > (lastSpawnB + spawnRateB)) {
        lastSpawnB = timeB;
        spawnRandomObjectB();
        spawnRateB*=.95;
    }

    //A more simple way to animate the canvas
    requestAnimationFrame(animateB);

    //Clear the canvas to move the planets
    ctx2.clearRect(0, 0, planets.width, planets.height);


    //The moving of the planets
    for (var ii = 0; ii < objectsB.length; ii++) {
        var objectB = objectsB[ii];
        objectB.x -= speedB;
        ctx2.beginPath();
        ctx2.arc(objectB.x, objectB.y, ranPlan, 0, Math.PI * 2);
        ctx2.closePath();
        ctx2.fillStyle = objectB.type;
        ctx2.fill();
    }

}

$(planets).ready(function() {
  $('.glow-me').addGlow({
    radius: 20,
    textColor: '#ff0',
    haloColor: '#ffa',
  });
});
