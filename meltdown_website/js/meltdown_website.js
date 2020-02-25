$(document).ready(function() {
    
    //images arent draggable anymore
    $('img').attr('draggable', false);
    
    
    // Section 1----------------------------------------------------------------------------------------------------|
    
    setInterval(fsLandingImageCheck, 1000);
    function fsLandingImageCheck () {  
        //meltdown image
        $('#landingImage').css ({
            'width': innerWidth,
            'height': innerHeight,
        });
        
        //little scroll arrow
        $('.scrollClick').css ({
            'bottom': 5,
        });
    }
    
    
    
    // ----------------------------------------------------------------------------------------------------|
    
    
    // Section 2----------------------------------------------------------------------------------------------------|
       
    //white background comes in on hover (timer)
    $('#timer').hover( function(){

        $('#timerSlider').css({
        'left': 0,
        });
        
        $(this).css({
        'transform': 'scale(1.25)',
        });
        
    }, function() {
        
        $('#timerSlider').css({
        'left': '-50' + '%',
        });
        
        $(this).css({
        'transform': 'scale(1)',
        });
        
    });
    
    //white background comes in on hover (rules)
    $('#rules').hover( function(){

        $('#rulesSlider').css({
        'right': 0,
        });
        
        $(this).css({
        'transform': 'scale(1.25)',
        });
        
        
    }, function() {
        
        $('#rulesSlider').css({
        'right': '-50' + '%',
        });
        
        $(this).css({
        'transform': 'scale(1)',
        });
        
    });
    
    // ----------------------------------------------------------------------------------------------------|
    
    
    
    // Section 3----------------------------------------------------------------------------------------------------|

    //gameplayIcon positions
    $('#gameplayIconCont').children().each(function(){

        $(this).css({
        'top': 37.5 * $(this).index() + '%',
        });

    });
    
    //make sure boardImages stay at slider size
    setInterval(sliderCheck, 1000);
    function sliderCheck () {  
        //meltdown image
        $('.boardImages').css({
            'width': $('#slider').width(),
            'height': $('#slider').height(),
        })
    }
    
    //change slide when clicking left and right arrow
    var sliderLoc = 0;
    var loaded = 0;
    $('#leftArrow').click( function(){
        
        sliderLoc++
        
        if (sliderLoc > 0) {
            sliderLoc = -3;
        }

        $('#boardImagesCont').css ({
            'left': sliderLoc * $('#slider').width(),
        });
    });

    $('#rightArrow').click( function(){

        sliderLoc--
        
        if (sliderLoc < -3) {
            sliderLoc = 0;
        }

        $('#boardImagesCont').css ({
            'left': sliderLoc * $('#slider').width(),
        });
    });
    
    //load AJAX content (board_images.html)
    //Done on hover instead of click to provide enough delay
    $('#leftArrow').hover( function(){
        if (loaded === 0) {
            loaded = 1;

            $("<div>").load('board_images.html', function() {
                $('#boardImagesCont').delay(300).append( $(this).html() );
            });  
        } 
    }, function(){
        //do nothing  
    });
    
    $('#rightArrow').hover( function(){
        if (loaded === 0) {
            loaded = 1;

            $("<div>").load('board_images.html', function() {
                $('#boardImagesCont').delay(300).append( $(this).html() );
            });  
        }  
    }, function(){
        //do nothing 
    });
    
    // ----------------------------------------------------------------------------------------------------|
    
    
    
    // Section 4----------------------------------------------------------------------------------------------------|
    
    //sil locations (abbreviated Sillouette)
    $('#labMenu').children().each(function(){

        $(this).css({
        'left': 13 * $(this).index() + '%',
        'cursor': 'pointer',
        });
        
    });
    
    //sil locations (abbreviated Sillouette)
    $('#silCont').children().each(function(){

        $(this).css({
        'left': 16.3 * $(this).index() + '%',
        'cursor': 'pointer',
        });
        
    });
    
    //get all my sil
    var allSil = $('#silCont').children();
    var whichSil;
    
    //sil hover effect
    $('#silCont').children().each(function(){

        $(this).hover( function(){
            
            whichSil = $(this).index();
            
            //lower opacity of all sil
            $(allSil).css({
                'opacity': 0.25,
            });
            
            //grab corresponding bg color based on sil hovered
            $('#sec4').css({
                'background-color': charColorArray[ whichSil ],
            })

            //take only my hovered sil, change transition speed, lower opacity, and make it stand out
            $(this).css({
                'transition': 'all 0.2s',
                'opacity': 0.25,
            });

            //once opacity is lowered, then switch image out
            $(this).delay( 200 ).queue(function (next) { 
                this.src = 'images/full_color_char/char' + $(this).index() + '.png'; 
                next();
            });
            
            //now that new image is in, transition back to full opacity
            $(this).delay( 200 ).queue(function (next) { 
                $(this).css({
                    'transition': 'all 1s',
                    'opacity': 1,
                    'z-index': 999,
                    'transform': 'scale(1.25)',
                });
                next();
            });
            
        }, function(){

            //return bg to original color
            $('#sec4').css({
                'background-color': 'rgb(240,240,240)',
            })
            
            //return my most recently hovered sil back to normal
            $(this).css({
                'transition': 'all 0.2s',
                'opacity': 0.25,
            });

            //once opacity is lowered, then switch image out
            $(this).delay( 200 ).queue(function (next) { 
                this.src = 'images/sil/char' + $(this).index() + '.png'; 
                next();
            });
            
            //now that new image is in, transition back to full opacity
            $(this).delay( 200 ).queue(function (next) { 
                $(this).css({
                    'transition': 'all 2s',
                    'z-index': 'auto',
                    'transform': 'scale(1)',
                });
                next();
            });
            
            //when not hovering on any sil, return all to full opacity
            $(allSil).css({
                'opacity': 1,
            });

        });

    });
    
    //DO THIS WHEN I CLICK ON A SIL
    $('#silCont').children().each(function(){
         
         whichSil = $(this).index();
         
        //whichever char is clicked, open the correct charInfo
         $(this).click( function(){
             
             //get rid of sil and board bg, and bring in charInfo
            $('#silCont').css('opacity', 0);
            $('#board').css('opacity', 0);
            $('#charInfoCont').css('display', 'block');
        
            $('#silCont').delay( 500 ).queue(function (next) { 
                $(this).css('display', 'none'); 
                next();
            });

            $('#board').delay( 500 ).queue(function (next) { 
                $(this).css('display', 'none'); 
                next();
            });
             
            $('#charInfoCont').delay( 500 ).queue(function (next) { 
                $(this).css('opacity', 1);
                next();
            });
             
             //based on char clicked, change information within charInfoCont and labMenu
            $('#boardLocation').attr( "src", 'images/board/section_highlight' + whichSil + '.png' );  
            $('#charInfoImg').attr( "src", 'images/full_color_char/char' + $(this).index() + '.png' ); 
            $('#charTitle').text( charTitleArray[$(this).index()] ); 
            $('#charNarrative').text( charNarrativeArray[$(this).index()] );
            $('#charInfoCont').css({
               'background-color': charColorArray[ whichSil ],
            })
            $('#labMenu').children().each(function(){
                var myLab = "lab" + whichSil;
                var myLabString = '#' + myLab.toString();
                var allLab = $('#labMenu').children();
                
                $(allLab).css ({ 
                    'color': 'white',
                    'font-size': '1.5em',
                });
                
                $(myLabString).css ({ 
                    'color': charColorArray[ whichSil ],
                    'font-size': '1.7em',
                });
            });
            
            if (whichSil === 0 || whichSil === 1) {
                $('.charSize').css({
                    'transition': 'all 0s',
                    'width': '60%',
                    'height': '180%',
                    'top': '-5%',
                    'left': '-5%',
                });
            } else {
                $('.charSize').css({
                    'width': '50%',
                    'height': '150%',
                    'top': '20%',
                    'left': '5%',
                });
            }
            
         });

     });
    
     //DO THIS WHEN I CLICK ON A MENU OPTION
     $('#labMenu').children().each(function(){
         
         $(this).click( function(){
            myClickedLab = "lab" + $(this).index();
            myClickedLabString = '#' + myClickedLab.toString();
            $(myClickedLabString).css ({ 
                'color': charColorArray[ $(myClickedLabString).index() ],
                'font-size': '1.7em',
            });
             
            whichSil = $(myClickedLabString).index();
             
             //based on whichSil value, change information within charInfoCont and labMenu
            $('#boardLocation').attr( "src", 'images/board/section_highlight' + whichSil + '.png' ); 
            $('#charInfoImg').attr( "src", 'images/full_color_char/char' + whichSil + '.png' ); 
            $('#charTitle').text( charTitleArray[ whichSil ] ); 
            $('#charNarrative').text( charNarrativeArray[ whichSil ] );
            $('#charInfoCont').css({
               'background-color': charColorArray[ whichSil ],
            });
            $('#labMenu').children().each(function(){
                myLab = "lab" + whichSil;
                myLabString = '#' + myLab.toString();
                allLab = $('#labMenu').children();
                
                $(allLab).css ({ 
                    'color': 'white',
                    'font-size': '1.5em',
                });
                
                $(myLabString).css ({ 
                    'color': charColorArray[ whichSil ],
                    'font-size': '1.7em',
                });
            });
        
            if (whichSil === 0 || whichSil === 1) {
                $('.charSize').css({
                    'transition': 'all 0s',
                    'width': '60%',
                    'height': '180%',
                    'top': '-5%',
                    'left': '-5%',
                });
            } else {
                $('.charSize').css({
                    'width': '50%',
                    'height': '150%',
                    'top': '20%',
                    'left': '5%',
                });
            }
             
         });
         
     });

    //LEFT ARROW CLICK lowers index() value (whichSil)
    $('#charLeftArrow').click( function(){

            whichSil --;
             
             //make sure we cycle correctly
            if (whichSil < 0) {
                whichSil = 5;
            }
        
             //based on whichSil value, change information within charInfoCont and labMenu
            $('#boardLocation').attr( "src", 'images/board/section_highlight' + whichSil + '.png' ); 
            $('#charInfoImg').attr( "src", 'images/full_color_char/char' + whichSil + '.png' ); 
            $('#charTitle').text( charTitleArray[ whichSil ] ); 
            $('#charNarrative').text( charNarrativeArray[ whichSil ] );
            $('#charInfoCont').css({
               'background-color': charColorArray[ whichSil ],
            });
            $('#labMenu').children().each(function(){
                myLab = "lab" + whichSil;
                myLabString = '#' + myLab.toString();
                allLab = $('#labMenu').children();
                
                $(allLab).css ({ 
                    'color': 'white',
                    'font-size': '1.5em',
                });
                
                $(myLabString).css ({ 
                    'color': charColorArray[ whichSil ],
                    'font-size': '1.7em', 
                });
            });
        
            if (whichSil === 0 || whichSil === 1) {
                $('.charSize').css({
                    'transition': 'all 0s',
                    'width': '60%',
                    'height': '180%',
                    'top': '-5%',
                    'left': '-5%',
                });
            } else {
                $('.charSize').css({
                    'width': '50%',
                    'height': '150%',
                    'top': '20%',
                    'left': '5%',
                });
            }
             
     });
    
     //RIGHT ARROW CLICK raises index() value (whichSil)   
     $('#charRightArrow').click( function(){

            whichSil ++;

             //make sure we cycle correctly
            if (whichSil > 5) {
                whichSil = 0;
            };

             //based on whichSil value, change information within charInfoCont and labMenu
            $('#boardLocation').attr( "src", 'images/board/section_highlight' + whichSil + '.png' ); 
            $('#charInfoImg').attr( "src", 'images/full_color_char/char' + whichSil + '.png' ); 
            $('#charTitle').text( charTitleArray[ whichSil ] ); 
            $('#charNarrative').text( charNarrativeArray[ whichSil ] );
            $('#charInfoCont').css({
               'background-color': charColorArray[ whichSil ],
            });
            $('#labMenu').children().each(function(){
                myLab = "lab" + whichSil;
                myLabString = '#' + myLab.toString();
                allLab = $('#labMenu').children();
                
                $(allLab).css ({ 
                    'color': 'white',
                    'font-size': '1.5em',
                });
                
                $(myLabString).css ({ 
                    'color': charColorArray[ whichSil ], 
                    'font-size': '1.7em', 
                });
                
            });
         
            if (whichSil === 0 || whichSil === 1) {
                $('.charSize').css({
                    'transition': 'all 0s',
                    'width': '60%',
                    'height': '180%',
                    'top': '-5%',
                    'left': '-5%',
                });
            } else {
                $('.charSize').css({
                    'width': '50%',
                    'height': '150%',
                    'top': '20%',
                    'left': '5%',
                });
            }

     });
    
    // DO THIS WHEN I CLOSE MY MENU
    $('#closeCont').click( function(){

          //Bring back sil and board bg, and remove charInfo
            $('#silCont').css('display', 'block');
            $('#board').css('display', 'block');
            $('#charInfoCont').css('opacity', '0');
        
            $('#charInfoCont').delay( 500 ).queue(function (next) { 
                $(this).css('display', 'none');
                next();
            });
            
            $('#silCont').delay( 500 ).queue(function (next) { 
                $(this).css('opacity', 1);
                next();
            });

            $('#board').delay( 500 ).queue(function (next) { 
                $(this).css('opacity', 0.6);
                next();
            });

    });
    
    // ----------------------------------------------------------------------------------------------------|
    
    
    // Section 5----------------------------------------------------------------------------------------------------|
    
    $('#s1').click(function(){
                   
            $('#info2').css('opacity', 0);
            $('#s2').css({
                'border': 'none',
                'background-color': 'black',
            });
            $('#info3').css('opacity', 0);
            $('#s3').css({
                'border': 'none',
                'background-color': 'black',
            });
            $('#info4').css('opacity', 0);
            $('#s4').css({
                'border': 'none',
                'background-color': 'black',
            });
        
            $(this).css({
                'background-color': 'red',
            });
            $('#info1').css('opacity', 1);
     
    });
    
    $('#s2').click(function(){
                   
            $('#info1').css('opacity', 0);
            $('#s1').css({
                'border': 'none',
                'background-color': 'black',
            });
            $('#info3').css('opacity', 0);
            $('#s3').css({
                'border': 'none',
                'background-color': 'black',
            });
            $('#info4').css('opacity', 0);
            $('#s4').css({
                'border': 'none',
                'background-color': 'black',
            });
        
            $(this).css({
                'background-color': 'red',
            });
            $('#info2').css('opacity', 1);
     
    });
    
    $('#s3').click(function(){
                   
            $('#info2').css('opacity', 0);
            $('#s2').css({
                'border': 'none',
                'background-color': 'black',
            });
            $('#info1').css('opacity', 0);
            $('#s1').css({
                'border': 'none',
                'background-color': 'black',
            });
            $('#info4').css('opacity', 0);
            $('#s4').css({
                'border': 'none',
                'background-color': 'black',
            });
        
            $(this).css({
                'background-color': 'red',
            });
            $('#info3').css('opacity', 1);
     
    });
    
    $('#s4').click(function(){
                   
            $('#info2').css('opacity', 0);
            $('#s2').css({
                'border': 'none',
                'background-color': 'black',
            });
            $('#info1').css('opacity', 0);
            $('#s1').css({
                'border': 'none',
                'background-color': 'black',
            });
            $('#info3').css('opacity', 0);
            $('#s3').css({
                'border': 'none',
                'background-color': 'black',
            });
        
            $(this).css({
                'background-color': 'red',
            });
            $('#info4').css('opacity', 1);
     
    });
    
    
 
    $('.switch').each(function(){
        $(this).hover(function(){
            $(this).css({
                'border': '3px solid white',
            });
        }, function(){
            $(this).css({
                'border': 'none',
            });
        });
    });
    // ----------------------------------------------------------------------------------------------------|
    
    
    // Section 6----------------------------------------------------------------------------------------------------|

    //make sure merchImages stay at slider size
    setInterval(merchSliderCheck, 1000);
    function merchSliderCheck () {  
        //meltdown image
        $('.merchImages').css({
            'width': $('#slider').width(),
            'height': $('#slider').height(),
        })
    }
    
    //change slide when clicking left and right arrow
    var merchSliderLoc = 0;
    $('#leftArrow2').click( function(){
        
        merchSliderLoc++
        
        if (merchSliderLoc > 0) {
            merchSliderLoc = -3;
        }

        $('#merch').css ({
            'left': merchSliderLoc * $('#slider2').width(),
        });
    });

    $('#rightArrow2').click( function(){

        merchSliderLoc--
        
        if (merchSliderLoc < -3) {
            merchSliderLoc = 0;
        }

        $('#merch').css ({
            'left': merchSliderLoc * $('#slider2').width(),
        });
    });
    
    // My Arrays----------------------------------------------------------------------------------------------------|
    
    var charColorArray = [
        
        'rgb(245,25,25)',
        'rgb(176,236,176)',
        'rgb(166,3,169)',
        'rgba(237,239,100,1)',
        'rgb(145,174,255)',
        'rgb(216, 118, 81)',
          
    ]
    
    var charTitleArray = [
        
        'DR. RATTUS',
        'DR. ROSEMARY',
        'DR. DELOREAN',
        'DR. H.A. ZARD',
        'DR. WAVICK',
        'DR. SON JR',
          
    ]
    
    var charNarrativeArray = [
        
        'Dr. Rattus is the head scientist within the biology lab. He was running tests on his rats when the explosion erupted. The explosion within the facility hit his wing the hardest. The results turned Dr. Rattus into a super human rat man knocking off his glasses and all as he scratched his way through this new transformation.',
        
        'Dr. Rosemary is the head scientist within the botany lab. She was examining a recently discovered plant species when the reactor failed. Dr. H. A. Zard\'s hazardous chemicals affected her plants, filling them with a venomous ooze. One of the plants bit her arm setting off a chain reaction.',
        
        'Dr. Delorean is the head scientist within the physics lab. He was messing with the research obsessions when the explosion erupted. Time travel had been a complete fail until Dr. H. A. Zard\'s toxic explosives filled the room. Dr. Delorean\'s greatest dreams came true, and his make permanently melted to his face.',
        
        'Dr. H. A. Zard is the head scientist within the hazard lab. He was carefully and properly disposing of all his deadly chemicals when the explosion erupted. The toxicities of the chemical fumes heightened at the reaction of the explosion morphing Dr. H. A. Zard and his trusty pet bird into one scary soul.',
        
        'Dr. Wavick is the head scientist within the hydrology lab. He was admiring his aquariums filled with exotic sea creatures when the explosion erupted. The explosion busted through the aquariums, gushing out with salt water. When the water hit his skin he felt the burning sensation of gills starting to form.',
        
        'Dr. Son Jr. is the head scientist within the solar lab. Taking over his father\'s practice, he was testing out his newest, fastest, and technologically-advanced solar panels when they completely over-heated causing an intense explosion throughout the facility. Clearly his father would not be so proud. His fellow colleagues can thank him for this meltdown mess.',
          
    ]
    
    // ----------------------------------------------------------------------------------------------------|
    
});