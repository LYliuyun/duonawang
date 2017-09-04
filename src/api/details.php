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

	//接收前端传来的数据
	$id = isset($_GET['id']) ? $_GET['id'] : '';

	//spl语句
	$sql = "select * from list ";

	if($id){
		$sql .= "where id='$id'";
	};

	//查询数据库
	$result = $conn->query($sql);

	//获取数据
	$res = $result->fetch_all(MYSQLI_ASSOC);
	
	//输出到后端
	echo json_encode($res,JSON_UNESCAPED_UNICODE);



?>