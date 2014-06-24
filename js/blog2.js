$(document).ready(function () {

	function MySlider () {
		this.btn = $(".button-box .btn");
		this.sceneHolder = $(".scene-holder");
		this.scene = $(".scene");
	}
	MySlider.prototype.init = function() {

		var self = this;

		//初始化屏幕场景
		var i = 0;
		$(".man").hide();
		$(".profile").hide();
		this.scene.eq(i).find(".man").delay(500).fadeIn(2000);
		this.scene.eq(i).find(".profile").delay(1500).slideDown(2000);

		//初始化底部按钮
		this.btn.each(function (i) {
			var v = i;
			$(this).bind("click",function () {
				var w = -parseInt(self.scene.css("width"));
				var posLeft = w * v + "px";
				self.sceneHolder.animate({"left": posLeft}, "slow", function() {
					self.scene.find(".man").hide();
					self.scene.find(".profile").hide();
					self.scene.eq(v).find(".man").delay(500).fadeIn(2000);
					self.scene.eq(v).find(".profile").delay(1500).slideDown(2000);
				});
				self.btn.removeClass("active");
				$(this).addClass("active");
				var bl = -100 *v;
				// $(".inner_bg").animate({"margin-top": "1000px"});
				$(".inner_bg").stop().animate({"backgroundPositionX": bl + "px"},2000);
				
			});
		});

		

	};

	var mySlider = new MySlider();
	mySlider.init();

	//作品图片弹出观看
	$(".works img").on("click", function() {
		//遮罩层
		if ($(".pop-bg").length > 0) {
			$(".pop-bg").show();
		} else {
			$("<div class='pop-bg'></div>").css({
				"width": "100%",
				"height": "100%",
				"position": "absolute",
				"left": "0",
				"top": "0",
				"z-index": "998",
				"background-color": "rgba(255,255,255,0.7)"
			}).on("click", function() {
				$(".pop-bg").hide();
				$(".img-box").hide();
			}).appendTo($("body"));
		};
		//窗口
		if ($(".img-box").length > 0) {
			$(".img-box").show();

			$(".img-box img").attr("src", this.src.split(".jpg")[0] + "large.jpg");
			// var thisrc = $(".img-box img").src;
			// var s;
		} else {
			var str = "<div class='img-box'>";
			str += "<img src='";
			str +=  this.src.split(".jpg")[0] + "large.jpg";
			str += "' /></div>";
			var imgBox = $(str);
			var boxImg = imgBox.find("img");
			boxImg.css({
				"width": "100%"
			});
			imgBox.css({
				"width": "66%",
				"height": "66%",
				"position": "absolute",
				"left": "16%",
				"top": "10%",
				"z-index": "999",
				"padding": "10px",
				"border": "1px solid #ccc",
				"background-color": "#fff",
				"overflow": "scroll"
			}).appendTo($("body"));
		};
	});

	//工作经历
	$(".exp").on("mouseover", function() {
		$(".exp-box").addClass("active");
	});
	/*$(".exp p").on("mousemove", function(e) {
		if ($(".exp1-desc").length === 0) {
			var str = "<div class='exp-desc'>";
			str += "";
			str += "</div>";
			var t = $(str);
			$(str).css({
				"padding": "10px",
				"position": "absolute",
				"z-index": "9999",
				"width": "150px",
				"background-color": "#fff"
			}).appendTo($("body"));
		};
		$(".exp1-desc").show().css({
			"top": e.pageY + "px",
			"left": e.pageX + "px"
		});
	});*/

	//技能条
	$(".skill").on("mouseover", function() {
		$(".inner").addClass("active");
	});
});