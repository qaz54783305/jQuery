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


$('.close').click(function(event) {
	event.preventDefault();
$('.box3').slideToggle(1000);
});



 $(".box4").hover(function() {
 	    $(this).css("border", "10px solid #ff0000");  //mouseenter產生邊框
        $(this).css("color", "#ff0000");  //mouseenter時改變字的顏色
        }, function(){
        $(this).css("border", "none");  //mouseleave時去除邊框
        $(this).css("color", "#000");  //mouseleave時字的顏色改成黑色字的顏色改成黑色
 


 });
 
$('.dropdown').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $('.dropdown').toggleClass('active');
    $('.dropdown-open').slideToggle();
  });

});	



