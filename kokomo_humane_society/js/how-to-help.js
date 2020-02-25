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
    
    howToHelp.css({
        'background-color': 'rgba(123, 123, 123, 0.24)',
    });

    $('.links').hover(function(){

        $(this).css({
            'background-color': 'rgb(226, 219, 229)',
            'transform': 'scale(1.05)'
        });

        howToHelp.css({
            'transform': 'scale(1.0)',
            'background-color': 'rgba(123, 123, 123, 0.24)',
        });

    }, function(){

        $(this).css({
            'background-color': 'transparent',
            'transform': 'scale(1.0)',
        });

        howToHelp.css({
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

        howToHelpM.css({
            'transform': 'scale(1.0)',
            'background-color': 'rgba(51, 50, 50, 1)',
        });

    }, function(){

        $(this).css({
            'background-color': 'transparent',
            'transform': 'scale(1.0)',
        });

        howToHelpM.css({
            'background-color': 'rgba(51, 50, 50, 1)',
            'opacity': 0.6,
        });

    });

    howToHelpM.css({ 
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
    
    $('.adoptBut').click(function(){
        window.location = "adopt.html"
//        window.open("./files/volunteer.pdf", '_blank'); 
    });
    
    $('.volunteerBut').click(function(){
//        window.location = "adopt.html"
        window.open("./files/volunteer.pdf", '_blank'); 
    });
    
    $('.fosterBut').click(function(){
//        window.location = "adopt.html"
        window.open("./files/foster.pdf", '_blank'); 
    });
    
    $('.vetBut').click(function(){
//        window.location = "adopt.html"
        window.open("./files/vet.pdf", '_blank'); 
    });



    $( ".wthTitle:even" ).css({ 
        "color": "#fafafa",
        "mix-blend-mode": 'lighten',
    });

    $( ".wthText:even" ).css({ 
        "color": "#d3d3d3",
        "mix-blend-mode": 'lighten',
    });

    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $( ".waysToHelpCont:even" ).hover(function(){

        $(this).css({
            "background-blend-mode": 'lighten',
            'background-image': 'url(./images/animtedbg.gif)',
            'background-position': 'center',
            'background-size': 'cover',
        });

        $( ".wthTextCont:even" ).css({ 
            'background-color': 'rgba(26, 26, 26, 0.98)',
        });

    }, function(){

        $(this).css({
            "background-blend-mode": 'overlay',
            'background-image': 'none',
        });

        $( ".wthTextCont:even" ).css({ 
            'background-color': 'transparent',
        });
    });


    $( ".waysToHelpCont:odd" ).hover(function(){

        $(this).css({
            "background-blend-mode": 'multiply',
            'background-image': 'url(./images/animtedbg2.gif)',
            'background-position': 'center',
            'background-size': 'cover',
        });

        $( ".wthTextCont:odd" ).css({ 
            'background-color': 'rgba(219, 219, 219, 0.98)',
        });

    }, function(){

        $(this).css({
            "background-blend-mode": 'overlay',
            'background-image': 'none',
        });

        $( ".wthTextCont:odd" ).css({ 
            'background-color': 'transparent',
        });
    });


//    if (screenWidth < 900) {
//        $(window).on('resize scroll', function() {
//            $(".waysToHelpCont:even").each( function(){
//                if ($(this).isInViewport()) {
//                    $(this).css({
//                        "background-blend-mode": 'lighten',
//                        'background-image': 'url(./images/animtedbg.gif)',
//                        'background-position': 'center',
//                        'background-size': 'cover',
//                    });
//
//                    $( ".wthTextCont:even" ).css({ 
//                        'background-color': 'rgba(26, 26, 26, 0.98)',
//                    });
//                } else {
//                    $(this).css({
//                        "background-blend-mode": 'overlay',
//                        'background-image': 'none',
//                    });
//
//                    $( ".wthTextCont:even" ).css({ 
//                        'background-color': 'transparent',
//                    });
//                }
//            });
//
//            $(".waysToHelpCont:odd").each( function(){
//                if ($(this).isInViewport()) {
//                    $(this).css({
//                        "background-blend-mode": 'multiply',
//                        'background-image': 'url(./images/animtedbg2.gif)',
//                        'background-position': 'center',
//                        'background-size': 'cover',
//                    });
//
//                    $( ".wthTextCont:odd" ).css({ 
//                        'background-color': 'rgba(219, 219, 219, 0.98)',
//                    });
//                } else {
//                    $(this).css({
//                        "background-blend-mode": 'overlay',
//                        'background-image': 'none',
//                    });
//
//                    $( ".wthTextCont:odd" ).css({ 
//                        'background-color': 'transparent',
//                    });
//                }
//            });
//        });
//    }
});

