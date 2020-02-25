$(document).ready(function () {   
    
    var screenHeight = innerHeight;
    var screenWidth = innerWidth;
    
    //no longer draggable images
    $("*").on('dragstart', function () {
        return false;
    });
    
    var home = $('.links').first();
    var howToHelp = $('.links').first().next();
    var events = $('.links').first().next().next();
    var adopt = $('.links').first().next().next().next().next();
    var animalControl = $('.links').first().next().next().next().next().next()
    var contact = $('.links').first().next().next().next().next().next().next();
    
    var homeM = $('.linksW:nth-child(1)');
    var howToHelpM = $('.linksW:nth-child(2)');
    var eventsM = $('.linksW:nth-child(3)');
    var adoptM = $('.linksW:nth-child(4)');
    var animalControlM = $('.linksW:nth-child(5)');
    var contactM = $('.linksW:nth-child(6)');
    
    //home tab
    home.click(function(){
        window.location.href = "index.html"
    });
    homeM.click(function(){
        window.location.href = "index.html"
    });
    
    //how to help tab
    howToHelp.click(function(){
        window.location.href = "how-to-help.html"
    });
    howToHelpM.click(function(){
        window.location.href = "how-to-help.html"
    });
    
    //events
    events.click(function(){
        window.location.href = "events.html"
    });
    eventsM.click(function(){
        window.location.href = "events.html"
    });
    
    //logo
    $('.links').first().next().next().next().click(function(){
        window.location.href = "index.html"
    });
    
    //adopt tab
    adopt.click(function(){
        window.location.href = "adopt.html"
    });
    adoptM.click(function(){
        window.location.href = "adopt.html"
    });
    
    //Animal Control tab
    animalControl.click(function(){
        window.location.href = "animal-control.html"
    });
    animalControlM.click(function(){
        window.location.href = "animal-control.html"
    });
    
    //adopt tab
    contact.click(function(){
        window.location.href = "contact.html"
    });
    contactM.click(function(){
        window.location.href = "contact.html"
    });
    
    var toggle = false;
    $('#hamburgerMenu').css({
        'top': -$('#hamburgerMenu').outerHeight(),
    });

    $('#hamburgerCont').click(function () {

        toggle = !toggle;

        if (toggle) {
            $('#hamburgerMenu').animate({
                'top': $('#headerCont').outerHeight(),
            }, 500);

            $('#hamburgerIcon').animate({
                opacity: 0.1
            }, 200, function () {
                $("#hamburgerIcon").attr("src","./images/hamburgerClose.png");
                //finished animating, minifade out and fade new back in           
                $('#hamburgerIcon').animate({
                    opacity: 1
                }, 300);
            });
            
            toggle = false;
            
        } else {
            $('#hamburgerMenu').animate({
                'top': -$('#hamburgerMenu').outerHeight(),
            }, 500);

            $('#hamburgerIcon').animate({
                opacity: 0.1
            }, 200, function () {
                $("#hamburgerIcon").attr("src","./images/hamburger.png");
                //finished animating, minifade out and fade new back in           
                $('#hamburgerIcon').animate({
                    opacity: 1
                }, 300);
            });
            
            toggle = true;
        }

    });
    
////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    contact.css({
        'background-color': 'rgba(123, 123, 123, 0.24)',
    });

    $('.links').hover(function(){

        $(this).css({
            'background-color': 'rgb(226, 219, 229)',
            'transform': 'scale(1.05)'
        });

        contact.css({
            'transform': 'scale(1.0)',
            'background-color': 'rgba(123, 123, 123, 0.24)',
        });

    }, function(){

        $(this).css({
            'background-color': 'transparent',
            'transform': 'scale(1.0)',
        });

        contact.css({
            'background-color': 'rgba(123, 123, 123, 0.24)',
        });

    });

    $('#hamburgerMenu').css({ 
        'top': -$('#hamburgerMenu').outerHeight()
    });

    $('.linksW').hover(function(){

        $(this).css({
            'background-color': 'rgb(43, 43, 47)',
            'transform': 'scale(1.05)'
        });

        contactM.css({
            'transform': 'scale(1.0)',
            'background-color': 'rgba(51, 50, 50, 1)',
        });

    }, function(){

        $(this).css({
            'background-color': 'transparent',
            'transform': 'scale(1.0)',
        });

        contactM.css({
            'background-color': 'rgba(51, 50, 50, 1)',
            'opacity': 0.6,
        });

    });

    contactM.css({ 
        'background-color': 'rgba(51, 50, 50, 1)',
        'opacity': 0.6,
    });


    $('#hamburgerCont').click(function () {

        toggle = !toggle;

        if (toggle) {
            $('#hamburgerMenu').animate({
                'top': $('#headerCont').outerHeight(),
            }, 500);

            $('#hamburgerIcon').animate({
                opacity: 0.1
            }, 200, function () {
                $("#hamburgerIcon").attr("src","./images/hamburgerClose.png");
                //finished animating, minifade out and fade new back in           
                $('#hamburgerIcon').animate({
                    opacity: 1
                }, 300);
            });

        } else {
            $('#hamburgerMenu').animate({
                'top': -$('#hamburgerMenu').outerHeight(),
            }, 500);

            $('#hamburgerIcon').animate({
                opacity: 0.1
            }, 200, function () {
                $("#hamburgerIcon").attr("src","./images/hamburger.png");
                //finished animating, minifade out and fade new back in           
                $('#hamburgerIcon').animate({
                    opacity: 1
                }, 300);
            });
        }

    });


    if (screenWidth < 900) {
        
    }
});


