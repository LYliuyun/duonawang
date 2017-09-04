require(['config'],function(){
	require(['jquery','index_head','magnifier'],function(){

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
		});

		//参数
		var id = location.search.slice(1).split('=')[1];

		//传给后端
		var $bread = $('.details');
		//默认索引
		var idx = 0;
		$.ajax({
			url:'../api/details.php',
			data:{
				id:id,
			},
			success:function(res){
				var res = JSON.parse(res);
				
				res.forEach(function(item){
					//写入
					$('.breadcrumbs .fenLei').html('');
					$('.breadcrumbs .fenLei').html(item.total);
					$('.breadcrumbs span').html('');
					$('.breadcrumbs span').html(item.list);

					//循环生成图片
					$bread.find('ul').html(item.img.split(',').map(function(item1,idx){
						if(idx<3){
							return `<li><a href="##"><img src="../css/${item1}"</a></li>`
						};		
					}).join(''));

					//小图
					$('.small').html($bread.find('ul').children().eq(0).html());
					
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
					$('.bigbox').html($('.small').html());

					$('.detailsbox').append($p);
					$('.detailsbox').append($one_p);
					$('.detailsbox').append($div);
					$('.detailsbox').append($btn);
				
				})
			}
		});


		//放大镜
		$('.small').Magnifier({
			ele:'.bigbox',
		});

	});
});