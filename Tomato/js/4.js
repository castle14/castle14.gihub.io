$(document).ready(function() {
	/*
	 * 浏览器里的点击效果
	 */
/*	$(".div_setting_item").on("mousedown",function(){
		$(this).addClass("div_setting_item_click");
	});
	$(".div_setting_item").on("mouseup",function(){
		$(this).removeClass("div_setting_item_click");
	});*/
	$(".div_setting_item").on("touchstart",function(){
		$(this).addClass("div_setting_item_click");
	});
	$(".div_setting_item").on("touchend",function(){
		$(this).removeClass("div_setting_item_click");
	});
});