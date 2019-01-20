$(function(){

  // // $("body").addClass("alert");
  // $("button").click(function(){
  // 	// alert($(window).height() + " px");
  // 	// $("div").hide(2000);
  // 	// $("div").show(2000);  		
  // 	$("div").height(800).width(600);  	
  // });


  $("p").click(function(){
  		$(this).hide();
  });

  $("#button1").click(function(){
  		if($("p").hide()){
  			$("p").show();
  }});
  $("#button2").click(function(){
  		$("#bla").show();
  		if ($("#bla #caca").is(":visible")){
  			return;
  		} else{
  			$("#bla").append('<div id=caca>Fermer</div>');
  		}
  		
  		$("#c").hide();
  		$("#c").fadeIn(3000);
  		$("#close").click(function(){  			
  			$("#bla").hide();
  		}); 

  	});
  	$(window).scroll(function(){
  		if($(document).scrollTop()>10){
  			$("#essai").addClass("test");
  		} else{
  			$("#essai").removeClass("test");
  		}
  	});
  
});