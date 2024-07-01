$(document).ready(function(){
    if ( $( window ).width() > 770 ) {
        $(".navbar").show();
    }
    else if($(".navbar").is(":visible")){
        $(".navbar").hide();
        $("footer>div>a>button").html("Subscribe");
   } else{
    $(".navbar").show();
   }

   $("header>button>svg").on("click", function(){
    if($(".navbar").is(":visible")){
        $(".navbar").hide();
        $(".navbar").slideUp({duration: 1000, queue: false});
        $(".navbar>ul").slideUp({duration: 1000, queue: false});
   } else{
    $(".navbar").show();
    $(".navbar").slideDown({duration: 1000, queue: false});
    $(".navbar>ul").slideDown({duration: 1000, queue: false});
   }
  });
  if($( window ).width() > 1252){
    $(".quotes>div>span:nth-child(4)").hide();
    $(".quotes>div>span:nth-child(5)").hide();
    $(".quotes>div>span:nth-child(6)").hide();
    setInterval(function() {
        
        $(".quotes>div>span:nth-child(1)").toggle();
        $(".quotes>div>span:nth-child(2)").toggle();
        $(".quotes>div>span:nth-child(3)").toggle();
        $(".quotes>div>span:nth-child(4)").toggle();
        $(".quotes>div>span:nth-child(5)").toggle();
        $(".quotes>div>span:nth-child(6)").toggle();
    }, 5000);
  }
  else if($( window ).width() > 770){
    $(".quotes>div>span:nth-child(3)").hide();
    $(".quotes>div>span:nth-child(4)").hide();
    $(".quotes>div>span:nth-child(5)").hide();
    $(".quotes>div>span:nth-child(6)").hide();
    setInterval(function() {
        if($(".quotes>div>span:nth-child(1)").is(":visible") && $(".quotes>div>span:nth-child(2)")){
            $(".quotes>div>span:nth-child(1)").toggle();
            $(".quotes>div>span:nth-child(2)").toggle();
            $(".quotes>div>span:nth-child(3)").toggle();
            $(".quotes>div>span:nth-child(4)").toggle();
        } else if ($(".quotes>div>span:nth-child(3)").is(":visible") && $(".quotes>div>span:nth-child(4)")){
            $(".quotes>div>span:nth-child(3)").toggle();
            $(".quotes>div>span:nth-child(4)").toggle();
            $(".quotes>div>span:nth-child(5)").toggle();
            $(".quotes>div>span:nth-child(6)").toggle();
        } else {
            $(".quotes>div>span:nth-child(5)").toggle();
            $(".quotes>div>span:nth-child(6)").toggle();
            $(".quotes>div>span:nth-child(1)").toggle();
            $(".quotes>div>span:nth-child(2)").toggle();
        }

    }, 5000);
  }
  else{
    $(".quotes>div>span:nth-child(2)").hide();
    $(".quotes>div>span:nth-child(3)").hide();
    $(".quotes>div>span:nth-child(4)").hide();
    $(".quotes>div>span:nth-child(5)").hide();
    $(".quotes>div>span:nth-child(6)").hide();
    setInterval(function() {
        if($(".quotes>div>span:nth-child(1)").is(":visible")){
            $(".quotes>div>span:nth-child(1)").toggle();
            $(".quotes>div>span:nth-child(2)").toggle();
        } else if ($(".quotes>div>span:nth-child(2)").is(":visible")){
            $(".quotes>div>span:nth-child(2)").toggle();
            $(".quotes>div>span:nth-child(3)").toggle();
        } else if ($(".quotes>div>span:nth-child(3)").is(":visible")){
            $(".quotes>div>span:nth-child(3)").toggle();
            $(".quotes>div>span:nth-child(4)").toggle();
        } else if ($(".quotes>div>span:nth-child(4)").is(":visible")){
            $(".quotes>div>span:nth-child(4)").toggle();
            $(".quotes>div>span:nth-child(5)").toggle();
        } else if ($(".quotes>div>span:nth-child(5)").is(":visible")){
            $(".quotes>div>span:nth-child(5)").toggle();
            $(".quotes>div>span:nth-child(6)").toggle();
        } else {
            $(".quotes>div>span:nth-child(6)").toggle();
            $(".quotes>div>span:nth-child(1)").toggle();
        }

    }, 5000);
  }
})
