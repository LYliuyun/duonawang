require(['config'],function(){
	require(['jquery','magnifier'],function($){
		//放大镜效果
		$.fn.Magnifier = function(data){
			//默认数据
			var defaults = {
				//显示区域宽高
				width:400,
				height:300,

				//显示方向
				direction:'right',

				//距离
				distance:10,
			};

			//拓展
			var opt = $.extend({},defaults,data);

			//遍历
			this.each(function(){
				//给当前元素添加类
				var $box = $(this).addClass('zoom');

				//生成放大镜写入当前元素并添加类
				var $minbox = $('<div/>').addClass('minbox');
				$minbox.appendTo($box);

				//获取大图
				var $bigbox = $(opt.ele);
		
				//定义盒子宽高
				$bigbox.css({
					width:opt.width,
					height:opt.height,
				});

				//鼠标移入事件
				$box.on('mouseenter',function(){
					//显示
					$minbox.show();
					$bigbox.show();

				})
				//鼠标移出事件
				.on('mouseleave',function(){
					//隐藏
					$minbox.hide();
					$bigbox.hide();
				})
				//鼠标移动事件
				.on('mousemove',function(e){
					//放大镜位置
					var left =e.pageX-$minbox.outerWidth()/2-$box.offset().left;
					var top = e.pageY-$minbox.outerHeight()/2-$box.offset().top;

					//比例
					var num =$bigbox.find('img').outerWidth()/$box.find('img').outerWidth();

					//放大镜移动区域
					//left
					if(left<0){
						left = 0;
					}else if(left>$box.outerWidth()-$minbox.outerWidth()){
						left = $box.outerWidth()-$minbox.outerWidth();
					};

					//top
					if(top<0){
						top = 0;
					}else if(top>$box.outerHeight()-$minbox.outerHeight()){
						top = $box.outerHeight()-$minbox.outerHeight();
					};

					//放大镜跟随效果和大小
					$minbox.css({
						left:left,
						top:top,
						width:opt.width/num,
						height:opt.height/num,
					});

					//大图显示区域
					$bigbox.find('img').css({
						left:-left*num,
						top:-top*num,
						zIndex:3,
					});

					//大图显示方向/距离
					var bigleft;
					var bigtop;
					switch(opt.direction){
						//右
						case 'right':
							bigleft = $box.offset().left + $box.outerWidth() + opt.distance;
							bigtop = $box.offset().top;
							break;
						//上
						case 'top':
							bigleft = $box.offset().left;
							bigtop = $box.offset().top - $bigbox.outerHeight() - opt.distance;
							break;
						//下
						case 'bottom':
							bigleft =  $box.offset().left;
							bigtop = $box.offset().top + $box.outerHeight() + opt.distance;
							break;
						//左
						case 'left':
							bigleft =  $box.offset().left - $bigbox.outerWidth() - opt.distance;
							bigtop = $box.offset().top;
							break;
						//右下方
						case 'lowerRight':
							bigleft = $box.offset().left + $box.outerWidth() + opt.distance;
							bigtop = $box.offset().top + $box.outerHeight() + opt.distance;
							break;
						//左下方
						case 'sitDown':
							bigleft = $box.offset().left - $bigbox.outerWidth() - opt.distance;
							bigtop = $box.offset().top + $box.outerHeight() + opt.distance;

					};
					$bigbox.css({
						left:bigleft,
						top:0,
					});
			
				});

			});
			//返回值，能链式调用
			return this;
		};
	});

});