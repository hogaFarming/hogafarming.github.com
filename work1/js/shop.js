$(document).ready(function () {
	
	//鼠标移入时，显示操作按钮栏
	$(".r-body .item").bind("mouseover mouseout", function() {
		$(this).toggleClass("item-on");
	});

	//鼠标移入时，显示商品描述
	$("#specials .item").bind("mouseover mouseout", function() {
		$(this).toggleClass("item-on");
	});

	
	sildeShowActive();
	onsaleActive();

	function onsaleActive() {
		
		var str = "<span class='on-sale'>";
		str += "On Sale";
		str += "</span>";
		$(str).appendTo($(".is-on-sale"));
		str = "<span class='of-stock'>";
		str += "Off Stock";
		str += "</span>";
		$(str).appendTo($(".is-of-stock"));

	}

	function sildeShowActive () {
		
		var slideShow = $(".slide-show");	//获取幻灯机
		var slideScreen = $(".screen");	//获取屏幕
		var picHolder = $(".pic-holder");	//获取图片显示器
		var img = picHolder.find("img");	//获取图片
		var indicator = $(".indicator");	//获取位置指示器
		var btn = $(".sn-btn");	//获取按钮

		//设置图片显示器高度和图片位置
		var imgHeight = parseInt(img.css("height"));
		picHolder.css("height", imgHeight * img.length + "px");
		img.each(function (i) {
			$(this).css("top", imgHeight * i);
		})

		//配置按钮
		var indicator_left = indicator.position().left;
		btn.each(function (i) {
			var v = i;
			$(this).bind("click",function () {
				var dist = indicator.width() * v + indicator_left;
				indicator.animate({ "left": dist + "px" },"slow");
				picHolder.animate({"bottom": - (imgHeight * v) + "px"},"slow");
			});
		});


		
		
	}



});