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
				var $xiao = $('<div/>').addClass('min');
				$xiao.appendTo($box);
		
				//生成大图
				var $da = $(opt.ele);

				//定义盒子宽高
				$da.css({
					width:opt.width,
					height:opt.height,
				});

				//鼠标移入事件
				$box.on('mouseenter',function(){
					//显示
					$xiao.show();
					$da.show();

				})
				//鼠标移出事件
				.on('mouseleave',function(){
					//隐藏
					$xiao.hide();
					$da.hide();
				})
				//鼠标移动事件
				.on('mousemove',function(e){
					//放大镜位置
					var left =e.pageX-$xiao.outerWidth()/2-$box.offset().left;
					var top = e.pageY-$xiao.outerHeight()/2-$box.offset().top;

					//比例
					var num =$da.find('img').outerWidth()/$box.find('img').outerWidth();

					//放大镜移动区域
					//left
					if(left<0){
						left = 0;
					}else if(left>$box.outerWidth()-$xiao.outerWidth()){
						left = $box.outerWidth()-$xiao.outerWidth();
					};

					//top
					if(top<0){
						top = 0;
					}else if(top>$box.outerHeight()-$xiao.outerHeight()){
						top = $box.outerHeight()-$xiao.outerHeight();
					};

					//放大镜跟随效果和大小
					$xiao.css({
						left:left,
						top:top,
						width:opt.width/num,
						height:opt.height/num,
					});

					//大图显示区域
					$da.find('img').css({
						left:-left*num,
						top:-top*num,
	
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
							bigtop = $box.offset().top - $da.outerHeight() - opt.distance;
							break;
						//下
						case 'bottom':
							bigleft =  $box.offset().left;
							bigtop = $box.offset().top + $box.outerHeight() + opt.distance;
							break;
						//左
						case 'left':
							bigleft =  $box.offset().left - $da.outerWidth() - opt.distance;
							bigtop = $box.offset().top;
							break;
						//右下方
						case 'lowerRight':
							bigleft = $box.offset().left + $box.outerWidth() + opt.distance;
							bigtop = $box.offset().top + $box.outerHeight() + opt.distance;
							break;
						//左下方
						case 'sitDown':
							bigleft = $box.offset().left - $da.outerWidth() - opt.distance;
							bigtop = $box.offset().top + $box.outerHeight() + opt.distance;

					};
					$da.css({
						left:bigleft,
						top:bigtop,
					});
			
				});

			});
			//返回值，能链式调用
			return this;
		};
	});

})