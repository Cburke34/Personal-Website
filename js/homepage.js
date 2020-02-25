$(document).ready(function(){
    
    var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
                   navigator.userAgent &&
                   navigator.userAgent.indexOf('CriOS') == -1 &&
                   navigator.userAgent.indexOf('FxiOS') == -1;

    //fix for safari container heights
    if (isSafari) {
        $('.projectsCont').css({
            'height': viewportHeight,
        });
        $('.aboutGridCont').css({
            'height': viewportHeight,
        });
        $('.contactGrid').css({
            'height': viewportHeight,
        });
    }
    
    //Disable dragging and image saving
    $('img').attr('draggable', false);
    $("body").on("contextmenu", "img", function(e) {
        return false;
    });

    var viewportWidth = innerWidth;
    var viewportHeight = innerHeight;
    
    $( window ).resize(function() {
        viewportWidth = innerWidth;
        viewportHeight = innerHeight;
        if (viewportWidth >= 800) {
            $('.mobileHeaderRight').css({
                'display': 'none',
            });
        }
        //fix for safari container heights
        if (isSafari) {
            $('.projectsCont').css({
                'height': viewportHeight,
            });
            $('.aboutGridCont').css({
                'height': viewportHeight,
            });
            $('.contactGrid').css({
                'height': viewportHeight,
            });
        }
    });
    
    //if I refresh, take me back to landing page;
    $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
    });

//---- LANDING PAGE "LOADING EFFECT" ---------------------------------------------
    
    var loadedCheck = 0;
    
    //canvas project appears first
    $(".raindrop").css('opacity', 1); 
    
    //Then my header shows and scrolling can happen
    setTimeout(function() {
        $('body').css('overflow-y', 'scroll');
        $(".headerCont").css('opacity', 1); 
        $(".raindrop").css('opacity', 0.15);
    }, 2000)
    
    //Then homeInfo appears
    setTimeout(function() {
        $(".homeInfo").css('opacity', 1); 
    }, 3000)
    
    setTimeout(function() {
        $('.homeAnimation').css('opacity', 1);
        $('.raindrop').css({
            'transition': 'none',
        });
        $('.scrollArrowCont').css('opacity', 1);  
        loadedCheck = 1;
    }, 4200)
//-----------------------------------------------------------------
    
    
// form validation for contact form ---------------------------------------------------------------------------------------------- 
    $('.submit').click(function(event){
        var email = $('.email').val();
        var subject = $('.subject').val();
        var message = $('.message').val();
        
        if ( email.length > 5 && email.includes('@') && email.includes('.') ) {
            $('.email').css({
                'border-bottom': '5px solid rgb(255, 255, 255)',
            });
            
        } else {
            event.preventDefault()
            $('.email').css({
                'border-bottom': '5px solid rgb(167, 40, 31)',
            });
            
        }
        
        if ( subject.length > 0 ) {
            $('.subject').css({
                'border-bottom': '5px solid rgb(255, 255, 255)',
            });
        } else {
            event.preventDefault()
            $('.subject').css({
                'border-bottom': '5px solid rgb(167, 40, 31)',
            });
        }
        
        if ( message.length >= 10 ) {
            $('.message').css({
                'border-bottom': '5px solid rgb(255, 255, 255)',
            });
        } else {
            event.preventDefault()
            $('.message').css({
                'border': '5px solid rgb(167, 40, 31)',
            });
        }
    });
    
    $('textarea')
      .focus(function() { $(this).css({
            'background': 'none',
            'background-color': 'rgb(255,255,255)',
        }) })
      .blur(function() { if ($(this)[0].value == '') { $(this).css("background", "url('../images/textareaIcon-12.png') center center no-repeat") } });
//--------------------------------------------------------------------------------------------------------------------------------------
    
    
    
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
    
    //scroll arrow onclick
    $('.scrollArrowCont2').click(function(){
        $("html, body").animate({ scrollTop: 
                                 $('.projectsCont').offset().top}, 800, "swing");
    });
    
    //name onclick
    $('.headerLeft').click(function(){
        $("html, body").animate({ scrollTop: 0}, 800, "swing");
    });
    
    
    var projectsLink = $('.linksCont').eq(0);
    var aboutLink = $('.linksCont').eq(1);
    var contactLink = $('.linksCont').eq(2);
    
    var html5Card = $('.card').eq(0);
    var websitesCard = $('.card').eq(1);
    var portfoliosCard = $('.card').eq(2);
    
    
    //project link onclick
    $(projectsLink).click(function(){
        $("html, body").animate({ scrollTop: 
                                 $('.projectsCont').offset().top}, 800, "swing");
        setTimeout(function(){
            $(projectsLink).children().css({
                'color': 'white',
            });
        }, 825)
    });
    
    $(html5Card).click(function(){
        $(this).css({
            'transform': 'scale(1.25)',
            'filter': 'blur(100px)',
        });
        setTimeout(function(){
            window.location.href = 'canvas_projects.html';
        },400)
    });
    
    $(websitesCard).click(function(){
        $(this).css({
            'transform': 'scale(1.25)',
            'filter': 'blur(100px)',
        });
        setTimeout(function(){
            window.location.href = 'websites_apps.html';
        },400)
    });
    
    $(portfoliosCard).click(function(){
        $(this).css({
            'transform': 'scale(1.25)',
            'filter': 'blur(100px)',
        });
        setTimeout(function(){
            $('body').append('<a id="link" href="https://drive.google.com/open?id=1PEK67jFsq7NWZ97DYeSGiu8CxOghnwMV">&nbsp;</a>');
            $('#link').attr('target','_blank');
            $('#link')[0].click();
            $('#link').remove();
            $(portfoliosCard).css({
                'transform': 'scale(1.0)',
                'filter': 'blur(0px)',
            });
        },400)
    });
    
    //about link onclick
    $(aboutLink).click(function(){
        $("html, body").animate({ scrollTop: 
                                 $('.aboutGridCont').offset().top}, 800, "swing");
        setTimeout(function(){
            $(aboutLink).children().css({
                'color': 'white',
            });
        }, 825)
    });
    
    //contact link onclick
    $(contactLink).click(function(){
        $("html, body").animate({ scrollTop: 
                                 $('.contactGrid').offset().top}, 800, "swing");
        setTimeout(function(){
            $(contactLink).children().css({
                'color': 'white',
            });
        }, 825)
    });
    
    
    
    //3d transform card effect. Original effect by Andrew Burton https://codepen.io/onge/pen/NPGaGP  -----------------------------------
    $(function(){
		boxRollovers();
	});
	
	function boxRollovers()
	{
		$selector = $(".card");
		$selector2 = $(".aboutIcon");
		XAngle = 0;
		YAngle = 0;
		Z = 50;
		
		$selector.on("mousemove",function(e){
			var $this = $(this);
			var XRel = e.pageX - $this.offset().left;
			var YRel = e.pageY - $this.offset().top;
			var width = $this.width();
		
			YAngle = -(0.01 - (XRel / width)) * 10; 
			XAngle = (0.01 - (YRel / width)) * 10;
			updateView($this.children());
		});
        
        $selector2.on("mousemove",function(e){
			var $this = $(this);
			var XRel = e.pageX - $this.offset().left;
			var YRel = e.pageY - $this.offset().top;
			var width = $this.width();
		
			YAngle = -(0.01 - (XRel / width)) * 10; 
			XAngle = (0.01 - (YRel / width)) * 10;
			updateView($this);
		});
		
		$selector.on("mouseleave",function(){
			oLayer = $(this).children();
			oLayer.css({"transform":"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
		});
        
        $selector2.on("mouseleave",function(){
			oLayer = $(this)
			oLayer.css({"transform":"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
		});
	}
	
	function updateView(oLayer)
	{
		oLayer.css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)","transition":"none","-webkit-transition":"none"});
	}
    
    // --------------------------------------------------------------------------------------------------------------------------------
    

    //Changing link color based on current scroll locations
    $(window).scroll(function(){

        //header
        if ($(this).scrollTop() < $('.projectsCont').offset().top && loadedCheck > 0){
            $('.links').css({
                'color': 'rgba(200,200,200,0.75)',
            });
            if (viewportWidth < 800) {
                $('.mobileHeaderRight').css({
                    'display': 'none',
                });
                $('.context').text('').css({
                    'opacity': 0,
                });
            }
        };
        
        //projects
        if ($(this).scrollTop() >= $('.projectsCont').offset().top && $(this).scrollTop() < $('.aboutGridCont').offset().top) {
            $('.links').css({
                'color': 'rgba(200,200,200,0.75)',
            });
            $(projectsLink).children().css({
                'color': 'white',
            });
            if (viewportWidth < 800) {
                $('.mobileHeaderRight').css({
                    'display': 'flex',
                });
                $('.context').text('Projects').css({
                    'opacity': 1,
                });
            }
        }
        
        //about
        if ($(this).scrollTop() >= $('.aboutGridCont').offset().top && $(this).scrollTop() < $('.contactGrid').offset().top) {
            $('.links').css({
                'color': 'rgba(200,200,200,0.75)',
            });
            $(aboutLink).children().css({
                'color': 'white',
            });
            if (viewportWidth < 800) {
                $('.mobileHeaderRight').css({
                    'display': 'flex',
                });
                $('.context').text('About').css({
                    'opacity': 1,
                });
            }
        }
        
        //contact
        if ($(this).scrollTop() >= $('.contactGrid').offset().top) {
            $('.links').css({
                'color': 'rgba(200,200,200,0.75)',
            });
            $(contactLink).children().css({
                'color': 'white',
            });
            if (viewportWidth < 800) {
                $('.mobileHeaderRight').css({
                    'display': 'flex',
                });
                $('.context').text('Contact').css({
                    'opacity': 1,
                });
            }
        }
    });
});