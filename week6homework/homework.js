$(document).ready(function(){

var city = ["NYC", "SF", "LA", "ATX", "SYD"];     

var sel = document.getElementById('city-type');
for(var i = 0; i < city.length; i++) {	//loop through cities until user selects one
    var opt = document.createElement('option');
    opt.innerHTML = city[i]; 
    opt.value = city[i];
    sel.appendChild(opt); //when a user selects a city, append that city to the container 
	}

var city; 
   $("#city-type").on("click", function(e)
     {e.preventDefault(); 
  city = $("#city-type").val(); 
  console.log(city);  
  $("#city-type").val(""); 
  
   if(city === "NYC") { 
         $("body").addClass("nyc");
      $("body").removeClass("sf la austin sydney");
  $("#city-type").val("NYC"); //when a user selects a city, append that city to the container 
}
   else if(city === "SF") {
      $("body").addClass("sf");
      $("body").removeClass("nyc la austin sydney");
  $("#city-type").val("SF"); 
}
   else if(city === "LA") {
      $("body").addClass("la");
      $("body").removeClass("sf nyc austin sydney");
  $("#city-type").val("LA"); 
}
   else if(city === "ATX") {
      $("body").addClass("austin");
      $("body").removeClass("sf la nyc sydney");
  $("#city-type").val("ATX"); 
}
   else if(city === "SYD") {
      $("body").addClass("sydney");
      $("body").removeClass("sf la austin nyc");   
      $("#city-type").val("SYD");
      } 
   
   });
})



