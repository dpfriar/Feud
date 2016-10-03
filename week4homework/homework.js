$(document).ready(function() {
  
  $(".readmore").on("click", function(event){ 
    event.preventDefault();
    $("#show-this-on-click").slideDown();
    $(".readless").show();
    $(".readmore").hide();
  });

$(".readless").on("click", function(event){ 
    event.preventDefault();
    $("#show-this-on-click").slideUp();
    $(".readmore").show();
    $(".readless").hide();
  });

 $(".learnmore").on("click", function(event){ 
    event.preventDefault();
    $("#learnmoretext").slideDown();
     $(".readless").show();
     $(".learnmore").hide();
  });
  
});





