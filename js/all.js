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


$('.open').click(function(event) {
  $('.box5').delay().slideDown();
  $('.box6').delay().slideDown();
  $('.box7').delay().slideDown();
});


//字體縮放
$('.font-b').click(function(event) {
 event.preventDefault();
 $('.content p').css('font-size','20px');
});
//字體縮放
$('.font-m').click(function(event) {
 event.preventDefault();
 $('.content p').css('font-size','16px');
});
//字體縮放
$('.font-s').click(function(event) {
 event.preventDefault();
 $('.content p').css('font-size','13px');
});

$('.ad-close').click(function(event) {
   $('.ad').fadeOut();
});



$('.box').hover(function() {
  $(this).addClass('box animated hinge');
}, function() {
  /* Stuff to do when the mouse leaves the element */
});


















});	



