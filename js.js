$(document).ready(function(){
    $(".sun1").click(function(){
		$(this).css("background-color","white");
        $(".sun").css("background-color","#FF4B00");
        $(".name").css("animation-play-state","paused");
	});
	$(".sun").click(function(){
		$(this).css("background-color","white");
        $(".sun1").css("background-color","#FF4B00");
        $(".name").css("animation-play-state","running");
	});

    $(".buttom1").click(function(){
        $(".buttom2").css("display","none");
        $(".start").css("display","none");
        $(".extext1").css("display","block");
        $(".extext11").css("display","block");
        $(".photo").addClass('animate-me');
        setTimeout(function() {
            $(".photo").removeClass('animate-me');
            $(".photo").addClass('photonew');
          }, 790);
	});

    function close() {
    $(".buttom2").css("display","block");
    $(".start").css("display","block");
    $(".extext1").css("display","none");
    $(".extext11").css("display","none");
    $(".extext2").css("display","none");
    $(".extext21").css("display","none");
    $(".photo").addClass('animate-me1');
    setTimeout(function() {
        $(".photo").removeClass('animate-me1');
        $(".photo").removeClass('photonew');
      }, 790);
    }
    
    $(".extext11").click(close);
    $(".extext21").click(close);

    $(".buttom2").click(function(){
        $(".start").css("display","none");
        $(".extext2").css("display","block");
        $(".extext21").css("display","block");
        $(".photo").addClass('animate-me');
        setTimeout(function() {
            $(".photo").removeClass('animate-me');
            $(".photo").addClass('photonew');
          }, 790);
	});


    $(".start").click(function(){
        $('body,html').animate({
            scrollTop:0
        }, 900);
        setTimeout(function() {
            $(".photo").addClass('exp');
            $(".name").addClass('animate-name');
            $(".alldark").addClass('animate-all');
          }, 800);

	});


    
});

