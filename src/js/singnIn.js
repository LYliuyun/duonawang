
//登录js
require(['config'],function(){

	require(['jquery','../lib/gVerify'],function($){

		var $head = $('#head');

		//引入头部文件
		$head.load('./head.html header',function(){

			//高亮
			$head.find('a').eq(1).addClass('active');
		});

		//引入尾部
		$('#foot').load('./foot.html .footbox');

		//验证
		var $btn = $('button');
		// 获取输入框
		var $name = $('#name');
		var $pass = $('#password');

		//声明变量接收
		var nameValue;
		var password;
		//用户名失去焦点时验证
		$name.blur(function(){
			
			//获取输入框的值
			nameValue = $name[0].value.trim();

			//判断用户名是否存在
			$.ajax({

				url:'../api/singIn.php',
				data:{name:nameValue},
				success:function(res){
					if(res === 'true'){
						//添加样式
						$name.parent().find('span')[0].innerHTML = '';
						$name.parent().find('span').html('恭喜，用户名正确!').css({color:'green'});
						$name.css({border:'1px solid green'});
						$name.parent().prev().css({color:'green'})
					}else{
						//添加样式
						$name.parent().find('span')[0].innerHTML = '';
						$name.parent().find('span').html('用户名不存在!').css({color:'red'});
						$name.css({border:'1px solid red'});
						$name.parent().prev().css({color:'red'});

					}
				}
			});



		});

		//密码失去焦点时验证
		$pass.blur(function(){
			
			//获取输入框的值
			nameValue = $name[0].value.trim();
			password = $pass[0].value.trim();

			//判断密码是否正确
			$.ajax({

				url:'../api/singIn.php',
				data:{name:nameValue,password:password},
				success:function(res){
					if(res === 'true'){
						//添加样式
						$pass.parent().find('span')[0].innerHTML = '';
						$pass.parent().find('span').html('恭喜，密码正确!').css({color:'green'});
						$pass.css({border:'1px solid green'});
						$pass.parent().prev().css({color:'green'})
					}else{
						//添加样式
						$pass.parent().find('span')[0].innerHTML = '';
						$pass.parent().find('span').html('密码错误!').css({color:'red'});
						$pass.css({border:'1px solid red'});
						$pass.parent().prev().css({color:'red'});
					}
				}
			});



		})

		//验证码
		var verifyCode = new GVerify("v_container");	
		$("#code_input").blur(function(){
			var res = verifyCode.validate($("#code_input").val());
			if(res){
				$("#code_input").parent().find('span')[0].innerHTML = '';
				$("#code_input").parent().find('span').html('验证码正确！').css({color:'green'});
				$("#code_input").parent().prev().css({color:'green'});
			}else{
				$("#code_input").parent().find('span')[0].innerHTML = '';
				$("#code_input").parent().find('span').html('验证码错误！').css({color:'red'});
				$("#code_input").parent().prev().css({color:'red'});
			}
			
		})

		//绑定点击事件
		$btn.on('click',function(e){
			//阻止浏览器默认行为
			e.preventDefault();
			nameValue = $name[0].value.trim();
			password = $pass[0].value.trim();
			$.ajax({
				url:'../api/singIn.php',
				data:{name:nameValue,password:password},
				success:function(res){
					if(res == 'true'){
						console.log(666)
					}
				}

			})

			
		})



		

		
	
	});

});