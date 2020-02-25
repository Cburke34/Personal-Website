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
    
////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    home.css({
            'background-color': 'rgba(123, 123, 123, 0.24)',
        });

    $('.links').hover(function(){

        $(this).css({
            'background-color': 'rgb(226, 219, 229)',
            'transform': 'scale(1.05)'
        });

        home.css({
            'transform': 'scale(1.0)',
            'background-color': 'rgba(123, 123, 123, 0.24)',
        });

    }, function(){

        $(this).css({
            'background-color': 'transparent',
            'transform': 'scale(1.0)',
        });

        home.css({
            'background-color': 'rgba(123, 123, 123, 0.24)',
        });

    });

    $('.linksW').hover(function(){

        $(this).css({
            'background-color': 'rgb(43, 43, 47)',
            'transform': 'scale(1.05)'
        });

        homeM.css({
            'transform': 'scale(1.0)',
            'background-color': 'rgba(51, 50, 50, 1)',
        });

    }, function(){

        $(this).css({
            'background-color': 'transparent',
            'transform': 'scale(1.0)',
        });

        homeM.css({
            'background-color': 'rgba(51, 50, 50, 1)',
            'opacity': 0.6,
        });

    });

    homeM.css({ 
        'background-color': 'rgba(51, 50, 50, 1)',
        'opacity': 0.6,
    });

    $('#sb1').css({
        top: $('#landingImageCont').offset().top + $('#landingImageCont').outerHeight(true) - 1/2 * $('#sb1').height(),
        transition: 'none',
    });
    $('#sb2').css({
        top: $('.programSection').offset().top + $('.programSection').outerHeight(true) - 1/2 * $('#sb2').height(),
        transition: 'none',
    });



    var smallScreen = false;

    if (screenWidth < 650) {

        smallScreen = true

    }

    $(window).resize(function () {


        $('#sb1').css({
            top: $('#landingImageCont').offset().top + $('#landingImageCont').outerHeight(true) - 1/2 * $('#sb1').height(),
        });
        $('#sb2').css({
            top: $('.programSection').offset().top + $('.programSection').outerHeight(true) - 1/2 * $('#sb2').height(),
        });

        screenHeight = innerHeight;
        screenWidth = innerWidth;

        if (screenWidth < 650) {

            smallScreen = true

        }

        if (smallScreen && screenWidth > 650) {
            window.location.href=window.location.href;
        }

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

    // Landing Page Carousel ---
    //Preload images first 
    $.fn.preload = function () {
        this.each(function () {
            $('<img/>')[0].src = this;
        });
    }
    var images = Array(
        "images/landingImage1.png",
        "images/landingImage2.png",
        "images/landingImage3.png"
    );

    $([images[0], images[1], images[2], ]).preload();

    // Usage:

    var currimg = 0;


    function loadimg() {

        $('#landingTextMobile').animate({
            opacity: 1
        }, 500, function () {
            //finished animating, minifade out and fade new back in           
            $('#landingTextMobile').animate({
                opacity: 0.4
            }, 300, function () {
                //animate fully back in
                $('#landingTextMobile').animate({
                    opacity: 1
                }, 300)

            });
        });

        $('#landingImageCont').animate({
            opacity: 1
        }, 500, function () {
            //finished animating, minifade out and fade new back in           
            $('#landingImageCont').animate({
                opacity: 0.4
            }, 300, function () {
                currimg++;

                if (currimg > images.length - 1) {
                    currimg = 0;
                }

                if (currimg == 0) {
                    $('#landingText').html("Improving the <br> Lives of Animals").css({
                        'left': '15%',
                        'top': '24%',
                    });
                    $('#landingTextMobile').html("Improving the Lives of Animals")
                }

                if (currimg == 1) {
                    $('#landingText').html("Preventing Cruelty <br> Through Education").css({
                        'left': '15%',
                        'top': '75%',
                    });
                    $('#landingTextMobile').html("Preventing Cruelty Through Education")
                }

                if (currimg == 2) {
                    $('#landingText').html("Uniting Pets <br> with Familes").css({
                        'left': '60%',
                        'top': '24%',
                    });
                    $('#landingTextMobile').html("Uniting Pets with Familes")
                }

                var newimage = images[currimg];

                //swap out bg src                
                $('#landingImageCont').css("background-image", "url(" + newimage + ")");

                //animate fully back in
                $('#landingImageCont').animate({
                    opacity: 1
                }, 300, function () {

                    //set timer for next
                    setTimeout(loadimg, 4000);

                });

            });

        });

    }
    setTimeout(loadimg, 4000);
    
    $('.lostPet').click(function(){
        //window.location = ""
        window.open('https://findingrover.com/org-id/CTyR0MPunY', '_blank'); 
    });

});
