


var webAppsArray = [
    
    { 
        heading: 'Beacon Mobile', 
        info:'During my internship at Schneider Geospatial, I worked alongside the Beacon dev team to conceptualize and implement an app for their web service which involved over 50 different mockups. Next, I worked with a fellow software development intern to bring the app to fruition through React Native.', 
        imageSRC: 'images/beacon-mobile1.png',
        butText: 'Learn More',
    },
    { 
        heading: 'Kokomo Humane Society', 
        info:'One of the projects in my Advanced Web Design class was to recreate a nonprofit website. I recreated their website, adding color, better hierarchy, and clearer navigation. To see what the current website looks like, take a look at my portfolio.', 
        imageSRC: 'images/kokomo-humane-society.png',
        butText: 'Visit Website',
        websiteURL: 'kokomo_humane_society/index.html',
    },
    { 
        heading: 'Meltdown Board Game', 
        info:'This website was made for use with Meltdown, the board game that a couple of friends and I created. Unlike the other websites shown, this one is not responsive, as it was one of my first creations. I plan to change that soon, but I am keeping it here as a good aesthetic reference.', 
        imageSRC: 'images/meltdown-board-game.png',
        butText: 'Visit Website',
        mobileOverride: true,
        websiteURL: 'meltdown_website/index.html',
    },
    { 
        heading: 'Civic Hack 2018', 
        info:'While working with Level Up Development, we won the 2018 Civic Hack which is a 24 hour-straight event to try and come up for a solution to a given city/environmental issue. Given the task of Food Insecurity, I worked with my team to create an app and chatbot (AKA Robin) that helps direct people to places offering free food.', 
        imageSRC: 'images/civic-hack.png',
        butText: 'Learn More',
    },
    
]

var a = 0;
function arrowRight(viewportWidth) {
    a++
    if (a > webAppsArray.length - 1) {
        a = 0;
    }
    if (webAppsArray[a].mobileOverride && viewportWidth < 800){
        a++
    }
    $('.menuHeader').css('opacity', 0);
    $('.menuInfo').css('opacity', 0);
    $('.menuImg').css('opacity', 0);
    $('.explore').css('opacity', 0);
    
    setTimeout(function(){
        $('.menuHeader').text(webAppsArray[a].heading);
        $('.menuInfo').text(webAppsArray[a].info);
        $('.menuImg').attr('src',webAppsArray[a].imageSRC).css('z-index', 0);
        $('.explore').text(webAppsArray[a].butText);
    }, 600)
    
    setTimeout(function(){
        $('.menuHeader').css('opacity', 1);
        $('.menuInfo').css('opacity', 1);
        $('.menuImg').css('opacity', 1);
        $('.explore').css('opacity', 1);
    }, 900)
    
}
function arrowLeft(viewportWidth) {
    a--
    if (a < 0) {
        a = webAppsArray.length - 1;
    }
    if (webAppsArray[a].mobileOverride && viewportWidth < 800){
        a--
    }
    $('.menuHeader').css('opacity', 0);
    $('.menuInfo').css('opacity', 0);
    $('.menuImg').css('opacity', 0);
    $('.explore').css('opacity', 0);
    
    setTimeout(function(){
        $('.menuHeader').text(webAppsArray[a].heading);
        $('.menuInfo').text(webAppsArray[a].info);
        $('.menuImg').attr('src',webAppsArray[a].imageSRC).css('z-index', 0);
        $('.explore').text(webAppsArray[a].butText);
    }, 600)
    
    setTimeout(function(){
        $('.menuHeader').css('opacity', 1);
        $('.menuInfo').css('opacity', 1);
        $('.menuImg').css('opacity', 1);
        $('.explore').css('opacity', 1);
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
       
        $(this).css({
            'background-color': 'rgb(0,0,0)',
        });
    }, function(){ 
        $(this).css({
            'background-color': '#555D69',
        });
    });
    
    //click effects for Explore Button
    $('.explore').click(function(){
        if(webAppsArray[a].websiteURL){
            $('body').append('<a id="link" href="'+ webAppsArray[a].websiteURL +'">&nbsp;</a>');
            $('#link').attr('target','_blank');
            $('#link')[0].click();
            $('#link').remove();
        } else{
            $('.menuGrid').css({
                'transform': 'translateX('+ -$('.menuGrid').width() +'px)',
            });
            setTimeout(function(){
                $('.exitFSCont').css({
                   'display': 'flex' 
                });
            }, 1250);
            //beacon mobile info
            if (a == 0){
                $(".activeContent").html('<p class="f-lg activeHeader">Starting From Scratch</p><img class="activeImg" src="images/bmmockups.png"/><p class="f-sm activeInfo">I began the creation process by taking note and referencing their current web platform, and compiling a list of required features that would need to be transferred over to the app. From there I iterated on different designs and possibilities to make for a cleaner app experience, constantly running quick tests and checking in with everyone to see if there was any features that either needed to be implemented, or ones that felt out of place. This eventually led to the our road map, consisting of over 50 mock-ups.</p><p class="f-lg activeHeader">Implementation Time</p><img class="activeImg" src="images/bmmockups2.png"/><p class="f-sm activeInfo">With a very clear picture of our end result as well as the approval of everyone, I was then able to share everything with my software development partner. We worked hard over the next few months to bring it to life. I handled the front-end, creating layouts and ensuring navigation was running smoothly - then handed it off to my partner to ensure that all the data was being properly passed through on the back-end. Given the task of recreating their feature rich web platform into a native app was awesome, and I enjoyed the months that we spent creating it!</p>');
            }
            //civic hack info
            if (a == 3){
                $(".activeContent").html('<p class="f-lg activeHeader">Understanding The Users</p><img class="activeImg" src="images/civic_hack_image2.png"/><img class="activeImg" src="images/civic_hack_image3.png"/><p class="f-sm activeInfo">After being told that the overarching topic was Food Insecurity, we began brainstorming on how technology can help in this field. To better understand the situation and what possibilities were available I created Archetypes of different User Profiles to help us distinguish who this applies too. From that, we began gathering some statistics and other information related to the current Food Insecurity issues as well as “Food Deserts”. The best way forward would be to create interactions through phones – big surprise there.</p><p class="f-lg activeHeader">Expanding On Ideas</p><img class="activeImg" src="images/chatbot_dialogue.png"/><p class="f-sm activeInfo">We knew that we wanted to make an app, but we were still deep in discussion on its capabilities. We settled that it should be able to direct the user to nearby Food Services, both when online, or offline – since a decent percentage of users would not have the privilege of mobile data in this case. From there we reached the conclusion of incorporating a chatbot named Robin that would be able to answer simple questions, provide directions easily when online, and give text-message based directions if no internet is available. To further clarify the abilities of our chatbot, I created a rather extensive Dialogue Walkthrough that helped us better understand what Robin should be able to answer, and what limitations our app and chatbot would have.</p><p class="f-lg activeHeader">Securing The Win</p><img class="activeImg" src="images/civic_hack_image.JPG"/><p class="f-sm activeInfo">Now that we had everything planned out – the next 18 hours would be a heavy grind of bringing Robin to life as well as establishing a useful and direct app that met the needs of those dealing with Food Insecurity. Given the time restraints, we chose to devote more time to making Robin fully functional, as that would be our best selling point in the presentation. The app was simply mocked-up to show the possible integration in the future. Our presentation went very well, both the effectiveness of Robin and the visual reassurance of the app got us the win!</p>');
            }
            $('.activeGrid').css({
                'display': 'grid',
                'height': $('.activeContent').height(),
            });
        }
    });

    $('.exitFSCont').click(function(event){ 
        $(this).css({
            'display': 'none',
        });
        $('.menuGrid').css({
            'transform': 'translateX(0px)',
        });
        setTimeout(function(){
            $('.activeGrid').css({
                'display': 'none',
            });
        }, 1000);
        
    });
    
    var myLeftArrow = $('.menuArrow:nth-child(1)')
    var myRightArrow = $('.menuArrow:nth-child(2)')
    
    $(myLeftArrow).click( function(){
       arrowLeft(viewportWidth) 
    });
    $(myRightArrow).click( function(){
       arrowRight(viewportWidth)
    }); 
});