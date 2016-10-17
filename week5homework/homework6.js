$(document).ready(function(){

console.log("here"); 

var city; 
   $("#submit-btn").on("click", function(e)
     {e.preventDefault(); 
  city = $("#city-type").val(); 
  console.log(city);  
  $("#city-type").val(""); 
  
   if(city === "NYC" || city === "NY" || city === "New York"|| city === "New York City" || city === "nyc" || city === "ny" || city === "new york" || city === "new york city") { 
         $("body").addClass("nyc");
      $("body").removeClass("sf la austin sydney");
  $("#city-type").val(""); 
}
   else if(city === "San Francisco" || city === "SF" || city === "Bay Area"|| city === "san francisco" || city === "sf" || city === "bay area") {
      $("body").addClass("sf");
      $("body").removeClass("nyc la austin sydney");
  $("#city-type").val(""); 
}
   else if(city === "LA" || city === "la" || city === "Los Angeles"|| city === "los angeles" ||  city === "LAX" || city === "lax") {
      $("body").addClass("la");
      $("body").removeClass("sf nyc austin sydney");
  $("#city-type").val(""); 
}
   else if(city === "austin" || city === "Austin" || city === "ATX"|| city === "atx") {
      $("body").addClass("austin");
      $("body").removeClass("sf la nyc sydney");
  $("#city-type").val(""); 
}
   else if(city === "sydney" || city === "Sydney" || city === "SYD"|| city === "syd") {
      $("body").addClass("sydney");
      $("body").removeClass("sf la austin nyc");   
      } 
   
   });
});