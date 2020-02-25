var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var amount;
if (canvas.width < 800){
    amount = 100;
} else{
    amount = 400;
}


// Need additional Event Listeners for resizing window!!!!!!


//global transparency

// create an object: will always be capitalized
function Circle(x, y, dx, dy, radius, colors) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.gravity = gravity;
    //an object that looks like this:
    //{r:XX, g:XX, b:XX}
    this.colors = colors;
    
    //draw method creates the circles with random attributes
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        //1 is fully opaque
        
        var alpha = Math.abs(10/this.dy)-1;
        c.fillStyle = 'rgba(' + this.colors.r + ',' + this.colors.g + ',' + this.colors.b +',' + alpha + ')';
        c.fill();
        
        
    };
    
    
    //update method
    this.update = function () {
        
        //adds velocity (dx/dy) to our original x and y positions to create movement
        this.x += this.dx;
        this.y += this.dy;
        
        // Bounces off left and right sides of screen based on edge of circle, not center
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        // Bounces off top and bottom sides of screen based on edge of circle, not center
        if (this.y + this.radius + this.dy > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy //* this.friction;
        } else {
            
            //adds 1 to velocity until the if statment is true, creating acceleration and illusion of gravity
            this.dy += this.gravity;
        }
        
        // calls draw() every time update() is run
        this.draw();
        
    };
}




var colors = [
    {r:13, g:11, b:18},
    {r:216, g:218, b:229},
    {r:13, g:141, b:215},
    {r:116, g:192, b:227},
    {r:230, g:174, b:88} ];


function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}



//stores all the circles created
var circleArray = [];

for (var i = 0; i < amount; i++) {
    var radius = Math.random() * 30;
    
    //gravity random between -0.5 and 0.5, allowing circles to fall to top or bottom of screen randomly
    var gravity = (Math.random() - 0.5) * 0.25 ;
    // var friction = 0.95;
    var color = randomColor(colors);
    
    var x = (canvas.width/2 - radius * 2) + radius;
    var y = (canvas.height/2 - radius * 2) + radius;
    
    //allows velocity to be in both positive and negative direction
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    
    //gives me a new circle with randomized attributes every time for loop is run
    circleArray.push(new Circle(x, y, dx, dy, radius, color));  
}



function animate() {
    requestAnimationFrame(animate);
    
    //refresh frame with 0.3 opacity, allowing tail effect
    c.fillStyle = 'rgba(0, 0, 0, 0.3)';
    c.fillRect(0,0,canvas.width, canvas.height);
    
    
    
    //draws the circles on screen
    for (var i = 0; i < circleArray.length; i++) {
        
    //access all individual circles and call update() on them
    circleArray[i].update();
        
    }
}

animate();