require(['config'],function(){

	require(['jquery','index_head'],function(){

		//获取域名上的数据
		var num = location.search.slice(1);
		var data = [];
		if(num){
			data = decodeURI(num.split('=')[1]);
		};

		//引入头部
		$('.list_head').load('./index_head.html .index_head',function(){
			$('.smallbox').children().eq(0).on('click',function(){
					location.href= './singnIn.html';
			}).next().on('click',function(){location.href= './register.html';});

			//循环找出高亮
			var $ele = $('.nav').children().eq(0).children();
			var len = $('.nav').children().eq(0).children().length;
			for(var j=0;j<len;j++){
				if($ele.eq(j).find('a').html() == data){
					$ele.eq(j).addClass('active');
				}else if(data == ''){
					$ele.eq(1).addClass('active');
				}
			};

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

			//点击
			var $ele = $('.list').parent().siblings();
			for(var i=0;i<$ele.length;i++){
				$ele.eq(0).on('click',function(){location.href= '../index.html';})
				if(i>0){
					$ele.eq(i).on('click',function(){
						var $total = $(this).find('a').html();
						location.href = './list.html?total='+$total;
					});
				}

			}
		});

		//引入尾部
		$('.list_foot').load('./foot.html .footbox');
		
		//连接后端
		var pageNo = 1;
		ajax(pageNo,data);

		//事件委托绑定点击事件
		$('.page').on('click','span',function(){
			pageNo = this.innerHTML;

			ajax(pageNo,data);

		});

		//传输函数
		function ajax(pageNo,data){
			$.ajax({
				url:'../api/list.php',
				data:{
					total:data,
					pageNo:pageNo,
				},
				success:function(res){
					var res = JSON.parse(res);
					//生成ul
					var $ul = $('<ul/>');

					//生成分页
					var num = Math.ceil(res.total/res.qty);
					$('.page')[0].innerHTML = '';
					if(num>1){
						//循环生成
						for(var i=0;i<num;i++){
							var $span = $('<span/>');
							$span.html(i+1);

							//高亮
							if($span.html() == pageNo){
								$span.addClass('pageActive');
							}; 

							//写入页面
							$('.page').append($span);
						};
					};

					//遍历生成结构
					$ul.html(res.data.map(function(item){
						return `
							<li data-id="${item.id}">
								<strong>剩余:${item.surplus}</strong>
								<a href="./details.html?id=${item.id}"><img src="../css/${item.img.split(',')[0]}"></a>
								<a href="##" class="title">${item.list}</a>
								<p>
									<span>面值:<b>${item.pirce}</b>元</span>
									<em>返利${item.rebate}元</em>
								</p>
							</li>
						`
					}).join(''));

					//写入页面
					$('.goodslist')[0].innerHTML = '';
					$ul.appendTo($('.goodslist'));

				}
			});
		}
	});
});