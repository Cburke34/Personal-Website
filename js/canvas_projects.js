

var canvasArray = [
    
    { 
        heading: 'Aqua Interactive', 
        info:'This is the first of my many different HTML 5 Canvas Projects. I created this at the beggining of 2019, and this was my first dive into developing visually appealing work in a web-based medium.', 
        canvasSRC: './aqua_interactive/Gallery.html' 
    },
    { 
        heading: 'Circular Motion', 
        info:'This project involves control of linework – or the lack there of. Initially the lines are generated haphazardly based on randomness or the mouse location, but once the mouse (or finger) is held down - everything falls back into place.', 
        canvasSRC: './circular_motion/Gallery.html' 
    },
    { 
        heading: 'Rain Drop', 
        info:'As an exploration of motion, this project utilizes simulated gravity going in both directions to create a nice aesthetic. As the drops fall and rise, they meet in the middle creating a horizon across the center over time.', 
        canvasSRC: './rain_drop/Gallery.html' 
    },
    { 
        heading: 'Crimson', 
        info:'These initially straight lines collide with the edges of the screen, creating organic curves and shapes. The overlapping of the transparent colors also play on the depth and layering effects.', 
        canvasSRC: './crimson/Gallery.html' 
    },
    
]

var a = 0;
function arrowRight() {
    a++
    if (a > canvasArray.length - 1) {
        a = 0;
    }
    $('.menuHeader').css('opacity', 0);
    $('.menuInfo').css('opacity', 0);
    $('.canvas').css('opacity', 0);
    
    setTimeout(function(){
        $('.menuHeader').text(canvasArray[a].heading);
        $('.menuInfo').text(canvasArray[a].info);
        $('.canvas').attr('src',canvasArray[a].canvasSRC).css('z-index', 0);
    }, 600)
    
    setTimeout(function(){
        $('.menuHeader').css('opacity', 1);
        $('.menuInfo').css('opacity', 1);
        $('.canvas').css('opacity', 1);
    }, 900)
    
}
function arrowLeft() {
    a--
    if (a < 0) {
        a = canvasArray.length - 1;
    }
    $('.menuHeader').css('opacity', 0);
    $('.menuInfo').css('opacity', 0);
    $('.canvas').css('opacity', 0);

    setTimeout(function(){
        $('.menuHeader').text(canvasArray[a].heading);
        $('.menuInfo').text(canvasArray[a].info);
        $('.canvas').attr('src',canvasArray[a].canvasSRC).css('z-index', 0);
    }, 600)

    setTimeout(function(){
        $('.menuHeader').css('opacity', 1);
        $('.menuInfo').css('opacity', 1);
        $('.canvas').css('opacity', 1);
    }, 900)
}







$(document).ready(function(){
    
    
    //Disable dragging and image saving
    $('img').attr('draggable', false);
    $("body").on("contextmenu", "img", function(e) {
        return false;
    });
    
    var viewportWidth = innerWidth;
    var viewportHeight = innerHeight;
    
    if (viewportWidth >= 800) {
        $('.mobileHeaderRight').css({
            'display': 'none',
        });
    }
    if (viewportWidth < 800) {
        $('.mobileHeaderRight').css({
            'display': 'flex',
        });
    } 
    
    $( window ).resize(function() {
        viewportWidth = innerWidth;
        viewportHeight = innerHeight;
        //fixes resize issue for canvas
        $('.canvas').attr('src', $('.canvas').attr('src'));
        if (viewportWidth >= 800) {
            $('.mobileHeaderRight').css({
                'display': 'none',
            });
        }
        if (viewportWidth < 800) {
            $('.mobileHeaderRight').css({
                'display': 'flex',
            });
        }
        
    });
    
    //if I refresh, take me back to landing page;
    $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
    });

//---- LANDING PAGE "LOADING EFFECT" ---------------------------------------------
    
    var loadedCheck = 0;
    
    //Then my header shows
    setTimeout(function() {
        $(".headerCont").css('opacity', 1);
    }, 1000)
    
    //Then menuGrid appears
    setTimeout(function() {
        $(".menuGrid").css('opacity', 1);
        loadedCheck = 1;
    }, 2000)
//-----------------------------------------------------------------
    
    
    //hover effects for links
    $(".linksCont").each(function(index) {
        $(this).hover(function() {
            if ($(this).children().css("color") == 'rgb(255, 255, 255)') {
                $(this).css('cursor', 'default');
                
            } else {
                $(this).animate({
                    "border-bottom-width": "6px"
                }, 300) 
            }
            
        }, function() {
            $(this).stop().animate({
                "border-bottom-width": "0px",
            }, 300);
        });
    });
    
    
    //name onclick
    $('.headerLeft').click(function(){
        window.location.href = 'index.html#start';
    });
    
    var projectsLink = $('.linksCont').eq(0);
    var aboutLink = $('.linksCont').eq(1);
    var contactLink = $('.linksCont').eq(2);
    
    
    //project link onclick & Return on mobile devices
    $(projectsLink).click(function(){
        window.location.href = 'index.html#projects';
    });
     $('.mobileHeaderRight').click(function(){
        window.location.href = 'index.html#projects';
    });

    //about link onclick
    $(aboutLink).click(function(){
        window.location.href = 'index.html#about';
    });
    
    //contact link onclick
    $(contactLink).click(function(){
        window.location.href = 'index.html#contact';
    });
    
    
    
    //hover effect for Explore Button
    $('.explore').hover(function(){
        $('.headerCont').css({
            'opacity': 0.2,
        });
        $('.menuGrid').css({
            'opacity': 0.2,
        });
        $(this).css({
            'background-color': 'rgb(0,0,0)',
        });
    }, function(){ 
        $('.headerCont').css({
            'opacity': 1,
        });
        $('.menuGrid').css({
            'opacity': 1,
        });
        $(this).css({
            'background-color': '#555D69',
        });
    });
    
    //click effects for Explore Button
    $('.explore').click(function(){
        $('.menuGrid').css({
            'transform': 'translateX('+ -$('.menuGrid').width() +'px)',
        });
        $('.headerCont').css({
            'transform': 'translateY('+ -$('.headerCont').height() +'px)',
        });
        setTimeout(function(){
            $('.exitFSCont').css({
               'display': 'flex' 
            });
        }, 1250);

    });
    
    
    //return button to see list again
    $('.exitFSCont').click(function(event){ 
        $(this).css({
            'display': 'none',
        });
        $('.menuGrid').css({
            'transform': 'translateX(0px)',
        });
        $('.headerCont').css({
            'transform': 'translateY(0px)',
        });
    });
    
    var myLeftArrow = $('.menuArrow:nth-child(1)')
    var myRightArrow = $('.menuArrow:nth-child(2)')
    
    $(myLeftArrow).click( function(){
       arrowLeft() 
    });
    $(myRightArrow).click( function(){
       arrowRight()
    });
});