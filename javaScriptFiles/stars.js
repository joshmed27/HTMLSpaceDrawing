/*Final pro JavaScript Document
Final Project
Josh Medina
January 2k16
*/

var canvas = document.getElementById("stars");
var ctx1 = canvas.getContext("2d");


//Make a new star every 1500ms
var spawnRate = 500;

//The speed of the stars
var speed = 5;

//Create a time gap in the stars
var lastSpawn = -1;

//The array to hold the stars
var objects = [];

//See time start
var startTime = Date.now();

//Animate function
animate();


function spawnRandomObject() {

    //Gets a random type for the star
    var t;

  //Making different colors
    if (Math.random() < 0.80) {
        t = "white";
    } else {
        t = "blue";
    }

    //Creating a new star called object
    var object = {
        //Set a "type"
        type: t,
        //Set x to start at 1300
        x: 1300,
        //Making the y's random
        y: Math.random() * (stars.width - 30) + 15,
    }

    // add the new star to the object array
    objects.push(object);
}



function animate() {

    //See the time past
    var time = Date.now();

    //Checking if it needs to spawn a new star
    if (time > (lastSpawn + spawnRate)) {
        lastSpawn = time;
        spawnRandomObject();
        spawnRate*=.95;
    }

    //A more simple way to animate the canvas
    requestAnimationFrame(animate);

    //Clear the canvas to move the stars
    ctx1.clearRect(0, 0, stars.width, stars.height);


    //The moving of the stars
    for (var i = 0; i < objects.length; i++) {
        var object = objects[i];
        object.x -= speed;
        ctx1.beginPath();
        ctx1.arc(object.x, object.y, 6, 0, Math.PI * 2);
        ctx1.closePath();
        ctx1.fillStyle = object.type;
        ctx1.fill();
    }

}
