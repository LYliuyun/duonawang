require(['config'],function(){

	require(['jquery'],function($){

		//引入头部
		$('#head').load('./head.html header',function(){

			//高亮
			$('#head').find('a').eq(0).addClass('active');
		});

		//引入尾部
		$('#foot').load('./foot.html .footbox');


		//验证
		$name = $('#name');
		$password = $('#password');
		var name;
		//用户名失去焦点时验证是否存在
		$name.blur(function(){
			//获取输入框的值
			name = $name[0].value.trim();
			 lyName(name);
			
		});
		var password;
		//密码失去焦点时验证是否符合
		$password.blur(function(){
			password = $password[0].value.trim();
			lyPass(password);
		});

		var $pass_two = $('.pass_two');
		$('#btn').on('click',function(){
			name = $name[0].value.trim();
			password = $password[0].value.trim();
			lyName(name);
			lyPass(password);
			if(name == ''){
				return false;
			}
			//pass_two
			var pass_two = $pass_two[0].value;
			if(pass_two !== password){
				$pass_two.parent().find('span')[0].innerHTML = '';
				$pass_two.parent().find('span').html('密码不一致！').css({color:'red'});
				$pass_two.css({border:'1px solid red'});
				$pass_two.parent().prev().css({color:'red'})
				//获取焦点是隐藏
				$pass_two.focus(function(){
					$pass_two.parent().find('span').html('');
				});

			};

			//把注册成功后的name,password写入数据库
			$.ajax({
				url:'../api/register.php',
				data:{
					name:name,
					password:password
				},
				success:function(res){
					if(res == 'true'){
						location.href = './singnIn.html';
					}
					
				}
			})
		});

		//用户名验证
		function lyName(name){
			if(!/^1[34578]\d{9}$/.test(name)){
				$name.parent().find('span')[0].innerHTML = '';
				$name.parent().find('span').html('手机号码格式不对!').css({color:'red'});
				$name.css({border:'1px solid red'});
				$name.parent().prev().css({color:'red'})
				//获取焦点是隐藏
				$name.focus(function(){
					$name.parent().find('span').html('');
				});

				return false;
			}else{
				$.ajax({
					url:'../api/singIn.php',
					data:{name:name},
					success:function(res){
						if(res == 'false'){
							//添加样式
							$name.parent().find('span')[0].innerHTML = '';
							$name.parent().find('span').html('恭喜，用户名正确!').css({color:'green'});
							$name.css({border:'1px solid green'});
							$name.parent().prev().css({color:'green'})
						}else{
							//添加样式
							$name.parent().find('span')[0].innerHTML = '';
							$name.parent().find('span').html('太受欢迎了，换一个吧!').css({color:'red'});
							$name.css({border:'1px solid red'});
							$name.parent().prev().css({color:'red'})
						}

					}
				})
			}
		}
		//密码验证
		function lyPass(password){
			if(!/^[\S]{6,20}$/.test(password)){
				$password.parent().find('span')[0].innerHTML = '';
				$password.parent().find('span').html('密码不能少于6位!').css({color:'red'});
				$password.css({border:'1px solid red'});
				$password.parent().prev().css({color:'red'})
				//获取焦点是隐藏
				$password.focus(function(){
					$password.parent().find('span').html('');
				});

				return false;
			}else{
				$password.parent().find('span')[0].innerHTML = '';
				$password.parent().find('span').css({color:'green'});
				$password.css({border:'1px solid green'});
				$password.parent().prev().css({color:'green'})
			}

		}
	
	})



})