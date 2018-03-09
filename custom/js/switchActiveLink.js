$(document).ready(function(){
	$(".nav-link").on("click",function(){
		$("li.active").removeClass("active")
		$(this).parent().addClass("active");
	})
})