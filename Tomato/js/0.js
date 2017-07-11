function showLoadingDlg(){
	$("<div id='div_overlay_msg'></div>")
	.html("<div class='div_msg_title'>"+"加载中"+"</div>")
	.append("<div class='div_msg_body'><img src='../img/loading.gif' height='40px' width='40px'/></div>")
	.appendTo("body");
	adjust("#div_overlay_msg");
}
function showLoadingDlgWithOverlay(_title){
	showOverlay() ;
	showLoadingDlg(_title)
}
function hideLoadingDlgWithOverlay(){
	hideOverlay() ;
	hideMsgDialog()
}
/* 
 * 显示遮罩层
 * */
function showOverlay() {
	$("<div></div>").addClass("overlay")
	.height(pageHeight())
	.width(pageWidth())
	.appendTo("body");
//	$(".overlay").height(pageHeight());
//	$(".overlay").width(pageWidth());
//	// fadeTo第一个参数为速度，第二个为透明度
//	// 多重方式控制透明度，保证兼容性，但也带来修改麻烦的问题
//	$(".overlay").fadeTo(200, 0.5);
}

/* 隐藏覆盖层 */
function hideOverlay() {
	$(".overlay").remove();
}
function hideMsgDialog() {
	$("#div_overlay_msg").remove();
}
/* 当前页面高度 */
function pageHeight() {
	return document.body.scrollHeight;
}

/* 当前页面宽度 */
function pageWidth() {
	return document.body.scrollWidth;
}
/* 定位到页面中心 */
function adjust(id) {
	var w = $(id).width();
	var h = $(id).height();

	var t = scrollY() + (windowHeight() / 2) - (h / 2);
	if(t < 0) t = 0;

	var l = scrollX() + (windowWidth() / 2) - (w / 2);
	if(l < 0) l = 0;

	$(id).css({
		left: l + 'px',
		top: t + 'px'
	});
}

//浏览器视口的高度
function windowHeight() {
	var de = document.documentElement;

	return self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
}

//浏览器视口的宽度
function windowWidth() {
	var de = document.documentElement;

	return self.innerWidth || (de && de.clientWidth) || document.body.clientWidth
}

/* 浏览器垂直滚动位置 */
function scrollY() {
	var de = document.documentElement;

	return self.pageYOffset || (de && de.scrollTop) || document.body.scrollTop;
}

/* 浏览器水平滚动位置 */
function scrollX() {
	var de = document.documentElement;

	return self.pageXOffset || (de && de.scrollLeft) || document.body.scrollLeft;
}
$(document).ready(function() {
	$("#div_main_page_menu").on("click", function() {
		location.href = "2.html";
	});
	$("#div_browse_menu").on("click", function() {
		location.href = "3.html";
	});
	$("#div_setting_menu").on("click", function() {
		location.href = "4.html";
	});
});


$(document).ready(function() {
	$(".div_line_btn").on("touchstart",function(){
		$(this).addClass("div_line_btn_click");
	});
	$(".div_line_btn").on("touchend",function(){
		$(this).removeClass("div_line_btn_click");
	});
});