$(document).ready(function(){

//Timer 30:00----------------------------------------------------------------------------------------------------------- |
    
    //total minutes
    var TOTAL_MINNuke = 30;

    //keep track of total time
    var startTimeNuke = TOTAL_MINNuke * 60;

    //keep track of the time NOW
    var currentTimeNuke = 0;

    //diff between startTime and currentTime
    //set appropriately so that it knows that its >0 at start
    var timeLeftNuke = 9999;

    //store interval timer
    var timerNuke;

    //store time when paused
    var pausedTimeNuke = 0;
    
//    var checkSoundNuke = 0;
//    var checkPauseNuke = 0;


    //display the start time amount
    $('#timerHolderNuke').html(TOTAL_MINNuke + ':00')
    
    //make my restart icon not draggabl
    $('#restartIconNuke').attr('draggable', false);
    
    
    //Play Button
    $('#playContNuke').click( function(){

        
//        if (checkSoundNuke === 0){
//            $('#soundNuke')[0].play();
//            $('#soundNuke').autoplay = true;
//            checkSoundNuke = 1;
//            checkPauseNuke = 0;
//        }
        
        
        
        //only go fs and show message if timer is just starting
        if (currentTimeNuke === 0) {

            //fullscreen mode when clicked (SCREENFULL LIBRARY)
            if (screenfull.enabled) {
                screenfull.request();
            }

        }

        //start or continue my timer
        startTimerNuke();
        
        //make gray box dissapear
        $('#grayBox').css({  
            'opacity': 0,
            'z-index': 0, 
        });
        
        $('#contNuke').css({  
            'z-index': 996, 
        });
        
        $('#contTele').css({ 
            'z-index': 996, 
        });

        //make playCont disappear
        $(this).css('opacity', 0);

        //resize and move elements to make room for restart button
        $('#btnMid1Nuke').css('margin-left', '-25%');

        //change display of playCont button to allow clicking of pauseCont button
        $(this).delay( 250 ).queue(function (next) { 
            $(this).css('display', 'none'); 
            next();
        });

        //display pauseCont button
        $('#pauseContNuke').delay( 250 ).queue(function (next) { 
            $(this).css('display', 'block'); 
            next();
        });

        //make pauseCont appear
        $('#pauseContNuke').delay( 250 ).queue(function (next) { 
            $(this).css('opacity', 1); 
            next();
        });
        
        //hide pausedMessage
        $('#pausedMessageNuke').css('opacity', 0);
        
        setTimeout(checkPause, 500);

    });

    
    //Pause Button
    $('#pauseContNuke').click( function(){
        
        
//        if (checkPauseNuke === 0) {
//            $('#soundNuke')[0].pause();
//            checkPausedNuke = 1;
//            checkSoundNuke = 0;
//        }
        
        
        //pause me
        pauseTimerNuke();

        //make pauseCont disappear
        $('#pauseContNuke').css('opacity', 0);

        //hiding pauseCont button to allow clicking of playCont button
        $('#pauseContNuke').delay( 250 ).queue(function (next) { 
            $(this).css('display', 'none'); 
            next();
        });

        //display playCont button
        $('#playContNuke').delay( 250 ).queue(function (next) { 
            $(this).css('display', 'block'); 
            next();
        });

        //make playCont appear
        $('#playContNuke').delay( 250 ).queue(function (next) { 
            $(this).css('opacity', 1); 
            next();
        });
        
        //show pausedMessage
        $('#pausedMessageNuke').css('opacity', 1);
       
        setTimeout(checkPlay,500);

    });

    
    //rotate angle
    var a = 0;
    //Restart Button
    $('#restartContNuke').click( function(){
        
//        $('#soundNuke')[0].pause();
//        checkPausedNuke = 1;
//        checkSoundNuke = 0;
        
        a += 360;
        $('#restartIconNuke').css('transform', 'rotate(' + a + 'deg)');
        
        //moving buttons if restart button is pressed with 0 time left
        if (timeLeftNuke === 0) {
            
            $('#btnMid2Nuke').css('opacity', 0);
        
            $('#btnMid2Nuke').delay( 2000 ).queue(function (next) { 
                $(this).css('margin-left', '22%'); 
                next();
            });
            
        }

        stopTimerNuke();
        
        //hide pausedMessage
        $('#pausedMessageNuke').css('opacity', 0);
        
        //hiding pauseCont button
        $('#pauseContNuke').css('display', 'none'); 
        
        //reveal playCont
        $('#playContNuke').css({
            'display': 'block',
            'opacity': 1,
        });

    });
    
    
    function pauseTimerNuke () {
        
        //grab the current time
        pausedTimeNuke = currentTimeNuke;
        
        //stop all previous intervals
        clearInterval(timerNuke);
        
    }
    
    
    function stopTimerNuke () {
        
        currentTimeNuke = 0;
        
        //stop all previous intervals
        clearInterval(timerNuke);
        timeLeftNuke = 9999;
        
        //display the start time amount
         $('#timerHolderNuke').html(TOTAL_MINNuke + ':00')
        
    }

    
    function startTimerNuke () {

        //stop all previous intervals
        clearInterval(timerNuke);

        if(pausedTimeNuke != currentTimeNuke){
            currentTimeNuke = 0;
        }

        //set interval running once every 'x' milliseconds
        //runTimer function is run 
        timerNuke = setInterval(runTimerNuke,1000);

    }

    
    function runTimerNuke () {

        //current time increased by one
        currentTimeNuke ++;
        
        //get the time that is left, and tell it to stop at 0
        if (timeLeftNuke > 0) {
            timeLeftNuke = startTimeNuke - currentTimeNuke;
        }

        //if timer is 0, make only restart button visible
        if (timeLeftNuke === 0) {
            timeLeftNuke = 0;
            
            $('#btnMid1Nuke').css({
                'margin-left': 0,
                'opacity': 1,
            });
            
            $('#btnMid2Nuke').css('margin-left', 0); 
        }
  
        var minutesNuke = Math.floor(timeLeftNuke / 60);
        var secondsNuke = timeLeftNuke % 60;

        //add '0' to match timer formatting: (1:05 instead of 1:5)
        if (secondsNuke < 10) {
            secondsNuke = ('0'+secondsNuke).slice(-4);
        }

        //return my time and make it look nice
        $('#timerHolderNuke').html(minutesNuke + ':' + secondsNuke).css({
            'font-size': '7em',
        });
        
        var scaleNuke = 1 + (currentTimeNuke / 3600);
        var scaleNukeString = scaleNuke.toString();
        
        var widthNuke = 50 + ((currentTimeNuke / 1800) * 50)
        var widthNukeString = widthNuke.toString();
        
        $('#bgNuke').css({
            'opacity': currentTimeNuke / 1800,
            'width': widthNukeString + '%',
        });
        
        $('#contNuke').css({
            'transform': 'scale(' + scaleNukeString + ')',
        });
        
        $('#soundNuke').prop("volume", scaleNuke - 0.8);
    }   


    //checks this every second...
    setInterval(checkVarsNuke,1000);
    function checkVarsNuke () {
        
        //only show restart button if timer has started
        if (currentTimeNuke > 0) {
            $('#btnMid2Nuke').css('opacity', 1);
        }
        
    }
    
    
//----------------------------------------------------------------------------------------------------------- |
    
    
//Universal Pause/Play---------------------------------------------------------------------------------------- |

    $('#playCont').click( function(){
        
        
        //CONTINUE MY NUKE TIMER--------------------------------
//        if (checkSoundNuke === 0){
//            $('#soundNuke')[0].play();
//            $('#soundNuke').autoplay = true;
//            checkSoundNuke = 1;
//            checkPauseNuke = 0;
//        }

        startTimerNuke();
        
        //hide pausedMessage
        $('#pausedMessageNuke').css('opacity', 0);
        
        //make playCont disappear
        $('#playContNuke').css('opacity', 0);
        
        //change display of playCont button to allow clicking of pauseCont button
        $('#playContNuke').delay( 250 ).queue(function (next) { 
            $(this).css('display', 'none'); 
            next();
        });
        
        //display pauseCont button
        $('#pauseContNuke').delay( 250 ).queue(function (next) { 
            $(this).css('display', 'block'); 
            next();
        });

        //make pauseCont appear
        $('#pauseContNuke').delay( 250 ).queue(function (next) { 
            $(this).css('opacity', 1); 
            next();
        });
        //--------------------------------------------------
        
        
        //CONTINUE MY TELE TIMER----------------------------
//        if (checkSoundTele === 0){
//            $('#soundTele')[0].play();
//            $('#soundTele').autoplay = true;
//            checkSoundTele = 1;
//            checkPauseTele = 0;
//        }
        
        startTimerTele();

        //hide pausedMessage
        $('#pausedMessageTele').css('opacity', 0);
        
        //make playCont disappear
        $('#playContTele').css('opacity', 0);
        
        //change display of playCont button to allow clicking of pauseCont button
        $('#playContTele').delay( 250 ).queue(function (next) { 
            $(this).css('display', 'none'); 
            next();
        });

        //display pauseCont button
        $('#pauseContTele').delay( 250 ).queue(function (next) { 
            $(this).css('display', 'block'); 
            next();
        });

        //make pauseCont appear
        $('#pauseContTele').delay( 250 ).queue(function (next) { 
            $(this).css('opacity', 1); 
            next();
        });
        //--------------------------------------------------
        

        //MAKE UNIVERSAL playCont DISAPPEAR-----------------
        $(this).css('opacity', 0);

        //change display of playCont button to allow clicking of pauseCont button
        $(this).delay( 250 ).queue(function (next) { 
            $(this).css('display', 'none'); 
            next();
        });

        //display Universal pauseCont button
        $('#pauseCont').delay( 250 ).queue(function (next) { 
            $(this).css('display', 'block'); 
            next();
        });

        //make pauseCont appear
        $('#pauseCont').delay( 250 ).queue(function (next) { 
            $(this).css('opacity', 1); 
            next();
        });
        //--------------------------------------------------
        
    });
    
    
    
    
    $('#pauseCont').click( function(){
        
        
        //PAUSE MY NUKE TIMER--------------------------------
//        if (checkPauseNuke === 0) {
//            $('#soundNuke')[0].pause();
//            checkPausedNuke = 1;
//            checkSoundNuke = 0;
//        }

        pauseTimerNuke();
        
        //show pausedMessage
        $('#pausedMessageNuke').css('opacity', 1);

        //make pauseCont disappear
        $('#pauseContNuke').css('opacity', 0);

        //hiding pauseCont button to allow clicking of playCont button
        $('#pauseContNuke').delay( 250 ).queue(function (next) { 
            $(this).css('display', 'none'); 
            next();
        });

        //display playCont button
        $('#playContNuke').delay( 250 ).queue(function (next) { 
            $(this).css('display', 'block'); 
            next();
        });

        //make playCont appear
        $('#playContNuke').delay( 250 ).queue(function (next) { 
            $(this).css('opacity', 1); 
            next();
        });
        //--------------------------------------------------
        
        
        //PAUSE MY TELE TIMER--------------------------------
//        if (checkPauseTele === 0) {
//            $('#soundTele')[0].pause();
//            checkPausedTele = 1;
//            checkSoundTele = 0;
//        }
        
        pauseTimerTele();
        
        //show pausedMessage
        $('#pausedMessageTele').css('opacity', 1);

        //make pauseCont disappear
        $('#pauseContTele').css('opacity', 0);

        //hiding pauseCont button to allow clicking of playCont button
        $('#pauseContTele').delay( 250 ).queue(function (next) { 
            $(this).css('display', 'none'); 
            next();
        });

        //display playCont button
        $('#playContTele').delay( 250 ).queue(function (next) { 
            $(this).css('display', 'block'); 
            next();
        });

        //make playCont appear
        $('#playContTele').delay( 250 ).queue(function (next) { 
            $(this).css('opacity', 1); 
            next();
        });
        //--------------------------------------------------
        

        //MAKE UNIVERSAL pauseCont DISAPPEAR-----------------
        $('#pauseCont').css('opacity', 0);

        //hiding pauseCont button to allow clicking of playCont button
        $('#pauseCont').delay( 250 ).queue(function (next) { 
            $(this).css('display', 'none'); 
            next();
        });

        //display playCont button
        $('#playCont').delay( 250 ).queue(function (next) { 
            $(this).css('display', 'block'); 
            next();
        });

        //make playCont appear
        $('#playCont').delay( 250 ).queue(function (next) { 
            $(this).css('opacity', 1); 
            next();
        });
        //--------------------------------------------------
        
    });
    

//----------------------------------------------------------------------------------------------------------- |  
    
    
//Timer 5:00----------------------------------------------------------------------------------------------------------- |
    
    //total minutes
    var TOTAL_MINTele = 5;

    //keep track of total time
    var startTimeTele = TOTAL_MINTele * 60;

    //keep track of the time NOW
    var currentTimeTele = 0;

    //diff between startTime and currentTime
    //set appropriately so that it knows that its >0 at start
    var timeLeftTele = 9999;

    //store interval timer
    var timerTele;

    //store time when paused
    var pausedTimeTele = 0;
    
    var checkSoundTele = 0;
    var checkPauseTele = 0;


    //display the start time amount
    $('#timerHolderTele').html(TOTAL_MINTele + ':00')
    
    //make my restart icon not draggabl
    $('#restartIconTele').attr('draggable', false);
    
    
    //Play Button
    $('#playContTele').click( function(){

//        if (checkSoundTele === 0){
//            $('#soundTele')[0].play();
//            $('#soundTele').autoplay = true;
//            checkSoundTele = 1;
//            checkPauseTele = 0;
//        }
        
        //start or continue my timer
        startTimerTele();

        //make playCont disappear
        $(this).css('opacity', 0);
        
        //make blackBar disappear
        $('#blackBar').css('opacity', 0);
        
        //make Universal Pause/Play Appear
        $('#btnMid1').css('bottom', '15%');

        //resize and move elements to make room for restart button
        $('#btnMid1Tele').css('margin-left', '-25%');

        //change display of playCont button to allow clicking of pauseCont button
        $(this).delay( 250 ).queue(function (next) { 
            $(this).css('display', 'none'); 
            next();
        });

        //display pauseCont button
        $('#pauseContTele').delay( 250 ).queue(function (next) { 
            $(this).css('display', 'block'); 
            next();
        });

        //make pauseCont appear
        $('#pauseContTele').delay( 250 ).queue(function (next) { 
            $(this).css('opacity', 1); 
            next();
        });
        
        //hide pausedMessage
        $('#pausedMessageTele').css('opacity', 0);
        
        setTimeout(checkPause, 500);

    });

    
    //Pause Button
    $('#pauseContTele').click( function(){
        
//        if (checkPauseTele === 0) {
//            $('#soundTele')[0].pause();
//            checkPausedTele = 1;
//            checkSoundTele = 0;
//        }

        //pause me
        pauseTimerTele();

        //make pauseCont disappear
        $('#pauseContTele').css('opacity', 0);

        //hiding pauseCont button to allow clicking of playCont button
        $('#pauseContTele').delay( 250 ).queue(function (next) { 
            $(this).css('display', 'none'); 
            next();
        });

        //display playCont button
        $('#playContTele').delay( 250 ).queue(function (next) { 
            $(this).css('display', 'block'); 
            next();
        });

        //make playCont appear
        $('#playContTele').delay( 250 ).queue(function (next) { 
            $(this).css('opacity', 1); 
            next();
        });
        
        //show pausedMessage
        $('#pausedMessageTele').css('opacity', 1);
        
        setTimeout(checkPlay, 500);

    });

    
    //rotate angle
    var b = 0;
    //Restart Button
    $('#restartContTele').click( function(){
        
//        $('#soundTele')[0].pause();
//        checkPausedTele = 1;
//        checkSoundTele = 0;
        
        b += 360;
        $('#restartIconTele').css('transform', 'rotate(' + b + 'deg)');
        
        //moving buttons if restart button is pressed with 0 time left
        if (timeLeftTele === 0) {
            
            $('#btnMid2Tele').css('opacity', 0);
        
            $('#btnMid2Tele').delay( 2000 ).queue(function (next) { 
                $(this).css('margin-left', '22%'); 
                next();
            });
            
        }

        stopTimerTele();
        
        //hide pausedMessage
        $('#pausedMessageTele').css('opacity', 0);
        
        //hiding pauseCont button
        $('#pauseContTele').css('display', 'none'); 
        
        //reveal playCont
        $('#playContTele').css({
            'display': 'block',
            'opacity': 1,
        });

    });
    
    
    function pauseTimerTele () {
        
        //grab the current time
        pausedTimeTele = currentTimeTele;
        
        //stop all previous intervals
        clearInterval(timerTele);
        
    }
    
    
    function stopTimerTele () {
        
        currentTimeTele = 0;
        
        //stop all previous intervals
        clearInterval(timerTele);
        timeLeftTele = 9999;
        
        //display the start time amount
         $('#timerHolderTele').html(TOTAL_MINTele + ':00')
        
    }

    
    function startTimerTele () {

        //stop all previous intervals
        clearInterval(timerTele);

        if(pausedTimeTele != currentTimeTele){
            currentTimeTele = 0;
        }

        //set interval running once every 'x' milliseconds
        //runTimer function is run 
        timerTele = setInterval(runTimerTele,1000);

    }

    
    function runTimerTele () {

        //current time increased by one
        currentTimeTele ++;
        
        //get the time that is left, and tell it to stop at 0
        if (timeLeftTele > 0) {
            timeLeftTele = startTimeTele - currentTimeTele;
        }

        //if timer is 0, make only restart button visible
        if (timeLeftTele === 0) {
            timeLeftTele = 0;
            
            $('#btnMid1Tele').css({
                'margin-left': 0,
                'opacity': 1,
            });
            
            $('#btnMid2Tele').css('margin-left', 0); 
        }
  
        var minutesTele = Math.floor(timeLeftTele / 60);
        var secondsTele = timeLeftTele % 60;

        //add '0' to match timer formatting: (1:05 instead of 1:5)
        if (secondsTele < 10) {
            secondsTele = ('0'+secondsTele).slice(-4);
        }

        //return my time and make it look nice
        $('#timerHolderTele').html(minutesTele + ':' + secondsTele).css({
            'font-size': '7em',
        });
        
        var scaleTele = 1 + (currentTimeTele / 600);
        var scaleTeleString = scaleTele.toString();
        
        var widthTele = 50 + ((currentTimeTele / 300) * 50)
        var widthTeleString = widthTele.toString();
        
        $('#bgTele').css({
            'opacity': currentTimeTele / 300,
            'width': widthTeleString + '%',
        });
        
        $('#contTele').css({
            'transform': 'scale(' + scaleTeleString + ')',
        });
        
        $('#soundNuke').prop("volume", scaleTele - 0.8);
        
    }   


    //checks this every second...
    setInterval(checkVars,1000);
    function checkVars () {
        
        //only show restart button if timer has started
        if (currentTimeTele > 0) {
            $('#btnMid2Tele').css('opacity', 1);
        }
        
        if (currentTimeNuke === 0 && currentTimeTele === 0) {
            
            //MAKE UNIVERSAL pauseCont DISAPPEAR-----------------
                $('#pauseCont').css('opacity', 0);

                //hiding pauseCont button to allow clicking of playCont button
                $('#pauseCont').delay( 250 ).queue(function (next) { 
                    $(this).css('display', 'none'); 
                    next();
                });

                //display playCont button
                $('#playCont').delay( 250 ).queue(function (next) { 
                    $(this).css('display', 'block'); 
                    next();
                });

                //make playCont appear
                $('#playCont').delay( 250 ).queue(function (next) { 
                    $(this).css('opacity', 1); 
                    next();
                });
                //--------------------------------------------------
            
        }
        
        if ( $('#bgTele').css( 'width' ) > $('#bgNuke').css( 'width' ) ) {
            
            $('#bgTele').css( 'z-index', '995');
            $('#bgNuke').css( 'z-index', '0');
            
        }
        
        if ( $('#bgNuke').css( 'width' ) > $('#bgTele').css( 'width' ) ) {
            
            $('#bgTele').css( 'z-index', '0');
            $('#bgNuke').css( 'z-index', '995');
            
        }
        
        if ( timeLeftTele === 0) {
            
            $('#contNuke').css( 'opacity', 0);
            $('.btnMidTele').css( 'display', 'none');
            
            $('#contTele').css( 'right', '37%');
            
            $('#restartCont').css( 'display', 'block');
            $('#playCont').css( 'display', 'none');
            $('#pauseCont').css( 'display', 'none');
            
//            $('#soundNuke')[0].pause();
//            checkPausedNuke = 1;
//            checkSoundNuke = 0;
//            
//            $('#soundTele')[0].pause();
//            checkPausedTele = 1;
//            checkSoundTele = 0;

        }
        
        if ( timeLeftNuke === 0) {

            $('#contTele').css( 'opacity', 0);
            $('.btnMidNuke').css( 'display', 'none');
            
            $('#contTele').css( 'left', '37%');
            
            $('#restartCont').css( 'display', 'block');
            $('#playCont').css( 'display', 'none');
            $('#pauseCont').css( 'display', 'none');
            
//            $('#soundNuke')[0].pause();
//            checkPausedNuke = 1;
//            checkSoundNuke = 0;
//            
//            $('#soundTele')[0].pause();
//            checkPausedTele = 1;
//            checkSoundTele = 0;
        }
        
//        if ( timeLeftTele > 150) {
//            document.getElementById("soundTele").playbackRate = 1;
//        }
//        
//        if ( timeLeftNuke > 900) {
//            document.getElementById("soundNuke").playbackRate = 1;
//        }
//        
//        if ( timeLeftTele < 150) {
//            document.getElementById("soundTele").playbackRate = 1.25;
//        }
//        
//        if ( timeLeftTele < 60) {
//            document.getElementById("soundTele").playbackRate = 1.5;
//        }
//        
//        if ( timeLeftNuke < 900) {
//            document.getElementById("soundNuke").playbackRate = 1.25;
//        }
//        
//        if ( timeLeftNuke < 180) {
//            document.getElementById("soundNuke").playbackRate = 2;
//        }  
        
    }
//----------------------------------------------------------------------------------------------------------- |
    
    function checkPlay () {
            if ( $('#pauseContNuke').css('display') === 'none' && $('#pauseContTele').css('display') === 'none' ) {

                //MAKE UNIVERSAL pauseCont DISAPPEAR-----------------
                $('#pauseCont').css('opacity', 0);

                //hiding pauseCont button to allow clicking of playCont button
                $('#pauseCont').delay( 250 ).queue(function (next) { 
                    $(this).css('display', 'none'); 
                    next();
                });

                //display playCont button
                $('#playCont').delay( 250 ).queue(function (next) { 
                    $(this).css('display', 'block'); 
                    next();
                });

                //make playCont appear
                $('#playCont').delay( 250 ).queue(function (next) { 
                    $(this).css('opacity', 1); 
                    next();
                });
                //--------------------------------------------------

            }
        }
    
    function checkPause () {
            if ( $('#playContNuke').css('display') === 'none' && $('#playContTele').css('display') === 'none' ) {

                //MAKE UNIVERSAL playCont DISAPPEAR-----------------
                $('#playCont').css('opacity', 0);

                //change display of playCont button to allow clicking of pauseCont button
                $('#playCont').delay( 250 ).queue(function (next) { 
                    $(this).css('display', 'none'); 
                    next();
                });

                //display Universal pauseCont button
                $('#pauseCont').delay( 250 ).queue(function (next) { 
                    $(this).css('display', 'block'); 
                    next();
                });

                //make pauseCont appear
                $('#pauseCont').delay( 250 ).queue(function (next) { 
                    $(this).css('opacity', 1); 
                    next();
                });
                //--------------------------------------------------

            }
        }
    
    //make fullscreenMessage go away if not fs
    if (screenfull.enabled) {
        
        screenfull.on('change', function () {
            $('#fullscreenMessage').toggleClass('messageToggle');
        });  
        
    }
    
    
    //when I Click Universal Restart, reload Page
    $('#restartCont').click( function(){
        
        window.location.reload();
        
    });
    
    
});