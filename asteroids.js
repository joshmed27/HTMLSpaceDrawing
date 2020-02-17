/*Final pro JavaScript Document
Final Project
Josh Medina
January 2k16
*/

var canvas = document.getElementById("asteroids");
var ctx3 = canvas.getContext("2d");


//Make a new star every 8000ms
var spawnRateC = 8000;

//The speed of the stars
var speedC = 5;

//Create a time gap in the stars
var lastSpawnC = -1;

//The array to hold the stars
var objectsC = [];

//See time start
var startTimeC = Date.now();

//Animate function
animateC();


function spawnRandomObjectC() {

    //Gets a random type for the star
    var tC;

    //Creating a new star called object
    var objectC = {
        //Set a "type"
        type: tC,
        //Set x to start at 1300
        x: 1300,
        //Making the y's random
        y: Math.random() * (asteroids.width - 30) + 15,
    }

    // add the new asteroid to the object array
    objectsC.push(objectC);
}



function animateC() {

    //See the time past
    var timeC = Date.now();

    //Checking if it needs to spawn a new asteroid
    if (timeC > (lastSpawnC + spawnRateC)) {
        lastSpawnC = timeC;
        spawnRandomObjectC();
        spawnRateC*=.95;
    }

    //A more simple way to animate the canvas
    requestAnimationFrame(animateC);

    //Clear the canvas to move the asteroids
    ctx3.clearRect(0, 0, asteroids.width, asteroids.height);


    //The moving of the asteroids
    for (var iii = 0; iii < objects.length; iii++) {
        var objectC = objectsC[iii];
        objectC.x -= speedC;
        ctx3.beginPath();
        ctx3.arc(objectC.x, objectC.y, 40, 0, Math.PI * 2);
        ctx3.closePath();
        ctx3.fillStyle = "grey";
        ctx3.fill();
    }

}