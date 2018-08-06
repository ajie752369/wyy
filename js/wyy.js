
	document.querySelector('#l-btn').addEventListener('click',function(){
		var arr = document.querySelector('.l-btn-in');
		arr.classList.add('active');
	})
	document.querySelector('.close').addEventListener('click',function(){
		var arr = document.querySelector('.l-btn-in');
		arr.classList.remove('active');
	})
	
	// 轮播图
	$(function(){
	var index=0,
		window_width=300,
		timer=null,
		images_count=4;

	var isFirst = true
	play();
	function play(){
		// 还原不透明度
		$(".menu li:first").css({opacity:1})  
		if(!isFirst){
			// 找到第一张图片，复制 保存在变量first
			// 删除第一张图片
			// 在最后的图片后面加上第一张图片

			var first = $(".menu li:first").clone();
			$(".menu li:first").remove();
			$(".menu li:last").after(first);
		}
		// 给图片添加淡出效果（显示的图片就是第一张）
		// $(".menu li:first").fadeOut(5000);
		isFirst = false
		// 遍历出span加上一个类名然后遍历同级其他span清除之前加的类名

		if (index > images_count - 1) {	
			index=0;
			$('span').eq(0).addClass('spanPlay').siblings().removeClass('spanPlay');
		}else{
			$('span').eq(index).addClass('spanPlay').siblings().removeClass('spanPlay');
		}
		index++;
		
	}
	// timer=setInterval(play,2000);
	
	$('.div1,.dir1,.dir2').mouseover(function(){
		clearInterval(timer);
		
	})

	$('.div1,.dir1,.dir2').mouseout(function(){
	    timer=setInterval(play,2000);

	})

	$('.dir2').click(function(){
		var afirst = $(".menu li:first").clone();
		$(".menu li:first").remove();
		$(".menu li:last").after(afirst);
			if (index >3) {	
			index=0;
			$('span').eq(0).addClass('spanPlay').siblings().removeClass('spanPlay');
		}else{
			$('span').eq(index).addClass('spanPlay').siblings().removeClass('spanPlay');
		}
		index++;
	})

	$('.dir1').click(function(){
		var alast = $(".menu li:last").clone();
		$(".menu li:last").remove();
		$(".menu li:first").before(alast);
		if (index <0) {	
			index=3;
			$('span').eq(3).addClass('spanPlay').siblings().removeClass('spanPlay');
		}else{
			$('span').eq(index).addClass('spanPlay').siblings().removeClass('spanPlay');
		}
		index--;
		
	})

	$("span").eq(index).click(function(){
		$(this)[0].css({"background-color":"red"});
		if (index > 3) {
			index = 0
			$(".menu").css({left:-300*index});
		}
	})
})

	// 新碟上架
	$("#xindieL").click(function () {
		var a = $(".new-box1").css('left');
		if (a === "0px") {
			 $(".new-box1").css('left','-655px');
			 $(".new-box2").css('left','0px');
		}else{
			 $(".new-box1").css('left','0px');
			 $(".new-box2").css('left','655px');
		}
	})

	$("#xindieR").click(function () {
		var a = $(".new-box1").css('left');
		if (a === "0px") {
			 $(".new-box1").css('left','-655px');
			 $(".new-box2").css('left','0px');
		}else{
			 $(".new-box1").css('left','0px');
			 $(".new-box2").css('left','655px');
		}
	})