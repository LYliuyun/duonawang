require(['config'],function(){

	require(['jquery','index_head'],function($){

		//引入头部
		$('#index_load').load('./html/index_head.html .index_head',function(){
			$('.smallbox').children().eq(0).on('click',function(){
			
					location.href= './html/singnIn.html';
			}).next().on('click',function(){location.href= './html/register.html';});

			//高亮首页
			$('.index_head').find('ul').children().eq(1).addClass('active');

		});

		//引入尾部
		$('#index_foot').load('./html/foot.html .footbox');

		//滚动轮播图
		var $ul = $('.carousel').find('ul');
		var $len = $ul.children().length;

		//无缝
		$('.carousel').find('li').eq(0).clone(true).appendTo($ul);
		$ul.css({width:($len+1)*996});

		var idx=0;

		$ul.timer = setInterval(autoPlay,3000);

		//绑定点击事件
		//鼠标移入清除定时器
		$('.carousel').on('mouseenter',function(){
			clearInterval($ul.timer);
		}).on('mouseleave',function(){
			$ul.timer = setInterval(autoPlay,3000);
		});

		//上
		$('#prev').on('click',function(){
			idx--;

			if(idx<0){

				$ul.css({left:-$len*996});
				idx = $len-1;
			}
			
			show();
		});
		
		//下
		$('#next').on('click',function(){
			idx++;
			show();
		});


		function autoPlay(){
			//更新
			idx++;
			show();
		}

		function show(){
			//临界值
			if(idx>$len){
				$ul.css({left:0});
				idx = 1;
			};

			//动画滚动
			$ul.stop().animate({left:-idx*996});
		}

		var ul = $('.hot').find('ul')[0];

		//热门
		$.ajax({
			url:'./api/hot.php',
			data:{
				hot:'true'
			},
			success:function(res){
				var res = JSON.parse(res);
				ul.innerHTML = res.map(function(item,idx){
					return `
						<li data-id="${item.id}">
							<span>0${idx+1}</span>
							<a href="./html/details.html?id=${item.id}"><img src="./css/${item.img.split(',')[0]}"></a>
							<a href="##" title="${item.list}" class="title">${item.list}</a>
							<b>还剩余<em>${item.surplus}</em> 张</b>
						</li>
					`
				}).join('');
			}
		});


		//分类商品
		var onebox = document.querySelectorAll('.one');
		for(let i=0;i<onebox.length;i++){
			
			var total = onebox[i].children[0].children[0].innerHTML;

			var ulbox = onebox[i].children[1].children[0];
			//获取商品
			lyAjax(total,ulbox);


		}

		function lyAjax(total,ulbox){
			$.ajax({
				url:'./api/hot.php',
				data:{
					total:total
				},
				success:function(res){
					var res = JSON.parse(res);
					ulbox.innerHTML = res.map(function(item){
						return `
							<li data-id="${item.id}">
								<strong>剩余:${item.surplus}</strong>
								<a href="./html/details.html?id=${item.id}"><img src="./css/${item.img.split(',')[0]}"></a>
								<a href="##" class="title">${item.list}</a>
								<p>
									<span>面值:<b>${item.pirce}</b>元</span>
									<em>返利${item.rebate}元</em>
								</p>
							</li>
						`
					}).join('');
				}
			});
		}

	})

});