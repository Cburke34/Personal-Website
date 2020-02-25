const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

let mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2,
};


var colors = [
    "#eb1e6d",
    "#11e1ea",
    "#e30cf5",
    "#ce2b16",
    "#de6519"
];



//utility functions
function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}


//Event Listeners
addEventListener("mousemove", function(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener("resize", function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    
    init();
});


var isMouseDown = false;

window.addEventListener("mousedown", function() {
    isMouseDown = true;	
});
		

window.addEventListener("mouseup", function() {
    isMouseDown = false;	
});









//Objects
function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    //random spawn on circle perimeter
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 1 ;
    this.lastMouse = {
        x: x,
        y: y
    };
    
    
    
    //Cool Effect to test later:
//    this.distanceFromCenter = {
//        x: getRandomInt(50, 120),
//        y: getRandomInt(50, 120),
//    };
    
    
    this.update = function() {
        const lastPoint = {
            x: this.x,
            y: this.y,
            z: this.z,
            w: this.w
        };
        
        //Move points over time Effect of circular motion
        this.radians += this.velocity / distanceFromCenter;
        
        //Drag Effect
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.5;
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.5;
        
        //Mouse moves center of particles
        this.x = this.lastMouse.x + Math.cos(this.radians) / Math.sin(this.radians) * distanceFromCenter;
        this.y = this.lastMouse.y + Math.sin(this.radians) / Math.cos(this.radians) * this.x
        this.w = this.lastMouse.x + Math.cos(this.radians) / Math.sin(this.radians) * distanceFromCenter;
        this.z = this.lastMouse.y + Math.sin(this.radians) / Math.cos(this.radians) * this.x
        
        this.draw(lastPoint);
    };
    
    
    this.draw = lastPoint => {
        
        c.beginPath();
        c.strokeStyle = this.color;
        c.lineWidth = this.radius * Math.sin(this.radians) / 100 ;
        c.moveTo(lastPoint.x * Math.sin(this.radians), lastPoint.y * Math.sin(this.radians));
        c.lineTo(this.x, this.y);
        c.stroke();
        c.closePath();
    };
}






//Implementation
let particles;
function init() {
    
    particles = [];
    
    
    
    //random radiuses for particles
    for (let i = 0; i < 800; i++) {
        
        particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, randomColor(colors)));
        
    }
    
}


var distanceFromCenter;
var radius = (Math.random() * 10) + 7;
    

function animate() {
    
    
    setInterval( Particle, 2)
    
    requestAnimationFrame(animate);
    
    
    if (isMouseDown === true) {
        
        
    } else {
        distanceFromCenter = getRandomInt(1, 300);

    };
    
    
    
    
    c.fillStyle = 'rgba(0,0,0,0.05)';
    c.fillRect(0,0,canvas.width, canvas.height);
    

    
    particles.forEach(particle => {
        particle.update(particles);
    })
    
    
    
}

init();
animate();