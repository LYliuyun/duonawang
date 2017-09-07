require(['config'],function(){

	require(['jquery'],function(){

		//获取cookie
		var cookie = document.cookie;
	
		//声明变量存放数据
		var data = [];

		if(cookie.length>0){
			cookie = cookie.split(';');
			cookie.forEach(function(item){
				var res = item.split('=');
				if(res[0] == 'name'){
					data = JSON.parse(res[1]);
					$('.smallbox').hide();
					$('.bigbox').show();
				}
			});
			
		}else{
			dara = [];
			$('.smallbox').show();
			$('.bigbox').hide();

		};

		//写入页面
		//先清空
		$('.name').html('');
		//再写入
		$('.name').html('['+data+']');

		//点击退出清空cookie
		$('.out').on('click',function(){

			//设置过期时间
			var now = new Date();
			now.setDate(now.getDate()-1);

			document.cookie = 'name=xxx;expires='+now.toUTCString();

			$('.smallbox').show();
			$('.bigbox').hide();

		});

	});
});