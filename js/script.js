require.config({
    baseUrl: 'libs',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'jquery'
    }
});
define(["jquery"],function($){
	/*var select = document.getElementById("select");
	var option=select.getElementsByTagName("option");
	var nav=document.getElementById("nav");
	var left=document.querySelector(".left");
	var content=left.querySelector(".content");
	var div=content.getElementsByTagName("div");
	var index1=0;
	nav.onclick=function(){
		left.style.display = "block";
	}
	select.onchange=function(){
		for(var i =0;i<option.length;i++){
			if( option[i].selected){
				index1 = i;
			}
		}
		for(var j=0;j<div.length;j++){
			div[j].style.display = "none"
		}
		div[index1].style.display="block";
	}*/
	var w=$(window).width();
	$(".top").css({"width":w*6/100,"height":w*6/100});
	$(".bottom").css({"width":w*8/100,"height":w*8/100});
	$(window).on("resize",function(){
		var w=$(window).width();
		$(".top").css({"width":w*6/100,"height":w*6/100});
		$(".bottom").css({"width":w*8/100,"height":w*8/100});
	})
	$("#nav").on("click",function(){
		if( $(".left").hasClass("bounceInLeft") ){
			$(".left").removeClass("bounceInLeft").addClass("bounceOutLeft")
		}else{
			$(".left").show().removeClass("bounceOutLeft").addClass("animated bounceInLeft")

		}
	})
	$("#select").on("change",function(){
		var index=$("option:selected").index();
		$(".content>div").eq(index).show().siblings("div").hide();
	})
	$(".alert button").on("click",function(){
		$(".alert").hide();
	})
	$(".content>div>h3").on("click",function(){
		$(this).next("ul").slideDown();
		$(this).siblings("h3").next("ul").slideUp();
	})
})