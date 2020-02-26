$(document).ready(function(){
	
    $(".button1").click(function(event) {
    	$(".title,p").toggle();
    	
    });



 $(".button2").click(function(event) {
    	$(".title2").slideUp();
    	 
    });

 
   $(".button3").click(function(event) {
    	$(".text").toggleClass('active');
    	
    });

 $(".box").hover(function() {
 	$(".title3").fadeIn(1000).fadeOut(2000);
 });
 

$('.start').click(function(event) {
	$('.box2').slideUp(3000).slideDown(1000);
});





});	



