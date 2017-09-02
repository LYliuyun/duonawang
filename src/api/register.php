<?php
	
	// 配置信息
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'h5-1704';

	//连接数据库
	$conn = new mysqli($servername,$username,$password,$database);

	// 设置编码格式
	$conn->set_charset('utf8');


	//获取前端传来的数据
	$name = isset($_GET['name'])? $_GET['name']:'';
	$password = isset($_GET['password']) ? $_GET['password']: '';

	// md5加密密码
	$password = md5($password);

	// 查找所有用户信息
	$sql = "select name,password from user where name='$name' and password='$password'";

	// 查询数据库
	$result = $conn->query($sql);

	//使用查询结果	
	$row = $result->fetch_all(MYSQLI_ASSOC);
	if(count($row) == 0){
		//增
		$sql = "insert into user(name,password) values('$name','$password')";
		// 查询数据库
		$result = $conn->query($sql);

		//使用查询结果	
		if($result){
			echo 'true';
		}
	}

	

	
?>