var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

    c.fillStyle = 'rgba(0,0,0,1)';
    c.fillRect(0,0,canvas.width, canvas.height);

function Line(startX, startY, endX, endY, startDX, startDY, endDX, endDY, colors) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.startDX = startDX;
    this.startDY = startDY;
    this.endDX = endDX;
    this.endDY = endDY;
    this.colors = colors;
    
    
    this.draw = function() {
        
        c.beginPath();
        c.moveTo(this.startX, this.startY);
        c.lineTo(this.endX, this.endY);
        c.lineCap = 'round';
        c.lineWidth = 2;

        var alpha = Math.abs(10)-1;
        c.strokeStyle = 'rgba(' + this.colors.r + ',' + this.colors.g + ',' + this.colors.b +',' + this.colors.a + ')';
        
        c.stroke();
    }
    
    this.update = function() {
        
        if (this.startX > canvas.width || this.startX < 0) {
            
            this.startDX = -this.startDX;
        }
        
        if (this.startY > canvas.height || this.startY < 0) {
            
            this.startDY = -this.startDY;
        }
        
        if (this.endX > canvas.width || this.endX < 0) {
            
            this.endDX = -this.endDX;
        }
        
        if (this.endY > canvas.height || this.endY < 0) {
            
            this.endDY = -this.endDY;
        }
        
        
        this.startX += this.startDX;
        this.startY += this.startDY;
        this.endX += this.endDX;
        this.endY += this.endDY;
        
        
        this.draw();
        
    }
}

var colors = [
    {r:255, g:211, b:222, a:0.3},
    {r:255, g:5, b:5, a:0.4},
    {r:255, g:178, b:187, a:0.4},
    {r:255, g:140, b:170, a:0.2},
    {r:255, g:237, b:245, a:0.6} 
    ];


function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

var lineArray = [];

for( var i = 0; i < 6; i++ )  {
    
    var startX = canvas.width/2;
    var startY = canvas.height/2;
    var endX = canvas.width/2;
    var endY = canvas.height/2;
    var startDX = (Math.random() - 0.5) * 5;
    var startDY = (Math.random() - 0.5) * 5;
    var endDX = (Math.random() - 0.5) * 5;
    var endDY = (Math.random() - 0.5) * 5;
    var color = randomColor(colors);
    
    
    lineArray.push(new Line(startX, startY, endX, endY, startDX, startDY, endDX, endDY, color))
        
    }





function animate() {
    requestAnimationFrame(animate);

    for (var i = 0; i < lineArray.length; i++) {
        lineArray[i].update();
    }
    
    
}

animate();