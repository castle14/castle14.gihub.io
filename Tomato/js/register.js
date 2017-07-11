$(document).ready(function() {
	$("#div_register").on("click",function(){
		location.href="login.html"
	});
	$("#div_login").on("click",function(){
		showLoadingDlgWithOverlay();
		setTimeout("hideLoadingDlgWithOverlay()", 5000);
	});
});