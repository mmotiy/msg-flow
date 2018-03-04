/**
 * 弹幕插件/msg-flow plugin
 */
+ function(window, undefined) {
	
	var $mess = {};

	function generateMess(data) {
		var ms = "<div id=\"box\" class=\" mess def_msg\" style=\"background: " + data.bcolor + ";position: absolute;top:" + data.top + "px\">";
		ms += "<img  class=\"left_img\"  src=\"" + data.src + "\" />";
		ms += "<span class='mtxt'>" + data.text + "</span></div>";
		return ms;
	}

	//初始化 留言条 css 
	//param leap 如果是true 将会在初始化css样式之后直接 展示弹窗
	function init(leap) {
		$(".mess").each(function(index, item) {
			$(item).css("minWidth", $(".mtxt", item).html().length * 16 + "px");
			$(item).css("right", (-30 - item.clientWidth) + "px");
			var ttime = Math.floor($(".mtxt", item).html().length * 0.5);
			$(item).css("transition", "right " + (20 + ttime) + "s");
			$(item).css("transition-delay", parseInt(Math.random() * 5 + (index / 1.3), 10) + "s");
		})
		show();
	}

	function show() {
		$(".mess").each(function(index, item) {
			$(item).css("right", window.innerWidth + 30 + "px");
		})
	}
	$mess.init = init 
	$mess.generateMess = generateMess
	$mess.show = show
	window.$mess = $mess
}(window, undefined);