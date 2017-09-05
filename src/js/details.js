require(['config'],function(){
	require(['jquery','index_head','magnifier'],function(){

		//高亮
		$('.details_nav').find('li').eq(0).addClass('liclass');

		//引入头部
		$('.details_head').load('./index_head.html .index_head',function(){
			//第一个高亮
			$('.nav ul li:nth-child(2)').addClass('active');

			//动画
			$('.list ul').css({top:-417});
			$('.list').hide();
			//鼠标移入
			$('.list').parent().on('mouseenter',function(){
				$('.list').show();
				$('.list ul').stop().animate({top:0});
				//鼠标移出
			}).on('mouseleave',function(){
				$('.list ul').stop().animate({top:-417},function(){
					$('.list').hide();
				});
				
			});

			//吸顶效果
			var $num = $('.details_loti').children();
			var height = $('.details_nav').offset().top;
			$(window).scroll(function(){
				if($(document).scrollTop()>= height){

					$('.details_nav').addClass('flexd');
					//高亮
					for(var i=0;i<$num.length;i++){
						
						$('.details_nav').find('li').eq(i).removeClass('liclass');
						if($(document).scrollTop() >= ($num.eq(i).offset().top-20) && $(document).scrollTop()<=($num.eq(i+1).offset().top-20)){
							$('.details_nav').find('li').eq(i).addClass('liclass');
						}
					}
				}else{
					$('.details_nav').removeClass('flexd');
				};


			});

		});

		//引入尾部
		$('.details_foot').load('./foot.html .footbox');

		//参数
		var id = location.search.slice(1).split('=')[1];

		//传给后端
		var $small = $('.imgb');
	
		// 商品详情
		$.ajax({
			url:'../api/details.php',
			data:{
				id:id,
			},
			success:function(res){
				var res = JSON.parse(res);
				res.forEach(function(item){
					//写入
					$('.breadcrumbs .fenLei').html(item.total);
					$('.breadcrumbs span').html(item.list);

					//循环生成图片
					$small.find('ul').html(item.img.split(',').map(function(item1,idx){
						if(idx<3){
							return `<li><a href="##"><img src="../css/${item1}"></a></li>`
						};		
					}).join(''));

					//小图
					var $xiaobox = $('.xiaobox');
					var minImg = new Image();
					minImg.src = $small.find('ul').children().eq(0).find('img')[0].src; 
					$xiaobox[0].append(minImg);

					//价格
					$('.details_nav').find('input').attr({value:item.pirce+'元'});

					//详情介绍
					var $p = $('<p/>');
					$p.html(item.list);

					//价格
					var $one_p = $('<p/>');
					$one_p.html('优惠券:<span>'+item.pirce+'</span>');

					//返利
					var $div = $('<div/>');
					$div.html(
							'<span>本次消费可返利<br><em>'+item.rebate+'</em>元</span><span>还剩余:<br><em>'+item.surplus+'</em>张</span>'
						);

					//按钮
					var $btn = $('<p/>');
					$btn.html(`<dl>
						<dt>数量：</dt>
						<dd>
							<input type="text" title="请输入购买量" value="1" />
							<i>
								<em id="addOne" href="##"></em>
								<em id="subOne" href="##"></em>
							</i>
							<b class="fl mt5">张</b>
						</dd>
					</dl><a href="##">加入购物车</a>`);

					//大图
					$('.dabox').html($xiaobox.html());

					$('.detailsbox').append($p);
					$('.detailsbox').append($one_p);
					$('.detailsbox').append($div);
					$('.detailsbox').append($btn);


					//商品详解
					$('#one_box').append(`<img src="../css/${item.newimg.split(',')[0]}">`);
					$('#two_box').append(`<img src="../css/${item.newimg.split(',')[1]}">`);
					
				
				})
			}
		});

		//放大镜
		$('.xiaobox').Magnifier({
			ele:'.dabox',
		});
		// 热门商品
		//热门
		$.ajax({
			url:'../api/hot.php',
			data:{
				hot:'true'
			},
			success:function(res){
				var res = JSON.parse(res);
				var $ul = $('<ul/>');
				$ul[0].innerHTML = res.map(function(item,idx){
					return `
						<li data-id="${item.id}">
							<a href="./details.html?id=${item.id}"><img src="../css/${item.img.split(',')[0]}"></a>
							<div>
								<b href="##" title="${item.list}" >${item.list}</b>
								<span>还剩余<i>${item.surplus}</i>张</span>								
							</div>
							<a href="./details.html?id=${item.id}" class="title"></a>
						</li>
					`
				}).join('');

				//写入页面
				$('.details_hot').append($ul);
			}
		});

	});
});