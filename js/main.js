$(document).ready(function(){
	$(window).scroll (function(){
		var screenTop = $(this).scrollTop();
		if(screenTop > 50){
			$('.navbar').addClass('overlay');
		}else{
			$('.navbar').removeClass('overlay');
		}
	});
	
	$(function(){
		$(".title").typed({
			strings: ["Android Developer", "Front-End Developer"],
			typeSpeed: 100,
			loop: true,
			backDelay:2000,
			backSpeed: 50
		});
	});
});