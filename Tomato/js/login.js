$(document).ready(function() {
	$(".div_login_btn").on("touchstart",function(){
		$(this).addClass("div_login_btn_click");
	});
	$(".div_login_btn").on("touchend",function(){
		$(this).removeClass("div_login_btn_click");
	});
	$("#div_register").on("click",function(){
		location.href="register.html"
	});
});