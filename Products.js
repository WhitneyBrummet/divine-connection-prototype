$(document).ready(function(){
    $("#book1>div>p").hide();
    $("#book2>div>p").hide();
    if($( window ).width() < 770){
        $("article>div>div>span:nth-child(2)").hide();
        $("article>div>div>span:nth-child(3)").hide();
        $("article>div>div>span:nth-child(4)").hide();
        $("article>div>div>span:nth-child(5)").hide();
        $("article>div>div>span:nth-child(6)").hide();
        $("article>div>div>span:nth-child(7)").hide();
        $("article>div>div>span:nth-child(8)").hide();
        setInterval(function() {
            if($("article>div>div>span:nth-child(1)").is(":visible")){
                $("article>div>div>span:nth-child(1)").toggle();
                $("article>div>div>span:nth-child(2)").toggle();
            } else if($("article>div>div>span:nth-child(2)").is(":visible")){
                $("article>div>div>span:nth-child(2)").toggle();
                $("article>div>div>span:nth-child(3)").toggle();
            } else if($("article>div>div>span:nth-child(3)").is(":visible")){
                $("article>div>div>span:nth-child(3)").toggle();
                $("article>div>div>span:nth-child(4)").toggle();
            } else if($("article>div>div>span:nth-child(4)").is(":visible")){
                $("article>div>div>span:nth-child(4)").toggle();
                $("article>div>div>span:nth-child(5)").toggle();
            } else if($("article>div>div>span:nth-child(5)").is(":visible")){
                $("article>div>div>span:nth-child(5)").toggle();
                $("article>div>div>span:nth-child(6)").toggle();
            } else if($("article>div>div>span:nth-child(6)").is(":visible")){
                $("article>div>div>span:nth-child(6)").toggle();
                $("article>div>div>span:nth-child(7)").toggle();
            } else{
                $("article>div>div>span:nth-child(7)").toggle();
                $("article>div>div>span:nth-child(1)").toggle();
            }
        }, 5000);
    }
    else{
        $("article>div>div>span:nth-child(3)").hide();
        $("article>div>div>span:nth-child(4)").hide();
        $("article>div>div>span:nth-child(5)").hide();
        $("article>div>div>span:nth-child(6)").hide();
        $("article>div>div>span:nth-child(7)").hide();
    setInterval(function() {
        if($("article>div>div>span:nth-child(1)").is(":visible") && $("article>div>div>span:nth-child(2)").is(":visible")){
            $("article>div>div>span:nth-child(1)").toggle();
            $("article>div>div>span:nth-child(2)").toggle();
            $("article>div>div>span:nth-child(3)").toggle();
            $("article>div>div>span:nth-child(4)").toggle();
        } else if ($("article>div>div>span:nth-child(3)").is(":visible") && $("article>div>div>span:nth-child(4)").is(":visible")){
            $("article>div>div>span:nth-child(3)").toggle();
            $("article>div>div>span:nth-child(4)").toggle();
            $("article>div>div>span:nth-child(5)").toggle();
            $("article>div>div>span:nth-child(6)").toggle();
        } else if ($("article>div>div>span:nth-child(5)").is(":visible") && $("article>div>div>span:nth-child(6)").is(":visible")){
            $("article>div>div>span:nth-child(5)").toggle();
            $("article>div>div>span:nth-child(6)").toggle();
            $("article>div>div>span:nth-child(7)").toggle();
        } else {
            $("article>div>div>span:nth-child(7)").toggle();
            $("article>div>div>span:nth-child(1)").toggle();
            $("article>div>div>span:nth-child(2)").toggle();
        }

    }, 5000);
  }
  $("#book1>div>div>button:first-of-type").on("click", function(){
    if($("#book1>div>p").is(":visible")){
        $("#book1>div>p").hide();
    }else{
        $("#book1>div>p").show();
    }
  })
  $("#book2>div>div>button:first-of-type").on("click", function(){
    if($("#book2>div>p").is(":visible")){
        $("#book2>div>p").hide();
    }else{
        $("#book2>div>p").show();
    }
  })
});


