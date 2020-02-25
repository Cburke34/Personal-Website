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
    
    adopt.css({
        'background-color': 'rgba(123, 123, 123, 0.24)',
    });

    $('.links').hover(function(){

        $(this).css({
            'background-color': 'rgb(226, 219, 229)',
            'transform': 'scale(1.05)'
        });

        adopt.css({
            'transform': 'scale(1.0)',
            'background-color': 'rgba(123, 123, 123, 0.24)',
        });

    }, function(){

        $(this).css({
            'background-color': 'transparent',
            'transform': 'scale(1.0)',
        });

        adopt.css({
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

        adoptM.css({
            'transform': 'scale(1.0)',
            'background-color': 'rgba(51, 50, 50, 1)',
        });

    }, function(){

        $(this).css({
            'background-color': 'transparent',
            'transform': 'scale(1.0)',
        });

        adoptM.css({
            'background-color': 'rgba(51, 50, 50, 1)',
            'opacity': 0.6,
        });

    });

    adoptM.css({ 
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
    
    $('.adoptOptions').first().click( function(e){
        $('.adoptOptions').first().animate({
            opacity: 0,
        }, 500, function(e){
            $('.adoptHeader').html
            (
                '<div class="butCont return"><img src="images/back.png"><div class="f-sm but">Return</div></div><p class="f-sm adoptheaderText">We have so many dogs looking for    forever homes. Dogs available for adoption change every day as new ones arrive and others are adopted.<br><em>“Once you have had a wonderful dog, a life without one, is a life diminished.” ― Dean Koontz</em></p>'
            )
            $('.return').css('display', 'flex');
            
            $('.adoptionIframe').first().css('display', 'block');
            $('.adoptOptionsCont').css('display', 'none');
        });
        
    });
    
    $('.adoptOptions').first().next().click( function(e){
        $('.adoptOptions').first().animate({
            opacity: 0,
        }, 500, function(e){
            $('.adoptHeader').html
            (
                '<div class="butCont return"><img src="images/back.png"><div class="f-sm but">Return</div></div><p class="f-sm adoptheaderText">We often have small animals available for adoption. If you are looking for a hamster, rabbit, guinea pig or a ferret check with us first.  For these pets we request that you give a donation of your choice as an adoption fee unless the animal has already been altered. In those cases we will have a set adoption fee.</p>'
            )
            $('.return').css('display', 'flex');
            
            $('.adoptionIframe').first().next().next().css('display', 'block');
            $('.adoptOptionsCont').css('display', 'none');
        });
        
    });
    
    $('.adoptOptions').first().next().next().click( function(e){
        $('.adoptOptions').first().animate({
            opacity: 0,
        }, 500, function(e){
            $('.adoptHeader').html
            (
                '<div class="butCont return"><img src="images/back.png"><div class="f-sm but">Return</div></div><p class="f-sm adoptheaderText">We have so many cats looking for forever homes. Cats available for adoption change every day as new ones arrive and others are adopted. We try to keep this list as current as possible but cannot guarantee that the cat you are looking for will still be available when you come to meet them.</p></p>'
            )
            $('.return').css('display', 'flex');
            
            $('.adoptionIframe').first().next().css('display', 'block');
            $('.adoptOptionsCont').css('display', 'none');
        });
    });
    
    $('.return').on('click', "div.return", function() {
        console.log('returned')
        $('.adoptHeader').html
            (
                '<p class="f-md adoptHeaderText">We welcome you to come and visit the shelter to spend time and hopefully adopt a new friend for life.</p>'
            )
            
        $('.adoptionIframe').css('display', 'none');
        $('.adoptOptionsCont').css('display', 'flex');
    });
    
    $('.adoptBut').click(function(){
//        window.location = "adopt.html"
        window.open("./files/adopt.pdf", '_blank'); 
    });

});


